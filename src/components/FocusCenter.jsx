import {
  AlarmClock, Coffee, Pause, Play, RotateCcw, Save, Settings2, TimerReset,
} from 'lucide-react';
import { formatClock, formatDate, formatMinutes } from '../utils/progress';

export default function FocusCenter({
  stopwatchElapsed, stopwatchRunning, onStartStopwatch, onPauseStopwatch, onResetStopwatch, onSaveStopwatch,
  timer, timerRemaining, onStartTimer, onPauseTimer, onResetTimer, onSetFocusMinutes, onSetBreakMinutes,
  sessions, modules, activeModuleId, onSetActiveModule,
}) {
  const selected = modules.find((item) => item.id === activeModuleId);
  const today = new Date().toDateString();
  const todayMinutes = sessions.filter((session) => new Date(session.createdAt).toDateString() === today).reduce((sum, session) => sum + session.minutes, 0);
  const timerProgress = timer.phase === 'focus'
    ? 100 - (timerRemaining / (timer.focusMinutes * 60 * 1000)) * 100
    : 100 - (timerRemaining / (timer.breakMinutes * 60 * 1000)) * 100;

  return (
    <div className="page-stack">
      <section className="page-intro">
        <div><span className="section-kicker">FOCUS CENTER / TIME MANAGEMENT</span><h1>مرکز تمرکز</h1><p>جلسه‌ها را به فصل فعال وصل کن؛ تایمرها با ذخیرهٔ timestamp پس از Refresh هم زمان را درست محاسبه می‌کنند.</p></div>
        <div className="intro-stat"><strong>{formatMinutes(todayMinutes)}</strong><span>مطالعهٔ امروز</span></div>
      </section>

      <div className="focus-context panel">
        <div className="focus-context-icon"><AlarmClock size={18} /></div>
        <div className="focus-context-copy"><span>فصل فعال برای ثبت جلسه</span><strong>{selected ? `فصل ${selected.number} · ${selected.title}` : 'انتخاب فصل'}</strong></div>
        <select value={activeModuleId} onChange={(event) => onSetActiveModule(event.target.value)} aria-label="انتخاب فصل فعال">
          {modules.filter((item) => item.status !== 'locked').map((item) => <option value={item.id} key={item.id}>فصل {item.number} · {item.title}</option>)}
        </select>
      </div>

      <section className="focus-grid">
        <div className="panel timer-panel stopwatch-panel">
          <div className="timer-panel-heading"><div><span className="section-kicker">STOPWATCH</span><h2>استاپ‌واچ</h2><p>برای جلسه‌های آزاد و تمرین‌های منعطف</p></div><div className="timer-panel-icon"><TimerReset size={21} /></div></div>
          <div className="stopwatch-display"><span className="timer-digits">{formatClock(stopwatchElapsed)}</span><span className={`running-state ${stopwatchRunning ? 'state-running' : ''}`}><i />{stopwatchRunning ? 'در حال شمارش' : 'متوقف'}</span></div>
          <div className="timer-controls">
            {!stopwatchRunning ? <button className="button button-primary" onClick={onStartStopwatch}><Play size={16} /> شروع</button> : <button className="button button-secondary" onClick={onPauseStopwatch}><Pause size={16} /> توقف</button>}
            <button className="button button-ghost" onClick={onResetStopwatch}><RotateCcw size={16} /> ریست</button>
            <button className="button button-ghost" onClick={onSaveStopwatch} disabled={stopwatchElapsed < 60_000}><Save size={16} /> ثبت جلسه</button>
          </div>
          <div className="timer-footnote">با «ثبت جلسه»، مدت فعلی به تاریخچه اضافه و شمارنده صفر می‌شود.</div>
        </div>

        <div className="panel timer-panel pomodoro-panel">
          <div className="timer-panel-heading"><div><span className="section-kicker">STUDY TIMER</span><h2>تایمر مطالعه</h2><p>تمرکز و استراحت با مدت قابل تنظیم</p></div><div className="timer-panel-icon"><Settings2 size={21} /></div></div>
          <div className={`pomodoro-display ${timer.phase === 'break' ? 'break-display' : ''}`}>
            <div className="pomodoro-ring" style={{ '--timer-progress': `${Math.max(0, Math.min(100, timerProgress))}%` }}>
              <div className="pomodoro-ring-inner"><strong>{formatClock(timerRemaining, false)}</strong><span>{timer.phase === 'focus' ? 'زمان تمرکز' : 'زمان استراحت'}</span></div>
            </div>
          </div>
          <div className="timer-phase-switch">
            <span className={timer.phase === 'focus' ? 'phase-current' : ''}><AlarmClock size={14} /> تمرکز</span>
            <span className={timer.phase === 'break' ? 'phase-current' : ''}><Coffee size={14} /> استراحت</span>
          </div>
          <div className="timer-controls timer-controls-centered">
            {timer.status !== 'running' ? <button className="button button-primary" onClick={onStartTimer}><Play size={16} /> {timer.status === 'paused' ? 'ادامه' : 'شروع'}</button> : <button className="button button-secondary" onClick={onPauseTimer}><Pause size={16} /> توقف</button>}
            <button className="button button-ghost" onClick={onResetTimer}><RotateCcw size={16} /> ریست</button>
          </div>
          <div className="timer-settings">
            <label><span>تمرکز (دقیقه)</span><input type="number" min="1" max="180" value={timer.focusMinutes} disabled={timer.status === 'running'} onChange={(event) => onSetFocusMinutes(event.target.value)} /></label>
            <label><span>استراحت (دقیقه)</span><input type="number" min="1" max="60" value={timer.breakMinutes} disabled={timer.status === 'running'} onChange={(event) => onSetBreakMinutes(event.target.value)} /></label>
          </div>
          <div className="timer-footnote">پیش‌فرض ۲۵ دقیقه تمرکز و ۵ دقیقه استراحت است. تکمیل خودکار هر بازه با زمان واقعی سیستم سنجیده می‌شود.</div>
        </div>
      </section>

      <section className="panel session-history-panel">
        <div className="panel-heading"><div><span className="section-kicker">SESSION LOG</span><h2>تاریخچهٔ جلسه‌ها</h2></div><span className="subtle-pill">{sessions.length.toLocaleString('fa-IR')} جلسه ثبت‌شده</span></div>
        {sessions.length ? (
          <div className="session-table-wrap"><table className="session-table"><thead><tr><th>نوع جلسه</th><th>فصل</th><th>مدت</th><th>زمان ثبت</th></tr></thead><tbody>
            {[...sessions].reverse().slice(0, 12).map((session) => {
              const chapter = modules.find((item) => item.id === session.moduleId);
              return <tr key={session.id}><td><span className="session-type"><i className={session.mode === 'focus' ? 'type-focus' : 'type-stopwatch'} />{session.mode === 'focus' ? 'تایمر تمرکز' : 'استاپ‌واچ'}</span></td><td>{chapter ? `فصل ${chapter.number} · ${chapter.title}` : 'بدون فصل'}</td><td className="session-duration">{formatMinutes(session.minutes)}</td><td>{formatDate(session.createdAt)}</td></tr>;
            })}
          </tbody></table></div>
        ) : <div className="empty-state"><TimerReset size={25} /><strong>هنوز جلسه‌ای ثبت نشده</strong><span>با شروع تایمر و ثبت جلسه، گزارش مطالعه‌ات اینجا ظاهر می‌شود.</span></div>}
      </section>
    </div>
  );
}
