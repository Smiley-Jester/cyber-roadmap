import { useMemo, useState } from 'react';
import {
  ArrowUpRight, BookOpen, Check, CheckCircle2, ChevronDown, ChevronUp, Circle,
  Clock3, ExternalLink, Flag, Info, LockKeyhole, PlayCircle, ShieldCheck,
} from 'lucide-react';
import ProgressBar from './ProgressBar';
import { roadmap } from '../data/roadmap';
import { formatHours, formatMinutes, isCountedVideo } from '../utils/progress';

const stages = ['مبانی', 'سیستم‌ها و برنامه‌نویسی', 'امنیت و کاربرد', 'هک اخلاقی در آزمایشگاه مجاز', 'تخصص‌گرایی', 'پروژه و تثبیت'];

const videoLabels = { supplied: 'ارائه‌شده؛ بررسی‌نشده', official: 'منبع رسمی (صفحه بررسی شد)', review: 'نامزد؛ نیازمند بررسی' };
const practiceFields = [['tasks', 'Taskها'], ['teaches', 'چه یاد می‌گیری'], ['do', 'چه کار کنی'], ['prereq', 'پیش‌نیاز'], ['time', 'زمان'], ['access', 'دسترسی'], ['challenge', 'Mini Challenge'], ['done', 'معیار تکمیل']];
const allVideos = new Map(roadmap.flatMap((item) => (item.videos || []).map((video) => [video.id, video])));
const seconds = (label) => label.split(':').reduce((total, part) => total * 60 + Number(part), 0);

function VideoItem({ video, lessonId, extras, onToggleExtra, locked }) {
  if (video.status === 'review') {
    return (
      <li className="video-candidate">
        <span dir="ltr">{video.title}</span><small>{video.author}</small>
        {video.url && <code dir="ltr">{video.url}</code>}
        <span className="video-badge video-review">{videoLabels.review} · کلیک‌پذیر نیست</span>
        {video.note && <small>{video.note}</small>}
      </li>
    );
  }
  const source = video.refId ? allVideos.get(video.refId) : video;
  const key = `v:${video.id}`;
  const stamps = (video.timestamps || []).filter((item) => !lessonId || item.lesson === lessonId);
  return (
    <li>
      {!video.refId && video.kind !== 'docs' && <label className="item-check"><input type="checkbox" disabled={locked} checked={Boolean(extras[key])} onChange={() => onToggleExtra(key)} /><span className="custom-check"><Check size={12} /></span></label>}
      <div className="item-body">
        {source?.url ? <a dir="ltr" href={source.url} target="_blank" rel="noreferrer">{video.refId ? `همان دوره: ${source.title}` : video.title} <ArrowUpRight size={13} /></a> : <span dir="ltr">{video.title}</span>}
        <small>{[video.author, video.duration, video.optional ? 'اختیاری؛ در پیشرفت نمی‌آید' : (isCountedVideo(video) ? 'ضروری' : '')].filter(Boolean).join(' · ')}</small>
        {stamps.length > 0 && <small dir="ltr" className="video-ts">{stamps.map((item) => <a key={item.t} href={`${video.url}&t=${seconds(item.t)}s`} target="_blank" rel="noreferrer">{item.t} {item.label}</a>)}</small>}
        <span className={`video-badge video-${video.kind === 'docs' ? 'review' : video.status}`}>{video.kind === 'docs' ? 'مستندات رسمی (ویدیو نیست)' : videoLabels[video.status]}</span>
        {video.note && <small>{video.note}</small>}
      </div>
    </li>
  );
}

