import { BookOpen, Clock3, ExternalLink, Timer, Video } from 'lucide-react';
import ProgressBar from './ProgressBar';
import { formatMinutes } from '../utils/progress';

export default function CourseTracker({ modules }) {
  const totalMinutes = modules.reduce((sum, item) => sum + item.source.contentMinutes, 0);
  const completedMinutes = modules.reduce((sum, item) => sum + item.progress.completedContentMinutes, 0);
  const remainingMinutes = Math.max(0, totalMinutes - completedMinutes);

  return (
    <div className="page-stack">
      <section className="page-intro">
        <div><span className="section-kicker">COURSE CONTENT / TRACKER</span><h1>پیگیری محتوای دوره‌ها</h1><p>زمان محتوای انتخاب‌شده را جدا از زمان مطالعه و تمرین می‌بینی. زمان‌های تأییدنشده تخمینی‌اند.</p></div>
        <div className="intro-stat"><strong>{modules.length.toLocaleString('fa-IR')}</strong><span>منبع اصلی</span></div>
      </section>

      <section className="course-summary-grid">
        <div className="summary-tile"><div className="summary-tile-icon"><Video size={17} /></div><span>کل محتوای انتخابی</span><strong>{formatMinutes(totalMinutes)}</strong></div>
        <div className="summary-tile"><div className="summary-tile-icon"><BookOpen size={17} /></div><span>محتوای تکمیل‌شده</span><strong>{formatMinutes(completedMinutes)}</strong></div>
        <div className="summary-tile"><div className="summary-tile-icon"><Timer size={17} /></div><span>محتوای باقی‌مانده</span><strong>{formatMinutes(remainingMinutes)}</strong></div>
      </section>

      <section className="panel course-list-panel">
        <div className="panel-heading"><div><span className="section-kicker">RESOURCE PROGRESS</span><h2>پیشرفت هر منبع</h2></div><span className="subtle-pill">بر اساس درس‌های علامت‌خورده</span></div>
        <div className="course-list">
          {modules.map((module) => (
            <div className="course-row" key={module.id}>
              <div className="course-row-main">
                <div className="course-index">{String(module.number).padStart(2, '0')}</div>
                <div className="course-row-copy"><strong>{module.source.title}</strong><span>{module.source.publisher} · فصل {module.number}: {module.title}</span></div>
              </div>
              <div className="course-row-progress">
                <div className="course-progress-label"><span>{formatMinutes(module.progress.completedContentMinutes)} از {formatMinutes(module.source.contentMinutes)}</span><strong>{Math.round(module.progress.contentPercent)}٪</strong></div>
                <ProgressBar value={module.progress.contentPercent} />
              </div>
              <div className="course-row-time"><span>{module.source.durationKind === 'official' ? 'زمان دوره طبق ناشر' : 'برآورد محتوای منبع'}</span><strong>{module.source.durationText}</strong></div>
              <a className="course-link" href={module.source.url} target="_blank" rel="noreferrer" aria-label={`باز کردن ${module.source.title}`}><ExternalLink size={16} /></a>
            </div>
          ))}
        </div>
      </section>
      <div className="info-callout"><Clock3 size={17} /><p>زمان‌های منبع در این جدول برای سنجش پیشرفت محتوای آموزشی‌اند، نه تخمین زمان مطالعهٔ کل. برای منابعی که ناشر مدت دقیق ویدیو را اعلام نکرده، برآورد محتوای منتخب ثبت شده است. ساعت واقعی مطالعه فقط از جلسه‌های ثبت‌شده در Focus Center محاسبه می‌شود.</p></div>
    </div>
  );
}
