# راهنمای انتشار Cyber Path در GitHub Pages

این پروژه به‌صورت Vite static site منتشر می‌شود و Backend ندارد.

1. در Repository به Settings → Pages برو.
2. گزینهٔ Source را روی GitHub Actions قرار بده.
3. workflow با هر Push به main به‌صورت خودکار اجرا می‌شود.
4. خروجی Build از پوشهٔ dist منتشر می‌شود.

فرمان‌های توسعه:

```powershell
npm install
npm run dev
```

برای ساخت:

```powershell
npm run build
npm run preview
```

Vite در GitHub Actions مقدار base را بر اساس نام Repository تنظیم می‌کند؛ در اجرای محلی base برابر / است.

پیشرفت کاربر، تنظیمات و تاریخچهٔ مطالعه در LocalStorage همان مرورگر ذخیره می‌شوند و بین دستگاه‌ها همگام نیستند.