function PracticeItem({ item, extras, onToggleExtra, locked }) {
  const key = `p:${item.id}`;
  return (
    <div className={`practice-now ${extras[key] ? 'practice-done' : ''}`}>
      <div className="practice-heading"><Flag size={16} /><strong>Practice Now</strong><span className="practice-platform">{item.platform}{item.local ? ' · محلی' : ''}</span></div>
      <label className="item-check practice-check"><input type="checkbox" disabled={locked} checked={Boolean(extras[key])} onChange={() => onToggleExtra(key)} /><span className="custom-check"><Check size={12} /></span><h4 dir="auto">{item.url ? <a href={item.url} target="_blank" rel="noreferrer" onClick={(event) => event.stopPropagation()}>{item.name} <ExternalLink size={13} /></a> : item.name}</h4></label>
      {item.tool && <p className="practice-tool"><strong>ابزار:</strong> {item.tool}</p>}
      <details><summary>جزئیات تمرین</summary><dl>{practiceFields.map(([field, label]) => item[field] && <div key={field}><dt>{label}</dt><dd>{item[field]}</dd></div>)}</dl></details>
    </div>
  );
}

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
                const counted = (module.videos || []).filter(isCountedVideo);
                const videosFor = (lesson) => (module.videos || []).filter((video) => video.status !== 'review' && (video.timestamps?.length ? video.timestamps.some((item) => item.lesson === lesson.id) : video.lessonIds?.[0] === lesson.id));
                const practiceFor = (lesson) => (module.practiceNow || []).filter((item) => item.lessonIds?.[0] === lesson.id);
                const looseVideos = (module.videos || []).filter((video) => video.status === 'review' || !video.lessonIds?.length);
                const loosePractice = (module.practiceNow || []).filter((item) => !item.lessonIds?.length);
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
                    {(counted.length > 0 || module.practiceNow?.length > 0) && (
                      <div className="chapter-track">
                        <span>ویدیو: {counted.filter((video) => extras[`v:${video.id}`]).length.toLocaleString('fa-IR')} از {counted.length.toLocaleString('fa-IR')}</span>
                        <span>تمرین: {(module.practiceNow || []).filter((item) => extras[`p:${item.id}`]).length.toLocaleString('fa-IR')} از {(module.practiceNow || []).length.toLocaleString('fa-IR')}</span>
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
                              <div className="lesson-block" key={lesson.id}>
                                <label className={`lesson-row ${module.completedLessons[lesson.id] ? 'lesson-done' : ''} ${isLocked ? 'lesson-disabled' : ''}`}>
                                  <input type="checkbox" checked={Boolean(module.completedLessons[lesson.id])} disabled={isLocked} onChange={() => onToggleLesson(module.id, lesson.id)} />
                                  <span className="custom-check"><Check size={13} /></span>
                                  <span className="lesson-number">{String(index + 1).padStart(2, '0')}</span>
                                  <span className="lesson-title">{lesson.title}</span>
                                  <span className="lesson-time">{formatMinutes(lesson.minutes)} {module.source.durationKind === 'official' ? 'دوره' : 'محتوا'}</span>
                                </label>
                                {(videosFor(lesson).length > 0 || practiceFor(lesson).length > 0) && (
                                  <div className="lesson-links">
                                    {videosFor(lesson).length > 0 && <ul className="video-list">{videosFor(lesson).map((video) => <VideoItem key={video.id} video={video} lessonId={lesson.id} extras={extras} onToggleExtra={onToggleExtra} locked={isLocked} />)}</ul>}
                                    {practiceFor(lesson).map((item) => <PracticeItem key={item.id} item={item} extras={extras} onToggleExtra={onToggleExtra} locked={isLocked} />)}
                                  </div>
                                )}
                              </div>
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

                        {module.guide && (
                          <div className="video-panel guide-box">
                            <div className="practice-heading"><Info size={16} /><strong>راهنمای شروع گام‌به‌گام</strong></div>
                            {module.guide.map(([question, answer]) => <details key={question}><summary>{question}</summary><p dir="auto">{answer}</p></details>)}
                          </div>
                        )}

                        {looseVideos.length > 0 && (
                          <div className="video-panel">
                            <div className="practice-heading"><PlayCircle size={16} /><strong>ویدیوهای دیگر و نامزدهای نیازمند بررسی</strong></div>
                            <ul className="video-list">{looseVideos.map((video) => <VideoItem key={video.id} video={video} extras={extras} onToggleExtra={onToggleExtra} locked={isLocked} />)}</ul>
                          </div>
                        )}
                        {!module.videos?.length && <div className="video-panel"><span className="video-badge video-review">ویدیوی تأییدشده‌ای برای این فصل ثبت نشده؛ از منبع رسمی بالا استفاده کن.</span></div>}
                        {loosePractice.map((item) => <PracticeItem key={item.id} item={item} extras={extras} onToggleExtra={onToggleExtra} locked={isLocked} />)}

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
