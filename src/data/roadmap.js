const modules = [
  {
    id: 'foundations', stage: 'مبانی', number: 1, title: 'مبانی کامپیوتر و تفکر محاسباتی',
    level: 'مبتدی', priority: 'حیاتی', prerequisites: [], months: 'حدود ۳ هفته',
    summary: 'نمایش داده، بیت و بایت، الگوریتم، ورودی/خروجی و تفکر مرحله‌ای را یاد می‌گیری؛ این‌ها زبان مشترک تمام شاخه‌های امنیت هستند.',
    why: 'بدون درک نحوه نمایش داده و اجرای برنامه، تحلیل شبکه، حافظه یا فایل اجرایی به حفظ اصطلاحات تبدیل می‌شود.',
    source: { title: 'CS50x – Week 0: Scratch', instructor: 'David J. Malan', publisher: 'Harvard University · OpenCourseWare', url: 'https://cs50.harvard.edu/x/weeks/0/', videoUrl: 'https://www.youtube.com/watch?v=UuIEbpQms8o', durationText: 'حدود ۲ ساعت ویدیو؛ تمرین جداست (تخمینی)', durationKind: 'estimate', contentMinutes: 121, note: 'ویدیوی رسمی و یادداشت/زیرنویس انگلیسی از صفحه Harvard در دسترس است.' },
    studyHours: 12, practiceHours: 23,
    practice: 'یک دفترچهٔ واژه‌نامهٔ سیستم بساز و یک الگوریتم روزمره را به ورودی، پردازش، خروجی و شبه‌کد تبدیل کن. نمایش دودویی چند عدد و کاراکتر را تمرین کن.',
    gate: 'تفاوت bit و byte، CPU و RAM، فایل و فرایند و مفهوم الگوریتم را با مثال توضیح بده و یک الگوریتم ساده را به شبه‌کد بنویس.',
    lessons: ['سخت‌افزار، نرم‌افزار و سیستم‌عامل', 'نمایش داده: دودویی، ASCII و Unicode', 'الگوریتم، شبه‌کد و انتزاع']
  },
  {
    id: 'networking', stage: 'مبانی', number: 2, title: 'مبانی شبکه و اینترنت',
    level: 'مبتدی', priority: 'حیاتی', prerequisites: ['foundations'], months: 'حدود ۶ تا ۷ هفته',
    summary: 'مدل‌های شبکه، Ethernet، IP، subnet، DNS، DHCP، دروازهٔ پیش‌فرض، مسیریابی و پورت را می‌آموزی.',
    why: 'تقریباً هر سامانهٔ مدرن از شبکه استفاده می‌کند؛ فهم مسیر داده پیش‌نیاز تحلیل ترافیک و امنیت است.',
    source: { title: 'Networking Basics', instructor: 'Cisco Networking Academy', publisher: 'Cisco', url: 'https://www.netacad.com/courses/networking-basics?courseLang=en-US', durationText: '۲۲ ساعت طبق اعلام Cisco؛ کل دوره، نه فقط ویدیو', durationKind: 'official', contentMinutes: 1320, note: 'دورهٔ خودآموز؛ زمان اعلام‌شده شامل فعالیت‌های آموزشی نیز هست.' },
    studyHours: 25, practiceHours: 55,
    practice: 'نقشهٔ شبکهٔ خانگی خودت را بدون انتشار IP عمومی یا اطلاعات حساس رسم کن؛ IP، gateway و DNS دستگاه خودت را مشاهده و مستند کن.',
    gate: 'IP خصوصی/عمومی، MAC/IP، DNS/DHCP، TCP/UDP و نقش router و switch را توضیح بده و مسیر یک درخواست DNS را ترسیم کن.',
    lessons: ['مدل‌های OSI و TCP/IP و تجهیزات شبکه', 'IPv4، subnet، gateway و مسیریابی', 'DNS، DHCP، TCP/UDP و پورت‌ها']
  },
  {
    id: 'security-intro', stage: 'مبانی', number: 3, title: 'مبانی امنیت سایبری و اخلاق حرفه‌ای',
    level: 'مبتدی', priority: 'حیاتی', prerequisites: ['foundations', 'networking'], months: 'حدود ۳ هفته',
    summary: 'محرمانگی، یکپارچگی، دسترس‌پذیری، دارایی، تهدید، آسیب‌پذیری، ریسک، کنترل و مرز مجوز را یاد می‌گیری.',
    why: 'دانش فنی بدون تعیین محدوده و مجوز، امنیت حرفه‌ای محسوب نمی‌شود؛ این فصل چارچوب تصمیم‌گیری مسئولانه را می‌سازد.',
    source: { title: 'Introduction to Cybersecurity', instructor: 'Cisco Networking Academy', publisher: 'Cisco U.', url: 'https://u.cisco.com/courses/introduction-cybersecurity-26628', durationText: '۶ ساعت طبق Cisco؛ شامل ۷ آزمایشگاه آموزشی', durationKind: 'official', contentMinutes: 360, note: 'سطح Beginner، انگلیسی و رایگان اعلام شده است.' },
    studyHours: 12, practiceHours: 23,
    practice: 'برای یک حساب فرضی، دارایی‌ها، تهدیدها، کنترل‌های ساده و مرز مجاز را در یک برگهٔ ریسک بنویس؛ هیچ سامانهٔ بیرونی را آزمایش نکن.',
    gate: 'CIA Triad، تفاوت threat و vulnerability و risk، و مفهوم مجوز مکتوب و محدودهٔ آزمایش را توضیح بده.',
    lessons: ['CIA Triad، دارایی و مدل تهدید', 'تهدید، آسیب‌پذیری، ریسک و کنترل', 'قانون، مجوز، محدوده و افشای مسئولانه']
  },
  {
    id: 'windows', stage: 'سیستم‌ها و برنامه‌نویسی', number: 4, title: 'معماری Windows و مشاهدهٔ رفتار سیستم',
    level: 'مبتدی تا متوسط', priority: 'حیاتی', prerequisites: ['foundations'], months: 'حدود ۶ تا ۷ هفته',
    summary: 'فرایند، thread، حافظهٔ مجازی، فایل‌سیستم، رجیستری، سرویس، مجوز، رویداد امنیتی و user/kernel mode را می‌شناسی.',
    why: 'چون Windows سیستم‌عامل اصلی توست، باید رفتار عادی سیستم را ببینی و از روی شواهد اتفاق‌ها را توضیح دهی.',
    source: { title: 'About Processes and Threads + Memory Management', instructor: 'Microsoft Learn', publisher: 'Microsoft', url: 'https://learn.microsoft.com/en-us/windows/win32/procthread/about-processes-and-threads', secondaryUrl: 'https://learn.microsoft.com/en-us/windows/win32/memory/about-memory-management', secondaryTitle: 'مستند تکمیلی مدیریت حافظه', durationText: 'حدود ۴ ساعت مطالعهٔ مستندات (تخمینی؛ ویدیوی رسمی اعلام نشده)', durationKind: 'estimate', contentMinutes: 240, note: 'از صفحات رسمی Microsoft Learn استفاده کن.' },
    studyHours: 22, practiceHours: 53,
    practice: 'در Task Manager و Event Viewer فقط سیستم خودت را مشاهده کن؛ گزارشی از process، service، RAM و چند رویداد عادی بساز.',
    gate: 'process و thread را تفکیک کن، user/kernel mode را توضیح بده و یک رویداد Windows را با زمان و منبع مستند کن.',
    lessons: ['Process، thread، handle و context', 'حافظهٔ مجازی، stack، heap و فایل‌سیستم', 'رجیستری، سرویس‌ها، مجوزها و Event Viewer']
  },
  {
    id: 'linux', stage: 'سیستم‌ها و برنامه‌نویسی', number: 5, title: 'Linux و خط فرمان',
    level: 'مبتدی تا متوسط', priority: 'حیاتی', prerequisites: ['foundations'], months: 'حدود ۵ هفته',
    summary: 'فایل‌سیستم، مسیرها، مجوزها، کاربران، processها، pipe، redirect، shell و مدیریت بسته‌ها را در Ubuntu یاد می‌گیری.',
    why: 'بسیاری از ابزارهای تحلیل و زیرساخت‌های سروری روی Linux هستند؛ آشنایی با CLI دقت و سرعت را بالا می‌برد.',
    source: { title: 'The Linux command line for beginners', instructor: 'Ubuntu Documentation Team', publisher: 'Canonical · Ubuntu', url: 'https://ubuntu.com/desktop/docs/en/latest/tutorial/the-linux-command-line-for-beginners/', durationText: 'حدود ۳ ساعت مطالعه و تمرین مقدماتی (تخمینی)', durationKind: 'estimate', contentMinutes: 180, note: 'روی Windows می‌توانی با WSL و Ubuntu تمرین کنی؛ ابتدا دستورات را بفهم، سپس اجرا کن.' },
    studyHours: 18, practiceHours: 42,
    practice: 'در یک پوشهٔ آزمایشی فایل بساز، خروجی فرمان‌ها را ذخیره کن، مجوزها را مشاهده کن و با ps، top و man آشنا شو.',
    gate: 'بدون راهنما در مسیرها حرکت کن، فایل بساز/بخوان، مجوزها را توضیح بده و دو فرمان را با pipe یا redirect ترکیب کن.',
    lessons: ['Shell، مسیرها و مدیریت فایل', 'کاربران، گروه‌ها، مجوزها و sudo', 'Processها، pipe، redirect و package manager']
  },
  {
    id: 'python', stage: 'سیستم‌ها و برنامه‌نویسی', number: 6, title: 'Python برای اتوماسیون و تحلیل',
    level: 'مبتدی تا متوسط', priority: 'حیاتی', prerequisites: ['foundations'], months: 'حدود ۹ تا ۱۰ هفته',
    summary: 'متغیر، شرط، حلقه، تابع، ساختار داده، فایل، استثنا، ماژول، تست و خواندن داده را تمرین می‌کنی.',
    why: 'Python برای خودکارسازی کارهای تکراری، پردازش log و ساخت ابزارهای کوچک تحلیل دفاعی مناسب است.',
    source: { title: 'CS50’s Introduction to Programming with Python', instructor: 'David J. Malan', publisher: 'Harvard University · OpenCourseWare', url: 'https://cs50.harvard.edu/python/', durationText: '۹ هفته و ۳ تا ۹ ساعت کار هفتگی طبق Harvard؛ ۹ ساعت محتوای منتخب تخمینی', durationKind: 'estimate', contentMinutes: 540, note: 'رایگان در OpenCourseWare؛ transcript انگلیسی و مناسب افراد بدون پیش‌زمینه.' },
    studyHours: 34, practiceHours: 81,
    practice: 'ابزاری آفلاین بساز که فایل log نمونه را بخواند، رخدادها را بشمارد و خلاصهٔ CSV/JSON تولید کند؛ ورودی را اعتبارسنجی و کد را تست کن.',
    gate: 'برنامه‌ای چندفایلی با تابع، کلاس ساده، مدیریت خطا، خواندن فایل و تست بنویس و منطق آن را توضیح بده.',
    lessons: ['متغیرها، شرط‌ها، حلقه‌ها و توابع', 'ساختار داده، فایل، exception و ماژول', 'تست، regex، کلاس و پروژهٔ کوچک']
  },
  {
    id: 'c-memory', stage: 'سیستم‌ها و برنامه‌نویسی', number: 7, title: 'زبان C، اشاره‌گر و مدل حافظه',
    level: 'متوسط', priority: 'حیاتی', prerequisites: ['python'], months: 'حدود ۹ تا ۱۰ هفته',
    summary: 'کامپایل، نوع داده، آرایه، رشته، pointer، تخصیص حافظه، stack/heap و مدیریت حافظه را با برنامه‌های کوچک می‌فهمی.',
    why: 'برای فهم باینری، Assembly و تحلیل کد native باید بدانی C چگونه به حافظه و دستورهای ماشین نزدیک می‌شود.',
    source: { title: 'CS50x – Weeks 1–4: C, Arrays, Algorithms, Memory', instructor: 'David J. Malan', publisher: 'Harvard University · OpenCourseWare', url: 'https://cs50.harvard.edu/x/', durationText: 'حدود ۱۰ ساعت محتوای منتخب از مباحث C و حافظه (تخمینی)', durationKind: 'estimate', contentMinutes: 600, note: 'مباحث C، آرایه و حافظه؛ تمرین‌ها را با کدهای بی‌خطر خودت انجام بده.' },
    studyHours: 34, practiceHours: 81,
    practice: 'برنامه‌های کوچک برای آرایه، رشته و struct بنویس؛ رفتار حافظه را با debugger مشاهده کن و طول ورودی را درست مدیریت کن.',
    gate: 'pointer و array را مقایسه کن، stack و heap را توضیح بده و مالکیت حافظه و طول ورودی را در یک برنامه رعایت کن.',
    lessons: ['C، کامپایلر، نوع‌ها و آرایه‌ها', 'Pointer، string و struct', 'Stack/heap، تخصیص حافظه و debugger']
  },
  {
    id: 'traffic', stage: 'سیستم‌ها و برنامه‌نویسی', number: 8, title: 'پروتکل‌ها و تحلیل بستهٔ شبکه',
    level: 'متوسط', priority: 'مهم', prerequisites: ['networking', 'windows', 'linux'], months: 'حدود ۵ تا ۶ هفته',
    summary: 'ساختار frame، packet و segment، handshake، DNS، HTTP، TLS و تفاوت دادهٔ رمز‌شده و قابل مشاهده را با Wireshark بررسی می‌کنی.',
    why: 'تحلیل بسته کمک می‌کند رفتار شبکه را با شواهد ببینی، نه اینکه صرفاً به حدس یا هشدار ابزارها تکیه کنی.',
    source: { title: 'Wireshark User’s Guide', instructor: 'Wireshark Foundation contributors', publisher: 'Wireshark', url: 'https://www.wireshark.org/docs/wsug_html_chunked/', secondaryUrl: 'https://wiki.wireshark.org/SampleCaptures', secondaryTitle: 'فایل‌های capture نمونه', durationText: 'حدود ۴ ساعت برای بخش‌های مقدماتی و نمونه‌ها (تخمینی)', durationKind: 'estimate', contentMinutes: 240, note: 'فقط فایل نمونه و ترافیک دستگاه خودت را تحلیل کن؛ ترافیک دیگران را ضبط نکن.' },
    studyHours: 19, practiceHours: 46,
    practice: 'چند pcap نمونه را باز کن و برای DNS، TCP و TLS گزارشی از مبدأ/مقصد، زمان و نوع پروتکل بساز؛ payload خصوصی را منتشر نکن.',
    gate: 'packet و flow را تفکیک کن، یک DNS lookup را در capture نمونه پیدا کن و حدود دیدپذیری TLS را توضیح بده.',
    lessons: ['Ethernet، IP، TCP و UDP در capture', 'DNS، HTTP و TLS در سطح مشاهده', 'فیلترهای نمایشی و گزارش ترافیک']
  },
  {
    id: 'security-principles', stage: 'امنیت و کاربرد', number: 9, title: 'اصول دفاع، ریسک و چارچوب امنیت',
    level: 'متوسط', priority: 'مهم', prerequisites: ['security-intro', 'traffic'], months: 'حدود ۴ تا ۵ هفته',
    summary: 'مدیریت دارایی، کنترل دسترسی، به‌روزرسانی، پشتیبان‌گیری، ثبت رویداد، مدیریت ریسک و NIST CSF 2.0 را درک می‌کنی.',
    why: 'امنیت فقط پیدا کردن نقص نیست؛ اولویت‌بندی ریسک و پیشنهاد کنترل متناسب، مهارت کلیدی تحلیل‌گر دفاعی است.',
    source: { title: 'NIST Cybersecurity Framework 2.0', instructor: 'NIST', publisher: 'National Institute of Standards and Technology', url: 'https://www.nist.gov/cyberframework', durationText: 'حدود ۳ ساعت مطالعهٔ مقدماتی (تخمینی)', durationKind: 'estimate', contentMinutes: 180, note: 'چارچوب را برای دسته‌بندی و گفت‌وگوی ریسک به کار ببر.' },
    studyHours: 17, practiceHours: 33,
    practice: 'برای لپ‌تاپ شخصی فهرست دارایی و تهدیدهای محتمل بساز و برای هر ریسک یک کنترل پیشگیرانه یا کشف‌کننده پیشنهاد بده.',
    gate: 'توابع Govern، Identify، Protect، Detect، Respond و Recover را با مثال توضیح بده و برای یک ریسک کنترل قابل سنجش پیشنهاد کن.',
    lessons: ['مدیریت دارایی و مدل‌سازی ریسک', 'کنترل دسترسی، پشتیبان‌گیری و به‌روزرسانی', 'NIST CSF 2.0 و پاسخ به رخداد']
  },
  {
    id: 'human-security', stage: 'امنیت و کاربرد', number: 10, title: 'امنیت انسانی و تشخیص مهندسی اجتماعی',
    level: 'مبتدی تا متوسط', priority: 'مهم', prerequisites: ['security-intro'], months: 'حدود ۳ هفته',
    summary: 'نشانه‌های فیشینگ، جعل هویت، فوریت ساختگی، درخواست اطلاعات حساس و روش گزارش و راستی‌آزمایی مستقل را یاد می‌گیری.',
    why: 'بخش بزرگی از دفاع به تصمیم‌های انسانی وابسته است؛ هدف محافظت و آگاهی‌بخشی است، نه شبیه‌سازی فریب افراد.',
    source: { title: 'How To Recognize and Avoid Phishing Scams', instructor: 'Federal Trade Commission', publisher: 'FTC · Consumer Advice', url: 'https://consumer.ftc.gov/articles/how-recognize-avoid-phishing-scams', secondaryUrl: 'https://www.cisa.gov/secure-our-world', secondaryTitle: 'CISA Secure Our World', durationText: 'حدود ۲ ساعت مطالعه و تمرین تشخیص پیام (تخمینی)', durationKind: 'estimate', contentMinutes: 120, note: 'تمرین فقط با نمونه‌های ساختگی؛ هیچ پیام فریبنده‌ای برای شخص واقعی ارسال نکن.' },
    studyHours: 13, practiceHours: 22,
    practice: '۱۰ پیام ساختگی بی‌خطر را با معیار فرستنده، دامنه، فوریت، درخواست داده و کانال راستی‌آزمایی ارزیابی کن.',
    gate: 'نشانه‌های مشکوک را بدون کلیک روی لینک تشخیص بده و بررسی مستقل، گزارش و حذف را توضیح بده.',
    lessons: ['نشانه‌های فیشینگ و جعل هویت', 'راستی‌آزمایی چندکاناله و گزارش امن', 'رمز عبور یکتا، MFA و حریم خصوصی']
  },
  {
    id: 'web-foundations', stage: 'امنیت و کاربرد', number: 11, title: 'مبانی وب، HTTP و مرورگر',
    level: 'متوسط', priority: 'حیاتی', prerequisites: ['python', 'networking'], months: 'حدود ۶ تا ۷ هفته',
    summary: 'چرخهٔ درخواست/پاسخ، متدها، status code، header، cookie، session، same-origin، HTML، JavaScript و API را یاد می‌گیری.',
    why: 'برای فهم آسیب‌پذیری وب باید سازوکار عادی مرورگر، سرور و نشست کاربر را بشناسی.',
    source: { title: 'An overview of HTTP', instructor: 'MDN Contributors', publisher: 'Mozilla Developer Network', url: 'https://developer.mozilla.org/en-US/docs/Web/HTTP/Guides/Overview', durationText: 'حدود ۳ ساعت مطالعه و مثال محلی (تخمینی)', durationKind: 'estimate', contentMinutes: 180, note: 'صفحهٔ انگلیسی و مناسب مطالعهٔ موضوعی است.' },
    studyHours: 29, practiceHours: 51,
    practice: 'یک صفحهٔ محلی ساده و API ساختگی طراحی کن؛ درخواست و پاسخ را در DevTools مشاهده و اجزای آن را مستند کن.',
    gate: 'یک HTTP request/response را بخوان و نقش cookie، session، header، status code و same-origin را توضیح بده.',
    lessons: ['چرخهٔ HTTP، URL، method و status code', 'Cookie، session، origin و browser storage', 'HTML، JavaScript و API پایه']
  },
  {
    id: 'web-security', stage: 'امنیت و کاربرد', number: 12, title: 'مبانی امنیت وب در آزمایشگاه مجاز',
    level: 'متوسط', priority: 'حیاتی', prerequisites: ['web-foundations', 'security-principles'], months: 'حدود ۷ تا ۸ هفته',
    summary: 'خطاهای رایج در احراز هویت، کنترل دسترسی، ورودی، پیکربندی، نشست و اعتبارسنجی را می‌شناسی و اصلاح آن‌ها را تحلیل می‌کنی.',
    why: 'این فصل پل میان مفاهیم وب و تحقیق آسیب‌پذیری است؛ تمرین فقط در آزمایشگاه‌های آموزشی انجام می‌شود.',
    source: { title: 'Web Security Academy – Getting started & Learning Paths', instructor: 'PortSwigger Research Team', publisher: 'PortSwigger', url: 'https://portswigger.net/web-security/getting-started', secondaryUrl: 'https://top10.owasp.org/', secondaryTitle: 'OWASP Top 10:2025', durationText: '۹ ساعت محتوای مقدماتی منتخب (تخمینی؛ مسیر کل زمان ثابت ندارد)', durationKind: 'estimate', contentMinutes: 540, note: 'فقط labهای خود Academy یا برنامهٔ محلی؛ دامنه یا حساب واقعی را آزمایش نکن.' },
    studyHours: 31, practiceHours: 64,
    practice: 'برای یک سناریوی آموزشی، علت ریشه‌ای، اثر، شواهد غیرحساس و راهکار اصلاح را در قالب یادداشت دفاعی بنویس.',
    gate: 'برای چند دستهٔ رایج توضیح بده چه فرضی در طراحی شکسته شده و چگونه کنترل دسترسی، اعتبارسنجی و تنظیم امن آن را اصلاح می‌کند.',
    lessons: ['نقشهٔ مفاهیم وب و OWASP Top 10:2025', 'احراز هویت، نشست و کنترل دسترسی', 'تحلیل lab مقدماتی و راهکار اصلاح']
  },
  {
    id: 'secure-coding', stage: 'امنیت و کاربرد', number: 13, title: 'برنامه‌نویسی امن و بازبینی کد',
    level: 'متوسط', priority: 'مهم', prerequisites: ['c-memory', 'web-foundations'], months: 'حدود ۵ تا ۶ هفته',
    summary: 'اعتبارسنجی ورودی، اصل کمترین امتیاز، مدیریت خطا، رمزنگاری صحیح، مدیریت وابستگی و بازبینی کد را تمرین می‌کنی.',
    why: 'تحلیل‌گر خوب فقط مشکل را نام نمی‌برد؛ می‌تواند توضیح دهد چگونه از تکرار آن جلوگیری شود.',
    source: { title: 'OWASP Developer Guide – Foundations & Secure Development', instructor: 'OWASP Contributors', publisher: 'OWASP Foundation', url: 'https://devguide.owasp.org/en/', secondaryUrl: 'https://owasp.org/projects/secure-coding-practices-quick-reference-guide', secondaryTitle: 'Secure Coding Practices Quick Reference', durationText: 'حدود ۴ ساعت مطالعهٔ بخش‌های انتخابی (تخمینی)', durationKind: 'estimate', contentMinutes: 240, note: 'برای مطالب جاری، Developer Guide اولویت دارد.' },
    studyHours: 23, practiceHours: 47,
    practice: 'برنامهٔ کوچک خودت را با چک‌لیست OWASP از نظر ورودی، خطا، مجوز و وابستگی‌ها بازبینی و اصلاح کن.',
    gate: 'حداقل پنج ریسک طراحی/کدنویسی را شناسایی، پیامدشان را توضیح و اصلاح قابل‌تست پیشنهاد کن.',
    lessons: ['اعتبارسنجی ورودی و مدیریت خطا', 'کنترل دسترسی، secret و اصل کمترین امتیاز', 'بازبینی وابستگی و کد امن']
  },
  {
    id: 'vulnerability-research', stage: 'امنیت و کاربرد', number: 14, title: 'تحلیل آسیب‌پذیری و گزارش مسئولانه',
    level: 'متوسط تا پیشرفته', priority: 'حیاتی', prerequisites: ['web-security', 'secure-coding'], months: 'حدود ۷ تا ۸ هفته',
    summary: 'نشانهٔ نقص را از علت ریشه‌ای جدا می‌کنی، اثر را در محدودهٔ محلی تبیین و گزارش اصلاح‌محور می‌نویسی.',
    why: 'تحقیق حرفه‌ای بر شواهد، محدودهٔ مجاز، شدت‌سنجی، اصلاح و افشای مسئولانه تکیه دارد.',
    source: { title: 'Pwning OWASP Juice Shop – Official Companion Guide', instructor: 'Bjoern Kimminich & OWASP contributors', publisher: 'OWASP Foundation', url: 'https://pwning.owasp-juice.shop/', secondaryUrl: 'https://owasp.org/www-project-juice-shop/', secondaryTitle: 'معرفی OWASP Juice Shop و آزمایشگاه محلی', durationText: 'حدود ۵ ساعت مباحث مقدماتی و گزارش‌نویسی (تخمینی)', durationKind: 'estimate', contentMinutes: 300, note: 'فقط محلی و جدا از داده‌های واقعی؛ علت و راهکار مهم‌تر از امتیاز چالش است.' },
    studyHours: 22, practiceHours: 73,
    practice: 'در Juice Shop محلی یک مشکل آموزشی مقدماتی را با شواهد بی‌خطر مستند کن؛ خلاصه، دامنه، اثر، راهکار و محدودیت‌ها را بنویس.',
    gate: 'گزارشی مسئولانه بنویس که scope، اثر، شواهد، شدت تقریبی و remediation را پوشش دهد و شامل دادهٔ شخصی یا سامانهٔ بیرونی نباشد.',
    lessons: ['طبقه‌بندی نقص، علت ریشه‌ای و اثر', 'تحلیل کنترل‌شده در برنامهٔ محلی', 'گزارش مسئولانه، شواهد و اصلاح']
  },
  {
    id: 'assembly', stage: 'تخصص‌گرایی', number: 15, title: 'مبانی Assembly و معماری x86-64',
    level: 'متوسط تا پیشرفته', priority: 'مهم', prerequisites: ['c-memory'], months: 'حدود ۵ تا ۶ هفته',
    summary: 'رجیسترها، دستورهای پایه، stack frame، فراخوانی تابع، پارامترها و جریان کنترل را در برنامه‌های ساده می‌خوانی.',
    why: 'Assembly زبان مشاهدهٔ لایهٔ واقعی اجرای برنامه توسط پردازنده است و پیش‌نیاز مهندسی معکوس می‌شود.',
    source: { title: 'Architecture 1001: x86-64 Assembly', instructor: 'Xeno Kovah', publisher: 'OpenSecurityTraining2', url: 'https://p.ost2.fyi/courses/course-v1:OpenSecurityTraining2+Arch1001_x86-64_Asm+2021_v1/', durationText: 'حدود ۸ ساعت محتوای منتخب (تخمینی؛ مدت تجمیعی اعلام نشده)', durationKind: 'estimate', contentMinutes: 480, note: 'پیش‌نیاز C است؛ بخش‌های خواندن برنامهٔ ساده را دنبال کن و لاب exploit را کنار بگذار.' },
    studyHours: 22, practiceHours: 48,
    practice: 'یک برنامهٔ سادهٔ C خودت را در debugger مشاهده کن و رابطهٔ متغیر، رجیستر و فراخوانی تابع را یادداشت کن.',
    gate: 'چند دستور رایج را توضیح بده، stack frame را رسم کن و ارتباط یک تابع C ساده با Assembly را شرح بده.',
    lessons: ['رجیسترها، داده و دستورهای پایه', 'Stack، فراخوانی تابع و پارامترها', 'شرط، حلقه و تطبیق C با Assembly']
  },
  {
    id: 'reverse-engineering', stage: 'تخصص‌گرایی', number: 16, title: 'مهندسی معکوس با Ghidra',
    level: 'پیشرفته', priority: 'حیاتی', prerequisites: ['assembly', 'c-memory'], months: 'حدود ۸ تا ۹ هفته',
    summary: 'ساخت پروژه، import فایل آموزشی، decompiler، symbol، function graph، data type و یادداشت‌گذاری را یاد می‌گیری.',
    why: 'این مرحله توانایی تبدیل یک باینری بی‌خطر به درکی مستند از ساختار و منطق برنامه را شکل می‌دهد.',
    source: { title: 'Introduction to Ghidra – Student Guide', instructor: 'Ghidra Training Team', publisher: 'National Security Agency · Ghidra Project', url: 'https://ghidra.re/ghidra_docs/GhidraClass/Beginner/Introduction_to_Ghidra_Student_Guide.html', durationText: 'حدود ۵ ساعت راهنما و تمرین ساده (تخمینی)', durationKind: 'estimate', contentMinutes: 300, note: 'فقط برنامهٔ خودساخته یا فایل آموزشی بی‌خطر و مجاز؛ به فایل ناشناس دست نزن.' },
    studyHours: 30, practiceHours: 75,
    practice: 'دو برنامهٔ سادهٔ C خودت را در Ghidra باز کن؛ functionها را نام‌گذاری، نوع داده را اصلاح و گزارش «از کد تا باینری» بنویس.',
    gate: 'یک برنامهٔ benign خودساخته را import و تحلیل کن، functionها را توضیح بده و یافته‌ها را همراه شواهد و عدم‌قطعیت ثبت کن.',
    lessons: ['پروژه، import، تنظیمات و تحلیل خودکار', 'Decompiler، symbol، data type و function graph', 'مستندسازی رفتار باینری خودساخته']
  },
  {
    id: 'blue-team', stage: 'تخصص‌گرایی', number: 17, title: 'Blue Team، لاگ و پایش دفاعی',
    level: 'متوسط تا پیشرفته', priority: 'مهم', prerequisites: ['windows', 'linux', 'security-principles', 'traffic'], months: 'حدود ۷ تا ۸ هفته',
    summary: 'ثبت رویداد، خط مبنا، فرایندهای آغاز به کار، هشدار، triage اولیه و مستندسازی رخداد را تمرین می‌کنی.',
    why: 'تحلیل دفاعی یعنی جدا کردن رفتار عادی از مورد نیازمند بررسی با دادهٔ مجاز و شواهد.',
    source: { title: 'View the security event log + Sysinternals', instructor: 'Microsoft Learn / Mark Russinovich', publisher: 'Microsoft', url: 'https://learn.microsoft.com/en-us/windows/security/threat-protection/auditing/view-the-security-event-log', secondaryUrl: 'https://learn.microsoft.com/en-us/sysinternals/downloads/', secondaryTitle: 'ابزارهای رسمی Sysinternals', durationText: 'حدود ۴ ساعت مطالعه و مشاهدهٔ لاگ (تخمینی)', durationKind: 'estimate', contentMinutes: 240, note: 'فقط رویدادهای دستگاه خودت یا دادهٔ آموزشی را بررسی کن.' },
    studyHours: 25, practiceHours: 65,
    practice: 'خط مبنایی از رویدادهای عادی Windows بساز، چند رویداد آموزشی را دسته‌بندی و علت نیاز یا عدم نیاز به بررسی را بنویس.',
    gate: 'یک رویداد را با زمان، منبع، شناسه، حساب/فرایند مرتبط و نتیجهٔ triage مستند کن؛ بدون شواهد نتیجه‌گیری نکن.',
    lessons: ['Event Viewer، Security log و خط مبنا', 'Process Explorer و Autoruns در حالت مشاهده', 'Triage، timeline و گزارش دفاعی']
  },
  {
    id: 'malware-analysis', stage: 'تخصص‌گرایی', number: 18, title: 'تحلیل دفاعی فایل و بدافزار – ایستا و ایمن',
    level: 'پیشرفته', priority: 'حیاتی', prerequisites: ['assembly', 'reverse-engineering', 'blue-team'], months: 'حدود ۸ تا ۹ هفته',
    summary: 'triage ایستا، hash، نوع فایل، امضای دیجیتال، metadata، strings و ثبت شاخص‌ها را روی فایل‌های بی‌خطر می‌آموزی.',
    why: 'برای دفاع باید فایل را با احتیاط ارزیابی کنی؛ اجرای نمونهٔ ناشناس یا ساخت/تغییر بدافزار در برنامه نیست.',
    source: { title: 'REMnux Documentation – Examine Static Properties', instructor: 'REMnux Community', publisher: 'REMnux', url: 'https://docs.remnux.org/discover-the-tools/examine+static+properties', secondaryUrl: 'https://docs.remnux.org/', secondaryTitle: 'مستندات ابزار REMnux', durationText: 'حدود ۳٫۵ ساعت مطالعهٔ مباحث ایستای منتخب (تخمینی)', durationKind: 'estimate', contentMinutes: 210, note: 'فقط metadata و فایل‌های آزمایشی بی‌خطر یا خودساخته؛ نمونهٔ واقعی ناشناس را دانلود یا اجرا نکن. تحلیل پویا خارج از دامنه است.' },
    studyHours: 27, practiceHours: 73,
    practice: 'برای فایل متنی یا باینری بی‌خطر خودت، hash و metadata را ثبت کن، امضا و نوع فایل را تفکیک و گزارش triage ایستا بنویس.',
    gate: 'triage ایستا را با زنجیرهٔ شواهد، محدودیت تحلیل و نتیجهٔ محتاطانه مستند کن؛ هرگز فایل ناشناس را اجرا نکن.',
    lessons: ['قواعد ایمنی، hash، نوع فایل و امضا', 'Metadata، strings و ویژگی‌های ایستا', 'گزارش triage و محدودیت نتیجه']
  },
  {
    id: 'portfolio', stage: 'پروژه و تثبیت', number: 19, title: 'پروژه‌های نهایی و Portfolio',
    level: 'پیشرفته', priority: 'مهم', prerequisites: ['foundations', 'networking', 'security-intro', 'windows', 'linux', 'python', 'c-memory', 'traffic', 'security-principles', 'human-security', 'web-foundations', 'web-security', 'secure-coding', 'vulnerability-research', 'assembly', 'reverse-engineering', 'blue-team', 'malware-analysis'], months: 'حدود ۱۰ تا ۱۱ هفته',
    summary: 'آموخته‌ها را به گزارش و پروژه‌های کوچک، قابل بازبینی و اخلاقی تبدیل می‌کنی؛ تمرکز روی کیفیت توضیح، شواهد و اصلاح است.',
    why: 'Portfolio خوب نشان می‌دهد چطور مسئله را تحلیل می‌کنی و یافته را مسئولانه منتقل می‌کنی.',
    source: { title: 'GitHub Skills – Introduction to GitHub', instructor: 'GitHub Skills Team', publisher: 'GitHub', url: 'https://skills.github.com/', durationText: 'حدود ۱ ساعت آشنایی پایه؛ پروژه و گزارش جداست (تخمینی)', durationKind: 'estimate', contentMinutes: 60, note: 'فقط کد/گزارش خودساخته، دادهٔ ساختگی و اطلاعات غیرحساس را منتشر کن.' },
    studyHours: 30, practiceHours: 100,
    practice: 'سه خروجی بساز: تحلیل شبکه با pcap عمومی، گزارش آسیب‌پذیری برنامهٔ محلی همراه remediation، و تحلیل Ghidra/triage ایستای برنامهٔ benign خودساخته؛ README بنویس.',
    gate: 'حداقل سه پروژهٔ قابل بازبینی با README، هدف، روش مجاز، شواهد غیرحساس، نتیجه و محدودیت‌ها منتشر کرده باشی.',
    lessons: ['ساخت مخزن، README و مستندسازی فنی', 'پروژهٔ شبکه و گزارش Blue Team', 'پروژهٔ وب/RE ایمن و بازبینی نهایی']
  }
];

export const roadmap = modules.map((module) => {
  const ratios = [0.28, 0.34, 0.38];
  let allocated = 0;
  const lessonItems = module.lessons.map((title, index) => {
    const minutes = index === module.lessons.length - 1
      ? module.source.contentMinutes - allocated
      : Math.round(module.source.contentMinutes * ratios[index]);
    allocated += minutes;
    const totalHours = module.studyHours + module.practiceHours;
    const weightHours = index === module.lessons.length - 1
      ? totalHours - Math.round(totalHours * 0.32) - Math.round(totalHours * 0.34)
      : Math.round(totalHours * (index === 0 ? 0.32 : 0.34));
    return { id: module.id + '-lesson-' + (index + 1), title, minutes, weightHours };
  });
  return { ...module, totalHours: module.studyHours + module.practiceHours, lessons: lessonItems };
});

export const totalPlanHours = roadmap.reduce((sum, item) => sum + item.totalHours, 0);
