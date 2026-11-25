export default function ProgressBar({ value = 0, label, tone = 'default', showValue = false }) {
  const safeValue = Math.max(0, Math.min(100, value));
  return (
    <div className="progress-wrap">
      {(label || showValue) && (
        <div className="progress-meta">
          {label && <span>{label}</span>}
          {showValue && <strong>{Math.round(safeValue)}٪</strong>}
        </div>
      )}
      <div className={`progress-track progress-${tone}`}>
        <div className="progress-fill" style={{ width: `${safeValue}%` }} />
      </div>
    </div>
  );
}
