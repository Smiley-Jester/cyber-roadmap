import {
  ArrowLeft, BookOpenCheck, CalendarClock, CheckCircle2, Clock3, Flame, Hourglass,
  Play, ShieldCheck, Target,
} from 'lucide-react';
import ProgressBar from './ProgressBar';
import { formatHours } from '../utils/progress';

function MetricCard({ icon: Icon, label, value, sub, accent = false }) {
  return (
    <div className={`metric-card ${accent ? 'metric-card-accent' : ''}`}>
      <div className="metric-icon"><Icon size={18} strokeWidth={1.8} /></div>
      <div className="metric-copy">
        <span className="metric-label">{label}</span>
        <strong className="metric-value">{value}</strong>
        <span className="metric-sub">{sub}</span>
      </div>
    </div>
  );
}

export default function Overview({
  modules, overallPercent, totalHours, completedPlanHours, actualStudyMinutes,
  completedChapters, finishEstimate, nextStep, onGoRoadmap, onGoFocus,
}) {
  const remaining = Math.max(0, totalHours - completedPlanHours);
  const module = nextStep?.module;
  const lesson = nextStep?.lesson;

  return (
    <div className="page-stack">
      <section className="welcome-panel">
        <div className="welcome-content">
          <div className="eyebrow"><span className="eyebrow-dot" /> YOUR LEARNING SYSTEM</div>
          <h1>از مبانی تا تحلیل‌گر امنیت</h1>
          <p>یک مسیر مرحله‌ای برای فهم عمیق سیستم‌ها، تحقیق مسئولانه و تحلیل دفاعی.</p>
          <div className="welcome-meta">
            <span><CalendarClock size={15} /> حدود ۲۹ ماه</span>
            <span><Clock3 size={15} /> ۲ ساعت در روز، ۶ روز در هفته</span>
            <span><ShieldCheck size={15} /> مسیر اخلاقی و آزمایشگاهی</span>
          </div>
          <button className="button button-primary" onClick={onGoRoadmap}>
            ادامهٔ یادگیری <ArrowLeft size={16} />
          </button>
        </div>
        <div className="welcome-visual" aria-hidden="true">
          <div className="orbit orbit-one" />
          <div className="orbit orbit-two" />
          <div className="orbit orbit-three" />
          <div className="core-shield"><ShieldCheck size={45} strokeWidth={1.35} /></div>
          <span className="orbit-dot dot-one" /><span className="orbit-dot dot-two" /><span className="orbit-dot dot-three" />
          <div className="visual-caption">LEARN · ANALYZE · DEFEND</div>
        </div>
      </section>

      <section className="metric-grid">
        <MetricCard icon={Target} label="پیشرفت کل مسیر" value={`${Math.round(overallPercent)}٪`} sub={`${completedChapters} فصل از ${modules.length} فصل کامل`} accent />
        <MetricCard icon={Flame} label="زمان ثبت‌شدهٔ مطالعه" value={formatHours(actualStudyMinutes / 60)} sub="از تایمرهای همین داشبورد" />
        <MetricCard icon={Hourglass} label="برآورد باقی‌مانده" value={formatHours(remaining)} sub={`${finishEstimate.months.toFixed(1)} ماه با برنامهٔ فعلی`} />
        <MetricCard icon={BookOpenCheck} label="برنامهٔ کل" value={`${totalHours.toLocaleString('fa-IR')} ساعت`} sub="مطالعه و تمرین، جدا از زمان ویدیو" />
      </section>

      <section className="content-grid overview-grid">
        <div className="panel next-step-panel">
          <div className="panel-heading">
            <div>
              <span className="section-kicker">NEXT ACTION</span>
              <h2>قدم بعدی تو</h2>
            </div>
            <span className="icon-badge"><Play size={17} /></span>
          </div>
          {module ? (
            <>
              <div className="next-chapter-number">فصل {module.number.toLocaleString('fa-IR')}</div>
              <h3>{module.title}</h3>
              <p className="muted-text">{lesson.title}</p>
              <div className="next-source-line"><span>منبع اصلی</span><strong>{module.source.title}</strong></div>
              <div className="next-action-footer">
                <button className="button button-primary" onClick={onGoRoadmap}>مشاهدهٔ فصل <ArrowLeft size={16} /></button>
                <span className="small-muted">{module.months}</span>
              </div>
            </>
          ) : (
            <div className="all-done-state"><CheckCircle2 size={28} /><h3>همهٔ فصل‌ها تکمیل شده‌اند</h3><p>اکنون روی به‌روزرسانی Portfolio و مرور دوره‌ای تمرکز کن.</p></div>
          )}
        </div>

        <div className="panel progress-panel">
          <div className="panel-heading">
            <div>
              <span className="section-kicker">ROADMAP STATUS</span>
              <h2>وضعیت مسیر</h2>
            </div>
            <span className="text-icon"><ShieldCheck size={18} /></span>
          </div>
          <div className="overall-ring-wrap">
            <div className="overall-ring" style={{ '--progress': `${overallPercent}%` }}>
              <div className="overall-ring-inner"><strong>{Math.round(overallPercent)}٪</strong><span>تکمیل شده</span></div>
            </div>
            <div className="ring-copy"><strong>{formatHours(completedPlanHours)}</strong><span>از {formatHours(totalHours)}</span><p>پیشرفت وزنی بر اساس ساعت برنامه‌ریزی‌شدهٔ هر فصل</p></div>
          </div>
          <ProgressBar value={overallPercent} showValue />
          <div className="status-footnote"><span className="status-dot" /> فصل بعدی پس از تکمیل پیش‌نیازها باز می‌شود.</div>
        </div>
      </section>

      <section className="panel stage-overview-panel">
        <div className="panel-heading">
          <div><span className="section-kicker">LEARNING PHASES</span><h2>شش مرحلهٔ یادگیری</h2></div>
          <button className="text-button" onClick={onGoRoadmap}>تمام فصل‌ها <ArrowLeft size={14} /></button>
        </div>
        <div className="stage-list">
          {['مبانی', 'سیستم‌ها و برنامه‌نویسی', 'امنیت و کاربرد', 'هک اخلاقی در آزمایشگاه مجاز', 'تخصص‌گرایی', 'پروژه و تثبیت'].map((stage, index) => {
            const stageModules = modules.filter((item) => item.stage === stage);
            const done = stageModules.reduce((sum, item) => sum + item.lessons.filter((lessonItem) => item.progress?.completedIds?.includes(lessonItem.id)).length, 0);
            const total = stageModules.reduce((sum, item) => sum + item.lessons.length, 0);
            return (
              <div className="stage-row" key={stage}>
                <div className="stage-index">{String(index + 1).padStart(2, '0')}</div>
                <div className="stage-info"><strong>{stage}</strong><span>{stageModules.length} فصل</span></div>
                <div className="stage-progress"><ProgressBar value={total ? (done / total) * 100 : 0} /><span>{done.toLocaleString('fa-IR')} / {total.toLocaleString('fa-IR')}</span></div>
              </div>
            );
          })}
        </div>
      </section>

      <div className="quick-tip"><div className="quick-tip-icon"><Target size={18} /></div><div><strong>قاعدهٔ پیشرفت</strong><p>هر روز دو ساعت را به یک بلوک یادگیری و یک بلوک تمرین تقسیم کن. علامت‌زدن درس فقط پیشرفت آموزشی را ثبت می‌کند؛ زمان واقعی فقط از طریق تایمرها به آمار مطالعه اضافه می‌شود.</p></div><button className="text-button" onClick={onGoFocus}>رفتن به تایمر <ArrowLeft size={14} /></button></div>
    </div>
  );
}
