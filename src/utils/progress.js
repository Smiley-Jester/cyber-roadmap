export const clamp = (value, min = 0, max = 100) => Math.min(max, Math.max(min, value));

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
    contentPercent: module.source.contentMinutes ? (completedContentMinutes / module.source.contentMinutes) * 100 : 0,
    isComplete: completed.length === module.lessons.length,
  };
}

export function estimateFinish(completedPlanHours, totalHours, weeklyHours = 12) {
  const remainingHours = Math.max(0, totalHours - completedPlanHours);
  const weeks = remainingHours / weeklyHours;
  const months = weeks / 4.345;
  return { remainingHours, weeks, months };
}

export function formatDate(timestamp) {
  return new Intl.DateTimeFormat('fa-IR', { dateStyle: 'medium', timeStyle: 'short' }).format(new Date(timestamp));
}
