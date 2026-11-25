import { BarChart3, CalendarDays, CheckCircle2, Clock3, TrendingUp } from 'lucide-react';
import ProgressBar from './ProgressBar';
import { formatDate, formatHours, formatMinutes } from '../utils/progress';

export default function Stats({ modules, sessions, overallPercent, completedPlanHours, totalHours, finishEstimate }) {
  const totalMinutes = sessions.reduce((sum, session) => sum + session.minutes, 0);
  const stageNames = [...new Set(modules.map((item) => item.stage))];
  const stageStats = stageNames.map((stage) => {
    const items = modules.filter((item) => item.stage === stage);
    const total = items.reduce((sum, item) => sum + item.totalHours, 0);
    const done = items.reduce((sum, item) => sum + item.progress.completedPlanHours, 0);
    return { stage, percent: total ? (done / total) * 100 : 0, done, total, modulesDone: items.filter((item) => item.progress.isComplete).length, modulesTotal: items.length };
  });
  const dailyMap = new Map();
  sessions.forEach((session) => {
    const dateKey = new Date(session.createdAt).toLocaleDateString('fa-IR', { month: 'short', day: 'numeric' });
    dailyMap.set(dateKey, (dailyMap.get(dateKey) || 0) + session.minutes);
  });
  const daily = [...dailyMap.entries()].slice(-7);
  const maxDaily = Math.max(60, ...daily.map((item) => item[1]));

  return (
    <div className="page-stack">
      <section className="page-intro">
        <div><span className="section-kicker">ANALYTICS / LEARNING RECORD</span><h1>آمار و گزارش</h1><p>پیشرفت آموزشی از روی درس‌های تکمیل‌شده و زمان واقعی از روی جلسه‌های ثبت‌شده محاسبه می‌شود.</p></div>
        <div className="intro-stat"><strong>{Math.round(overallPercent)}٪</strong><span>پیشرفت وزنی</span></div>
      </section>

      <section className="metric-grid stats-metrics">
        <div className="metric-card"><div className="metric-icon"><TrendingUp size={18} /></div><div className="metric-copy"><span className="metric-label">ساعت برنامهٔ تکمیل‌شده</span><strong className="metric-value">{formatHours(completedPlanHours)}</strong><span className="metric-sub">از {formatHours(totalHours)}</span></div></div>
        <div className="metric-card"><div className="metric-icon"><Clock3 size={18} /></div><div className="metric-copy"><span className="metric-label">زمان واقعی مطالعه</span><strong className="metric-value">{formatHours(totalMinutes / 60)}</strong><span className="metric-sub">{sessions.length.toLocaleString('fa-IR')} جلسهٔ ثبت‌شده</span></div></div>
        <div className="metric-card"><div className="metric-icon"><CalendarDays size={18} /></div><div className="metric-copy"><span className="metric-label">زمان تخمینی باقی‌مانده</span><strong className="metric-value">{finishEstimate.months.toFixed(1)} ماه</strong><span className="metric-sub">با ۱۲ ساعت در هفته</span></div></div>
      </section>

      <section className="panel stage-stats-panel">
        <div className="panel-heading"><div><span className="section-kicker">PHASE BREAKDOWN</span><h2>پیشرفت به تفکیک مرحله</h2></div><BarChart3 size={19} className="subtle-icon" /></div>
        <div className="stage-stats-list">
          {stageStats.map((item, index) => (
            <div className="stage-stat-row" key={item.stage}>
              <div className="stage-stat-heading"><div><span className="stage-stat-index">۰{index + 1}</span><strong>{item.stage}</strong></div><span>{Math.round(item.percent)}٪</span></div>
              <ProgressBar value={item.percent} />
              <div className="stage-stat-foot"><span>{formatHours(item.done)} از {formatHours(item.total)}</span><span>{item.modulesDone} از {item.modulesTotal} فصل کامل</span></div>
            </div>
          ))}
        </div>
      </section>

      <section className="content-grid stats-bottom-grid">
        <div className="panel activity-chart-panel">
          <div className="panel-heading"><div><span className="section-kicker">RECENT ACTIVITY</span><h2>جلسه‌های اخیر</h2></div><Clock3 size={18} className="subtle-icon" /></div>
          {daily.length ? <div className="activity-bars">
            {daily.map(([date, minutes]) => <div className="activity-bar-item" key={date}><div className="activity-bar-value">{formatMinutes(minutes)}</div><div className="activity-bar-track"><div style={{ height: `${(minutes / maxDaily) * 100}%` }} /></div><span>{date}</span></div>)}
          </div> : <div className="empty-state compact-empty"><BarChart3 size={22} /><span>پس از ثبت چند جلسه، نمودار فعالیت نمایش داده می‌شود.</span></div>}
        </div>

        <div className="panel completion-panel">
          <div className="panel-heading"><div><span className="section-kicker">COMPLETION</span><h2>نشانگرهای مسیر</h2></div><CheckCircle2 size={18} className="subtle-icon" /></div>
          <div className="completion-row"><span>درس‌های تکمیل‌شده</span><strong>{modules.reduce((sum, item) => sum + item.progress.completedCount, 0).toLocaleString('fa-IR')} / {modules.reduce((sum, item) => sum + item.progress.totalCount, 0).toLocaleString('fa-IR')}</strong></div>
          <div className="completion-row"><span>فصل‌های کامل</span><strong>{modules.filter((item) => item.progress.isComplete).length.toLocaleString('fa-IR')} / {modules.length.toLocaleString('fa-IR')}</strong></div>
          <div className="completion-row"><span>پیشرفت محتوای منابع</span><strong>{Math.round(modules.reduce((sum, item) => sum + item.progress.completedContentMinutes, 0) / modules.reduce((sum, item) => sum + item.source.contentMinutes, 0) * 100)}٪</strong></div>
          <div className="completion-note">تخمین زمان پایان بر اساس ساعت‌های باقی‌ماندهٔ برنامه است؛ روزهای تعطیل و تغییر سرعت یادگیری می‌توانند تاریخ واقعی را جابه‌جا کنند.</div>
        </div>
      </section>

      <section className="panel full-session-panel">
        <div className="panel-heading"><div><span className="section-kicker">STUDY HISTORY</span><h2>آخرین جلسه‌های ثبت‌شده</h2></div></div>
        {sessions.length ? <div className="history-list">
          {[...sessions].reverse().slice(0, 8).map((session) => {
            const chapter = modules.find((item) => item.id === session.moduleId);
            return <div className="history-item" key={session.id}><span className={`history-mode-dot ${session.mode}`} /><div className="history-item-main"><strong>{session.mode === 'focus' ? 'جلسهٔ تمرکز' : 'جلسهٔ استاپ‌واچ'}</strong><span>{chapter ? `فصل ${chapter.number} · ${chapter.title}` : 'جلسهٔ عمومی'}</span></div><strong className="history-item-time">{formatMinutes(session.minutes)}</strong><small>{formatDate(session.createdAt)}</small></div>;
          })}
        </div> : <div className="empty-state"><Clock3 size={24} /><strong>داده‌ای برای نمایش نیست</strong><span>زمان مطالعه را از Focus Center ثبت کن.</span></div>}
      </section>
    </div>
  );
}
