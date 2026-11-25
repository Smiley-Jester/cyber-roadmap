import {
  Activity, BarChart3, BookOpen, Clock3, Compass, LayoutDashboard, Route, ShieldCheck,
} from 'lucide-react';

const items = [
  { id: 'overview', label: 'نمای کلی', icon: LayoutDashboard },
  { id: 'roadmap', label: 'نقشهٔ راه', icon: Route },
  { id: 'courses', label: 'پیگیری دوره‌ها', icon: BookOpen },
  { id: 'focus', label: 'مرکز تمرکز', icon: Clock3 },
  { id: 'guide', label: 'راهنمای تمرین', icon: Compass },
  { id: 'stats', label: 'آمار و گزارش', icon: BarChart3 },
];

export default function Sidebar({ activePage, onNavigate, mobileOpen, onClose }) {
  return (
    <>
      {mobileOpen && <button className="mobile-scrim" aria-label="بستن منو" onClick={onClose} />}
      <aside className={`sidebar ${mobileOpen ? 'sidebar-open' : ''}`}>
        <div className="brand-block">
          <div className="brand-mark"><ShieldCheck size={22} strokeWidth={1.8} /></div>
          <div>
            <div className="brand-name">CYBER PATH</div>
            <div className="brand-caption">نقشه‌راه یادگیری امنیت</div>
          </div>
        </div>

        <div className="sidebar-label">WORKSPACE</div>
        <nav className="side-nav" aria-label="ناوبری اصلی">
          {items.map(({ id, label, icon: Icon }) => (
            <button
              key={id}
              className={`nav-item ${activePage === id ? 'nav-item-active' : ''}`}
              onClick={() => { onNavigate(id); onClose?.(); }}
              aria-current={activePage === id ? 'page' : undefined}
            >
              <Icon size={18} strokeWidth={1.9} />
              <span>{label}</span>
              {activePage === id && <span className="nav-indicator" />}
            </button>
          ))}
        </nav>

        <div className="sidebar-spacer" />
        <div className="sidebar-note">
          <div className="sidebar-note-icon"><Activity size={16} /></div>
          <div>
            <strong>مسیر بلندمدت</strong>
            <p>پیوستگی، تمرین و گزارش دقیق از سرعت مهم‌ترند.</p>
          </div>
        </div>
        <div className="sidebar-footer">LOCAL FIRST <span>•</span> V1.0</div>
      </aside>
    </>
  );
}
