import { useMemo, useState } from 'react';
import {
  ArrowUpRight, BookOpen, Check, CheckCircle2, ChevronDown, ChevronUp, Circle,
  Clock3, ExternalLink, Flag, Info, LockKeyhole, PlayCircle, ShieldCheck,
} from 'lucide-react';
import ProgressBar from './ProgressBar';
import { formatHours, formatMinutes } from '../utils/progress';

const stages = ['مبانی', 'سیستم‌ها و برنامه‌نویسی', 'امنیت و کاربرد', 'هک اخلاقی در آزمایشگاه مجاز', 'تخصص‌گرایی', 'پروژه و تثبیت'];

const videoLabels = { supplied: 'لینک ارائه‌شده؛ هنوز بررسی نشده', review: 'ویدیو هنوز تأیید نشده', official: 'منبع رسمی' };
const practiceFields = [['tasks', 'Taskها'], ['teaches', 'چه یاد می‌گیری'], ['do', 'چه کار کنی'], ['prereq', 'پیش‌نیاز'], ['time', 'زمان'], ['access', 'دسترسی'], ['challenge', 'Mini Challenge'], ['done', 'معیار تکمیل']];

export default function Roadmap({ modules, onToggleLesson, activeModuleId, onSetActiveModule, extras = {}, onToggleExtra }) {
  const [expanded, setExpanded] = useState(() => ({ foundations: true }));
  const grouped = useMemo(() => stages.map((stage) => ({ stage, modules: modules.filter((item) => item.stage === stage) })), [modules]);

  return (
    <div className="page-stack">
      <section className="page-intro">
        <div><span className="section-kicker">CURRICULUM MAP / 01—42</span><h1>نقشهٔ راه یادگیری</h1><p>ترتیب فصل‌ها بر اساس پیش‌نیازهای واقعی چیده شده است؛ فصل قفل‌شده تا تکمیل پیش‌نیازها باز نمی‌شود.</p></div>
        <div className="intro-stat"><strong>{modules.length.toLocaleString('fa-IR')}</strong><span>فصل ساختارمند</span></div>
      </section>

      <div className="roadmap-legend">
        <span><i className="legend-dot legend-done" /> تکمیل‌شده</span>
        <span><i className="legend-dot legend-current" /> قابل شروع</span>
        <span><i className="legend-dot legend-locked" /> قفل / پیش‌نیاز باقی‌مانده</span>
        <span className="legend-note">اولویت حیاتی → مهم → تکمیلی</span>
      </div>

      {grouped.map(({ stage, modules: stageModules }, stageIndex) => {
        const stageDone = stageModules.filter((item) => item.progress.isComplete).length;
        return (
          <section className="roadmap-stage" key={stage}>
            <div className="stage-heading-line">
              <div className="stage-heading-left"><span className="stage-count">۰{stageIndex + 1}</span><div><h2>{stage}</h2><p>{stageDone.toLocaleString('fa-IR')} از {stageModules.length.toLocaleString('fa-IR')} فصل تکمیل شده</p></div></div>
              <div className="stage-heading-progress"><ProgressBar value={stageModules.length ? (stageDone / stageModules.length) * 100 : 0} /><span>{stageModules.reduce((sum, item) => sum + item.totalHours, 0).toLocaleString('fa-IR')} ساعت برنامه</span></div>
            </div>

            <div className="chapter-list">
              {stageModules.map((module) => {
                const isExpanded = Boolean(expanded[module.id]);
                const isLocked = module.status === 'locked';
                const isComplete = module.progress.isComplete;
                const isActive = activeModuleId === module.id;
                const Icon = isComplete ? CheckCircle2 : isLocked ? LockKeyhole : PlayCircle;
                return (
                  <article className={`chapter-card ${isComplete ? 'chapter-complete' : ''} ${isLocked ? 'chapter-locked' : ''} ${isActive ? 'chapter-selected' : ''}`} key={module.id}>
                    <div className="chapter-topline">
                      <div className="chapter-main">
                        <div className={`chapter-status-icon ${isComplete ? 'status-complete' : isLocked ? 'status-locked' : 'status-open'}`}><Icon size={19} /></div>
                        <div className="chapter-title-block">
                          <div className="chapter-overline"><span>فصل {String(module.number).padStart(2, '0')}</span><span className={`priority-tag priority-${module.priority === 'حیاتی' ? 'critical' : module.priority === 'مهم' ? 'important' : 'optional'}`}>{module.priority}</span><span className="level-tag">{module.level}</span></div>
                          <h3>{module.title}</h3>
                          <p>{module.summary}</p>
                        </div>
                      </div>
                      <div className="chapter-actions">
                        <div className="chapter-hours"><strong>{module.totalHours}h</strong><span>ساعت کل</span></div>
                        <button className="icon-button expand-button" onClick={() => setExpanded((current) => ({ ...current, [module.id]: !current[module.id] }))} aria-label={isExpanded ? 'بستن جزئیات فصل' : 'باز کردن جزئیات فصل'}>
                          {isExpanded ? <ChevronUp size={18} /> : <ChevronDown size={18} />}
                        </button>
                      </div>
                    </div>

                    <div className="chapter-progress-row">
                      <ProgressBar value={module.progress.percent} showValue />
                      <span className="chapter-lesson-count">{module.progress.completedCount} / {module.progress.totalCount} درس</span>
                    </div>
                    {(module.videos?.some((video) => video.url) || module.practiceNow?.length > 0) && (
                      <div className="chapter-track">
                        {module.videos?.some((video) => video.url) && <button type="button" disabled={isLocked} className={`track-chip ${extras[`${module.id}:video`] ? 'on' : ''}`} aria-pressed={Boolean(extras[`${module.id}:video`])} onClick={() => onToggleExtra(`${module.id}:video`)}><PlayCircle size={13} /> ویدیوها را دیدم</button>}
                        {module.practiceNow?.length > 0 && <button type="button" disabled={isLocked} className={`track-chip ${extras[`${module.id}:practice`] ? 'on' : ''}`} aria-pressed={Boolean(extras[`${module.id}:practice`])} onClick={() => onToggleExtra(`${module.id}:practice`)}><Flag size={13} /> تمرین عملی را انجام دادم</button>}
                      </div>
                    )}

                    {isLocked && (
                      <div className="lock-hint"><LockKeyhole size={14} /><span>پیش‌نیازهای باقی‌مانده: {module.missingPrerequisites.map((item) => `فصل ${item.number}`).join('، ')}</span></div>
                    )}

                    {isExpanded && (
                      <div className="chapter-details">
                        <div className="detail-columns">
                          <div className="detail-block"><span className="detail-label">چرا مهم است؟</span><p>{module.why}</p></div>
                          <div className="detail-block"><span className="detail-label">پیش‌نیازها</span><p>{module.prerequisites.length ? module.prerequisites.map((id) => modules.find((item) => item.id === id)?.title).filter(Boolean).join('، ') : 'ندارد؛ نقطهٔ شروع مسیر'}</p></div>
                          <div className="detail-block"><span className="detail-label">زمان پیشنهادی</span><p>{module.months} · مطالعه {module.studyHours} ساعت · تمرین {module.practiceHours} ساعت</p></div>
                          <div className="detail-block"><span className="detail-label">معیار عبور</span><p>{module.gate}</p></div>
                        </div>

                        <div className="lesson-list-wrap">
                          <div className="lesson-list-heading"><h4>درس‌ها و ثبت پیشرفت</h4><span>با تکمیل هر درس، محاسبات خودکار به‌روز می‌شود.</span></div>
                          <div className="lesson-list">
                            {module.lessons.map((lesson, index) => (
                              <label className={`lesson-row ${module.completedLessons[lesson.id] ? 'lesson-done' : ''} ${isLocked ? 'lesson-disabled' : ''}`} key={lesson.id}>
                                <input
                                  type="checkbox"
                                  checked={Boolean(module.completedLessons[lesson.id])}
                                  disabled={isLocked}
                                  onChange={() => onToggleLesson(module.id, lesson.id)}
                                />
                                <span className="custom-check"><Check size={13} /></span>
                                <span className="lesson-number">{String(index + 1).padStart(2, '0')}</span>
                                <span className="lesson-title">{lesson.title}</span>
                                <span className="lesson-time">{formatMinutes(lesson.minutes)} {module.source.durationKind === 'official' ? 'دوره' : 'محتوا'}</span>
                              </label>
                            ))}
                          </div>
                        </div>

                        <div className="resource-panel">
                          <div className="resource-icon"><BookOpen size={19} /></div>
                          <div className="resource-main">
                            <span className="detail-label">منبع اصلی و ضروری</span>
                            <h4>{module.source.title}</h4>
                            <p>{module.source.instructor} · {module.source.publisher}</p>
                            <div className="resource-meta"><span><Clock3 size={13} /> {module.source.durationText}</span><span><ShieldCheck size={13} /> English / English subtitles where available</span></div>
                            {module.source.note && <div className="resource-note"><Info size={13} /> {module.source.note}</div>}
                            <div className="resource-links">
                              <a href={module.source.url} target="_blank" rel="noreferrer">باز کردن منبع اصلی <ExternalLink size={14} /></a>
                              {module.source.secondaryUrl && <a href={module.source.secondaryUrl} target="_blank" rel="noreferrer">{module.source.secondaryTitle} <ExternalLink size={14} /></a>}
                            </div>
                          </div>
                        </div>

                        <div className="video-panel">
                          <div className="practice-heading"><PlayCircle size={16} /><strong>ویدیوها</strong></div>
                          {module.videos?.length ? (
                            <ul className="video-list">
                              {module.videos.map((video) => (
                                <li key={video.title}>
                                  {video.url ? <a dir="ltr" href={video.url} target="_blank" rel="noreferrer">{video.title} <ArrowUpRight size={13} /></a> : <span dir="ltr">{video.title}</span>}
                                  <small>{[video.author, video.duration, video.optional ? 'اختیاری' : ''].filter(Boolean).join(' · ')}</small>
                                  {video.timestamps && <small dir="ltr" className="video-ts">{video.timestamps.map(([time, label]) => `${time} ${label}`).join(' · ')}</small>}
                                  <span className={`video-badge video-${video.status}`}>{videoLabels[video.status]}</span>
                                  {video.note && <small>{video.note}</small>}
                                </li>
                              ))}
                            </ul>
                          ) : <span className="video-badge video-review">ویدیو هنوز تأیید نشده</span>}
                        </div>

                        {module.practiceNow?.map((item) => (
                          <div className="practice-now" key={item.name}>
                            <div className="practice-heading"><Flag size={16} /><strong>Practice Now</strong><span className="practice-platform">{item.platform}{item.local ? ' · محلی' : ''}</span></div>
                            <h4 dir="auto">{item.url ? <a href={item.url} target="_blank" rel="noreferrer">{item.name} <ExternalLink size={13} /></a> : item.name}</h4>
                            {item.tool && <p className="practice-tool"><strong>ابزار:</strong> {item.tool}</p>}
                            <dl>{practiceFields.map(([key, label]) => item[key] && <div key={key}><dt>{label}</dt><dd>{item[key]}</dd></div>)}</dl>
                          </div>
                        ))}

                        <div className="practice-panel">
                          <div className="practice-heading"><Flag size={16} /><strong>تمرین / پروژهٔ کوچک</strong></div>
                          <p>{module.practice}</p>
                        </div>

                        {!isLocked && !isComplete && (
                          <div className="chapter-footer-actions">
                            <button className={`button ${isActive ? 'button-secondary' : 'button-primary'}`} onClick={() => onSetActiveModule(module.id)}>
                              {isActive ? 'انتخاب‌شده برای تایمر' : 'انتخاب برای جلسهٔ مطالعه'} <PlayCircle size={15} />
                            </button>
                            <span className="small-muted">پیشرفت محتوای منبع: {Math.round(module.progress.contentPercent)}٪</span>
                          </div>
                        )}
                        {isComplete && <div className="chapter-complete-note"><CheckCircle2 size={16} /> فصل تکمیل شد؛ معیار عبور را قبل از حرکت به فصل بعد مرور کن.</div>}
                      </div>
                    )}
                  </article>
                );
              })}
            </div>
          </section>
        );
      })}

      <div className="safety-strip"><ShieldCheck size={18} /><div><strong>قانون همیشگی آزمایشگاه</strong><p>فقط سیستم شخصی، دادهٔ ساختگی، CTF یا محیطی که مجوز صریح و مکتوب داری. اسکن/آزمایش سامانه‌های عمومی، اجرای فایل ناشناس و جمع‌آوری اطلاعات افراد در این مسیر جایی ندارد.</p></div></div>
    </div>
  );
}
