export const clamp = (value, min = 0, max = 100) => Math.min(max, Math.max(min, value));

// Safe percentage: never NaN or Infinity when the total is zero.
export const percentOf = (part, total) => (total > 0 ? clamp((part / total) * 100) : 0);

export function formatMinutes(totalMinutes = 0) {
  const safe = Math.max(0, Math.round(totalMinutes));
  const hours = Math.floor(safe / 60);
  const minutes = safe % 60;
  if (hours === 0) return `${minutes} دقیقه`;
  if (minutes === 0) return `${hours} ساعت`;
  return `${hours} ساعت و ${minutes} دقیقه`;
}

export function formatClock(milliseconds = 0, includeHours = true) {
  const totalSeconds = Math.max(0, Math.floor(milliseconds / 1000));
  const hours = Math.floor(totalSeconds / 3600);
  const minutes = Math.floor((totalSeconds % 3600) / 60);
  const seconds = totalSeconds % 60;
  const pad = (n) => String(n).padStart(2, '0');
  return includeHours || hours > 0 ? `${pad(hours)}:${pad(minutes)}:${pad(seconds)}` : `${pad(minutes)}:${pad(seconds)}`;
}

export function formatHours(hours = 0) {
  const mins = Math.max(0, Math.round(hours * 60));
  return formatMinutes(mins);
}

export function getModuleProgress(module, completedLessons = {}) {
  const completed = module.lessons.filter((lesson) => completedLessons[lesson.id]);
  const completedPlanHours = completed.reduce((sum, lesson) => sum + lesson.weightHours, 0);
  const completedContentMinutes = completed.reduce((sum, lesson) => sum + lesson.minutes, 0);
  return {
    completedCount: completed.length,
    totalCount: module.lessons.length,
    completedPlanHours,
    percent: module.lessons.length ? (completed.length / module.lessons.length) * 100 : 0,
    completedContentMinutes,
    contentPercent: percentOf(completedContentMinutes, module.source.contentMinutes),
    isComplete: completed.length === module.lessons.length,
  };
}

export function estimateFinish(completedPlanHours, totalHours, weeklyHours = 12) {
  const remainingHours = Math.max(0, totalHours - completedPlanHours);
  const weeks = remainingHours / Math.max(1, weeklyHours);
  const months = weeks / 4.345;
  return { remainingHours, weeks, months };
}

export function formatDate(timestamp) {
  return new Intl.DateTimeFormat('fa-IR', { dateStyle: 'medium', timeStyle: 'short' }).format(new Date(timestamp));
}

// A video counts toward mandatory progress only if it is a real, non-optional video with a clickable link.
export const isCountedVideo = (video) => video.kind !== 'docs' && !video.optional && Boolean(video.url) && video.status !== 'review' && !video.refId;

export function trackingSummary(chapters, extras) {
  const videos = chapters.flatMap((chapter) => (chapter.videos || []).filter(isCountedVideo));
  const optionalVideos = chapters.flatMap((chapter) => (chapter.videos || []).filter((video) => video.optional && video.url && video.status !== 'review' && !video.refId && video.kind !== 'docs'));
  const practice = chapters.flatMap((chapter) => (chapter.practiceNow || []));
  const donePractice = practice.filter((item) => extras[`p:${item.id}`]);
  return {
    videos: { done: videos.filter((video) => extras[`v:${video.id}`]).length, total: videos.length },
    optionalVideos: { done: optionalVideos.filter((video) => extras[`v:${video.id}`]).length, total: optionalVideos.length },
    practice: { done: donePractice.length, total: practice.length, remaining: practice.filter((item) => !extras[`p:${item.id}`]).map((item) => item.name) },
  };
}
