import { useEffect, useMemo, useRef, useState } from 'react';
import { Menu, Bell, ShieldCheck, ExternalLink } from 'lucide-react';
import { roadmap } from './data/roadmap';
import { usePersistentState, subscribeSaveStatus } from './hooks/usePersistentState';
import { playAlarm, unlockAudio } from './utils/alarm';
import { clamp, estimateFinish, getModuleProgress, percentOf } from './utils/progress';
import Sidebar from './components/Sidebar';
import Overview from './components/Overview';
import Roadmap from './components/Roadmap';
import CourseTracker from './components/CourseTracker';
import FocusCenter from './components/FocusCenter';
import Stats from './components/Stats';
import Guide from './components/Guide';

const pageTitles = {
  overview: 'نمای کلی', roadmap: 'نقشهٔ راه', courses: 'پیگیری دوره‌ها', focus: 'مرکز تمرکز', guide: 'راهنمای تمرین', stats: 'آمار و گزارش',
};

const defaultStopwatch = { elapsedMs: 0, startedAt: null };
const defaultTimer = {
  focusMinutes: 25,
  breakMinutes: 5,
  phase: 'focus',
  status: 'idle',
  remainingMs: 25 * 60 * 1000,
  endAt: null,
};

export default function App() {
  const [activePage, setActivePage] = useState('overview');
  const [mobileOpen, setMobileOpen] = useState(false);
  const [clockTick, setClockTick] = useState(Date.now());
  const [progressState, setProgressState] = usePersistentState('cyber-roadmap-progress-v1', { lessons: {} });
  const [sessions, setSessions] = usePersistentState('cyber-roadmap-sessions-v1', { items: [] });
  const [stopwatch, setStopwatch] = usePersistentState('cyber-roadmap-stopwatch-v1', defaultStopwatch);
  const [timer, setTimer] = usePersistentState('cyber-roadmap-focus-timer-v1', defaultTimer);
  const [activeModuleId, setActiveModuleId] = usePersistentState('cyber-roadmap-active-module-v1', { value: 'foundations' });
  const [view, setView] = usePersistentState('cyber-roadmap-view-v1', { coreOnly: false });
  const [settings, setSettings] = usePersistentState('cyber-roadmap-settings-v1', { weeklyHours: 12 });
  const [saveOk, setSaveOk] = useState(true);
  const [dataMessage, setDataMessage] = useState('');
  const weeklyHours = clamp(Number(settings.weeklyHours) || 12, 1, 80);
  const handledTimerEnd = useRef(null);

  useEffect(() => subscribeSaveStatus(setSaveOk), []);

  // Re-render once a second only while the Focus page shows a running clock.
  const clockRunning = Boolean(stopwatch.startedAt) || timer.status === 'running';
  useEffect(() => {
    if (!clockRunning || activePage !== 'focus') return undefined;
    setClockTick(Date.now());
    const interval = window.setInterval(() => setClockTick(Date.now()), 1000);
    return () => window.clearInterval(interval);
  }, [clockRunning, activePage]);

  // Wake up exactly when the timer ends, even if another page is open.
  useEffect(() => {
    if (timer.status !== 'running' || !timer.endAt) return undefined;
    const id = window.setTimeout(() => setClockTick(Date.now()), Math.max(0, timer.endAt - Date.now()) + 50);
    return () => window.clearTimeout(id);
  }, [timer.status, timer.endAt]);

  const modules = useMemo(() => {
    const visible = roadmap.filter((module) => !(view.coreOnly && module.priority === 'تکمیلی'));
    const visibleIds = new Set(visible.map((module) => module.id));
    const completionById = new Map();
    visible.forEach((module) => completionById.set(module.id, getModuleProgress(module, progressState.lessons || {}).isComplete));

    return visible.map((module) => {
      // In core-only mode, hidden optional chapters never block a visible chapter.
      const prerequisites = module.prerequisites.filter((id) => visibleIds.has(id));
      const moduleProgress = getModuleProgress(module, progressState.lessons || {});
      const missingPrerequisites = prerequisites
        .filter((id) => !completionById.get(id))
        .map((id) => roadmap.find((item) => item.id === id))
        .filter(Boolean);
      const isUnlocked = prerequisites.every((id) => completionById.get(id));
      return {
        ...module,
        progress: {
          ...moduleProgress,
          completedIds: module.lessons.filter((lesson) => progressState.lessons?.[lesson.id]).map((lesson) => lesson.id),
        },
        completedLessons: progressState.lessons || {},
        missingPrerequisites,
        status: moduleProgress.isComplete ? 'complete' : isUnlocked ? 'available' : 'locked',
      };
    });
  }, [progressState.lessons, view.coreOnly]);

  // Hours of the chapters currently shown (used for remaining time and the finish estimate).
  const totalPlanHours = modules.reduce((sum, module) => sum + module.totalHours, 0);
  const completedPlanHours = modules.reduce((sum, module) => sum + module.progress.completedPlanHours, 0);

  // Overall progress always uses ALL chapters; core progress is shown separately.
  const doneHoursOf = (list) => list.reduce((sum, module) => sum + getModuleProgress(module, progressState.lessons || {}).completedPlanHours, 0);
  const hoursOf = (list) => list.reduce((sum, module) => sum + module.totalHours, 0);
  const coreModules = roadmap.filter((module) => module.priority !== 'تکمیلی');
  const overall = { completedHours: doneHoursOf(roadmap), totalHours: hoursOf(roadmap) };
  overall.percent = percentOf(overall.completedHours, overall.totalHours);
  const corePercent = percentOf(doneHoursOf(coreModules), hoursOf(coreModules));
  const overallPercent = overall.percent;
  const planMonths = estimateFinish(0, overall.totalHours, weeklyHours).months;
  const completedChapters = modules.filter((module) => module.progress.isComplete).length;
  const actualStudyMinutes = sessions.items.reduce((sum, session) => sum + session.minutes, 0);
  const finishEstimate = estimateFinish(completedPlanHours, totalPlanHours, weeklyHours);
  const nextModule = modules.find((module) => module.status === 'available');
  const nextLesson = nextModule?.lessons.find((lesson) => !progressState.lessons?.[lesson.id]);
  const nextStep = nextModule && nextLesson ? { module: nextModule, lesson: nextLesson } : null;

  const stopwatchElapsed = stopwatch.startedAt
    ? stopwatch.elapsedMs + Math.max(0, clockTick - stopwatch.startedAt)
    : stopwatch.elapsedMs;

  const timerDuration = (timer.phase === 'focus' ? timer.focusMinutes : timer.breakMinutes) * 60 * 1000;
  const timerRemaining = timer.status === 'running'
    ? Math.max(0, (timer.endAt || clockTick) - clockTick)
    : Math.max(0, timer.remainingMs ?? timerDuration);

  const recordSession = (mode, minutes, moduleId = activeModuleId.value) => {
    const safeMinutes = Math.max(1, Math.round(minutes));
    setSessions((current) => ({
      items: [...(current.items || []), {
        id: `${Date.now()}-${(current.items || []).length}`,
        mode,
        minutes: safeMinutes,
        moduleId,
        createdAt: Date.now(),
      }],
    }));
  };

  const toggleLesson = (moduleId, lessonId) => {
    const module = modules.find((item) => item.id === moduleId);
    if (!module || module.status === 'locked') return;
    setProgressState((current) => ({
      lessons: { ...(current.lessons || {}), [lessonId]: !current.lessons?.[lessonId] },
    }));
  };

  const startStopwatch = () => {
    if (stopwatch.startedAt) return;
    setStopwatch((current) => ({ ...current, startedAt: Date.now() }));
  };
  const pauseStopwatch = () => {
    if (!stopwatch.startedAt) return;
    setStopwatch((current) => ({
      elapsedMs: current.elapsedMs + Math.max(0, Date.now() - current.startedAt),
      startedAt: null,
    }));
  };
  const resetStopwatch = () => setStopwatch(defaultStopwatch);
  const saveStopwatch = () => {
    const elapsed = stopwatch.startedAt
      ? stopwatch.elapsedMs + Math.max(0, Date.now() - stopwatch.startedAt)
      : stopwatch.elapsedMs;
    if (elapsed < 60_000) return;
    recordSession('stopwatch', elapsed / 60_000);
    setStopwatch(defaultStopwatch);
  };

  const startTimer = () => {
    if (timer.status === 'running') return;
    unlockAudio();
    const remaining = timer.status === 'paused' ? timer.remainingMs : timerDuration;
    setTimer((current) => ({
      ...current,
      status: 'running',
      remainingMs: remaining,
      endAt: Date.now() + remaining,
    }));
  };
  const pauseTimer = () => {
    if (timer.status !== 'running') return;
    const remaining = Math.max(0, (timer.endAt || Date.now()) - Date.now());
    setTimer((current) => ({ ...current, status: 'paused', remainingMs: remaining, endAt: null }));
  };
  const resetTimer = () => setTimer((current) => ({
    ...current,
    status: 'idle',
    endAt: null,
    remainingMs: (current.phase === 'focus' ? current.focusMinutes : current.breakMinutes) * 60 * 1000,
  }));

  useEffect(() => {
    if (timer.status !== 'running' || !timer.endAt || Date.now() < timer.endAt) return;
    if (handledTimerEnd.current === timer.endAt) return;
    handledTimerEnd.current = timer.endAt;
    playAlarm();

    if (timer.phase === 'focus') {
      recordSession('focus', timer.focusMinutes);
      setTimer((current) => ({
        ...current,
        phase: 'break',
        status: 'idle',
        endAt: null,
        remainingMs: current.breakMinutes * 60 * 1000,
      }));
    } else {
      setTimer((current) => ({
        ...current,
        phase: 'focus',
        status: 'idle',
        endAt: null,
        remainingMs: current.focusMinutes * 60 * 1000,
      }));
    }
  }, [clockTick, timer.status, timer.endAt, timer.phase, timer.focusMinutes, timer.breakMinutes]);

  const setFocusMinutes = (raw) => {
    const value = Math.max(1, Math.min(180, Number(raw) || 1));
    setTimer((current) => ({
      ...current,
      focusMinutes: value,
      ...(current.phase === 'focus' && current.status !== 'running' ? { remainingMs: value * 60 * 1000, status: 'idle', endAt: null } : {}),
    }));
  };
  const setBreakMinutes = (raw) => {
    const value = Math.max(1, Math.min(60, Number(raw) || 1));
    setTimer((current) => ({
      ...current,
      breakMinutes: value,
      ...(current.phase === 'break' && current.status !== 'running' ? { remainingMs: value * 60 * 1000, status: 'idle', endAt: null } : {}),
    }));
  };

  const setWeeklyHours = (raw) => setSettings({ weeklyHours: clamp(Number(raw) || 1, 1, 80) });

  const exportData = () => {
    const blob = new Blob([JSON.stringify({ app: 'cyber-roadmap', version: 1, progress: progressState, sessions, settings, view }, null, 2)], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = 'cyber-roadmap-progress.json';
    link.click();
    URL.revokeObjectURL(url);
  };

  const importData = (file) => {
    if (!file) return;
    const reader = new FileReader();
    reader.onload = () => {
      try {
        const data = JSON.parse(String(reader.result));
        const lessons = data?.progress?.lessons;
        if (data?.app !== 'cyber-roadmap' || !lessons || typeof lessons !== 'object') throw new Error('invalid file');
        const known = new Set(roadmap.flatMap((module) => module.lessons.map((lesson) => lesson.id)));
        const clean = Object.fromEntries(Object.entries(lessons).filter(([id, done]) => done === true && known.has(id)));
        const items = Array.isArray(data.sessions?.items) ? data.sessions.items.filter((item) => item && Number.isFinite(item.minutes) && item.minutes > 0) : [];
        setProgressState({ lessons: clean });
        setSessions({ items });
        if (Number(data.settings?.weeklyHours) > 0) setWeeklyHours(data.settings.weeklyHours);
        setDataMessage('داده‌ها با موفقیت بازیابی شد.');
      } catch {
        setDataMessage('فایل معتبر نیست؛ چیزی تغییر نکرد.');
      }
    };
    reader.readAsText(file);
  };

  const setActiveModule = (id) => setActiveModuleId({ value: id });
  const activeModule = modules.find((module) => module.id === activeModuleId.value);
  const safeActiveModuleId = activeModule && activeModule.status !== 'locked' ? activeModuleId.value : (nextModule?.id || 'foundations');

  const renderPage = () => {
    if (activePage === 'roadmap') {
      return <Roadmap modules={modules} onToggleLesson={toggleLesson} activeModuleId={safeActiveModuleId} onSetActiveModule={setActiveModule} />;
    }
    if (activePage === 'guide') return <Guide currentStage={nextModule?.stage} />;
    if (activePage === 'courses') return <CourseTracker modules={modules} />;
    if (activePage === 'focus') return (
      <FocusCenter
        stopwatchElapsed={stopwatchElapsed}
        stopwatchRunning={Boolean(stopwatch.startedAt)}
        onStartStopwatch={startStopwatch}
        onPauseStopwatch={pauseStopwatch}
        onResetStopwatch={resetStopwatch}
        onSaveStopwatch={saveStopwatch}
        timer={timer}
        timerRemaining={timerRemaining}
        onStartTimer={startTimer}
        onPauseTimer={pauseTimer}
        onResetTimer={resetTimer}
        onSetFocusMinutes={setFocusMinutes}
        onSetBreakMinutes={setBreakMinutes}
        sessions={sessions.items || []}
        modules={modules}
        activeModuleId={safeActiveModuleId}
        onSetActiveModule={setActiveModule}
      />
    );
    if (activePage === 'stats') return (
      <Stats
        modules={modules}
        sessions={sessions.items || []}
        overallPercent={overallPercent}
        corePercent={corePercent}
        weeklyHours={weeklyHours}
        completedPlanHours={completedPlanHours}
        totalHours={totalPlanHours}
        finishEstimate={finishEstimate}
        onExport={exportData}
        onImport={importData}
        dataMessage={dataMessage}
      />
    );
    return (
      <Overview
        modules={modules}
        overallPercent={overallPercent}
        overall={overall}
        corePercent={corePercent}
        planMonths={planMonths}
        weeklyHours={weeklyHours}
        onSetWeeklyHours={setWeeklyHours}
        totalHours={totalPlanHours}
        completedPlanHours={completedPlanHours}
        actualStudyMinutes={actualStudyMinutes}
        completedChapters={completedChapters}
        finishEstimate={finishEstimate}
        nextStep={nextStep}
        onGoRoadmap={() => setActivePage('roadmap')}
        onGoFocus={() => setActivePage('focus')}
      />
    );
  };

  return (
    <div className="app-shell" dir="rtl">
      <Sidebar activePage={activePage} onNavigate={setActivePage} mobileOpen={mobileOpen} onClose={() => setMobileOpen(false)} />
      <main className="main-area">
        <header className="topbar">
          <div className="topbar-start">
            <button className="mobile-menu-button" onClick={() => setMobileOpen(true)} aria-label="باز کردن منو"><Menu size={20} /></button>
            <div className="breadcrumbs"><span>CYBER PATH</span><i>/</i><strong>{pageTitles[activePage]}</strong></div>
          </div>
          <div className="topbar-end">
            <div className="view-toggle" role="group" aria-label="نمایش مسیر">
              <button type="button" className={!view.coreOnly ? 'active' : ''} aria-pressed={!view.coreOnly} onClick={() => setView({ coreOnly: false })}>همهٔ فصل‌ها</button>
              <button type="button" className={view.coreOnly ? 'active' : ''} aria-pressed={view.coreOnly} onClick={() => setView({ coreOnly: true })}>فقط مسیر اصلی</button>
            </div>
            <div className={`local-save-status ${saveOk ? '' : 'save-failed'}`}><span className="save-dot" /> {saveOk ? 'ذخیره روی همین دستگاه' : 'ذخیره نشد؛ حافظهٔ مرورگر در دسترس نیست'}</div>
            <div className="topbar-avatar"><ShieldCheck size={17} /></div>
          </div>
        </header>
        <div className="page-content">{renderPage()}</div>
        <footer className="app-footer"><span>CYBER PATH · مسیر یادگیری مستقل</span><span>بدون حساب کاربری · داده‌ها فقط در LocalStorage مرورگر</span></footer>
      </main>
    </div>
  );
}
