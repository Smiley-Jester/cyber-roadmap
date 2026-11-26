const modules = [
  {
    id: 'foundations', stage: 'مبانی', number: 1, title: 'مبانی کامپیوتر و تفکر محاسباتی',
    level: 'مبتدی', priority: 'حیاتی', prerequisites: [], months: 'حدود ۲ هفته',
    summary: 'نمایش داده، بیت و بایت، الگوریتم، ورودی/خروجی و تفکر مرحله‌ای را یاد می‌گیری؛ این‌ها زبان مشترک تمام شاخه‌های امنیت هستند.',
    why: 'بدون درک نحوه نمایش داده و اجرای برنامه، تحلیل شبکه، حافظه یا فایل اجرایی به حفظ اصطلاحات تبدیل می‌شود.',
    source: { title: 'CS50x – Week 0: Scratch', instructor: 'David J. Malan', publisher: 'Harvard University · OpenCourseWare', url: 'https://cs50.harvard.edu/x/weeks/0/', durationText: 'حدود ۲ ساعت ویدیو؛ تمرین جداست (تخمینی)', durationKind: 'estimate', contentMinutes: 121, note: 'ویدیوی رسمی و یادداشت/زیرنویس انگلیسی از صفحه Harvard در دسترس است.' },
    videos: [{"title": "CS50x – Week 0: Scratch", "author": "David J. Malan", "status": "review", "url": "https://www.youtube.com/watch?v=UuIEbpQms8o"}],
    studyHours: 7, practiceHours: 13,
    practice: 'یک دفترچهٔ واژه‌نامهٔ سیستم بساز و یک الگوریتم روزمره را به ورودی، پردازش، خروجی و شبه‌کد تبدیل کن. نمایش دودویی چند عدد و کاراکتر را تمرین کن.',
    gate: 'تفاوت bit و byte، CPU و RAM، فایل و فرایند و مفهوم الگوریتم را با مثال توضیح بده و یک الگوریتم ساده را به شبه‌کد بنویس.',
    lessons: ['سخت‌افزار، نرم‌افزار و سیستم‌عامل', 'نمایش داده: دودویی، ASCII و Unicode', 'الگوریتم، شبه‌کد و انتزاع']
  },
  {
    id: 'networking', stage: 'مبانی', number: 2, title: 'مبانی شبکه و اینترنت',
    level: 'مبتدی', priority: 'حیاتی', prerequisites: ['foundations'], months: 'حدود ۲ هفته',
    summary: 'مدل‌های شبکه، Ethernet، IP، subnet، DNS، DHCP، دروازهٔ پیش‌فرض، مسیریابی و پورت را می‌آموزی.',
    why: 'تقریباً هر سامانهٔ مدرن از شبکه استفاده می‌کند؛ فهم مسیر داده پیش‌نیاز تحلیل ترافیک و امنیت است.',
    source: { title: "Networking for Non-Network Engineers + Professor Messer (Network+ N10-009)", instructor: "Professor Messer", publisher: "Professor Messer · YouTube", url: "https://www.youtube.com/watch?v=PYHKOwBfsLI", durationText: "حدود ۸۰ دقیقه ویدیوی ضروری", durationKind: 'estimate', contentMinutes: 80, note: "فقط این شش ویدیوی کوتاه ضروری‌اند؛ دورهٔ طولانی freeCodeCamp اختیاری است. بعد از هر ویدیو بلافاصله تمرین را انجام بده." },
    videos: [{"title": "Networking for Non-Network Engineers", "author": "(ارائه‌شده توسط کاربر؛ منتشرشده ۲۰۲۴/۰۸/۲۷)", "status": "supplied", "url": "https://www.youtube.com/watch?v=PYHKOwBfsLI", "duration": "حدود ۲۰ دقیقه", "timestamps": [["01:48", "OSI و TCP/IP"], ["08:19", "MAC"], ["09:35", "IP"], ["10:48", "Port"], ["11:50", "Subnet و mask"], ["14:41", "NAT"], ["15:54", "TCP و UDP"], ["18:03", "DNS"], ["19:09", "Troubleshooting"]]}, {"title": "OSI Model", "author": "Professor Messer", "status": "supplied", "url": "https://www.youtube.com/watch?v=AYgXr1dynKU", "duration": "حدود ۱۴ دقیقه"}, {"title": "IPv4 Addressing", "author": "Professor Messer", "status": "supplied", "url": "https://www.youtube.com/watch?v=JNNcyZ_VE2A", "duration": "حدود ۱۱ دقیقه"}, {"title": "DHCP", "author": "Professor Messer", "status": "supplied", "url": "https://www.youtube.com/watch?v=b7fiXM3vO18", "duration": "حدود ۹ دقیقه"}, {"title": "DNS Overview", "author": "Professor Messer", "status": "supplied", "url": "https://www.youtube.com/watch?v=S4s3vgm4h84", "duration": "حدود ۱۷ دقیقه"}, {"title": "DNS Records", "author": "Professor Messer", "status": "supplied", "url": "https://www.youtube.com/watch?v=qAyVND44jaE", "duration": "حدود ۹ دقیقه"}, {"title": "Computer Networking Fundamentals (Deep Dive)", "author": "freeCodeCamp", "status": "supplied", "url": "https://www.youtube.com/watch?v=fQbBPa0ADvs", "optional": true, "note": "طولانی است؛ فقط بخش‌های موردنیاز را ببین، نه کل آن را."}],
    practiceNow: [{"platform": "TryHackMe", "name": "Pre Security → Network Fundamentals", "url": "https://tryhackme.com/path/outline/presecurity", "tasks": "اتاق‌ها: What is Networking?، Intro to LAN، OSI Model، Packets & Frames، Extending Your Network", "teaches": "LAN، لایه‌ها، بسته و فریم", "do": "هر اتاق را بخوان، پرسش‌ها را خودت جواب بده و نکتهٔ اصلی را در یک خط یادداشت کن.", "prereq": "ندارد", "time": "حدود ۳ ساعت (تخمینی)", "access": "بررسی نشده؛ پیش از شروع، قفل‌بودن اتاق را در سایت ببین", "challenge": "در ویندوز خودت ipconfig /all، nslookup و tracert را اجرا کن و IP، gateway، DNS و مسیر تا یک سایت را در یک صفحه مستند کن.", "done": "مسیر یک درخواست DNS و تفاوت TCP و UDP را بدون یادداشت توضیح می‌دهی.", "tool": "ipconfig / nslookup / tracert — مشاهدهٔ تنظیمات و مسیر شبکه"}],
    studyHours: 6, practiceHours: 14,
    practice: 'نقشهٔ شبکهٔ خانگی خودت را بدون انتشار IP عمومی یا اطلاعات حساس رسم کن؛ IP، gateway و DNS دستگاه خودت را مشاهده و مستند کن.',
    gate: 'IP خصوصی/عمومی، MAC/IP، DNS/DHCP، TCP/UDP و نقش router و switch را توضیح بده و مسیر یک درخواست DNS را ترسیم کن.',
    lessons: ['مدل‌های OSI و TCP/IP و تجهیزات شبکه', 'IPv4، subnet، gateway و مسیریابی', 'DNS، DHCP، TCP/UDP و پورت‌ها']
  },
  {
    id: 'security-intro', stage: 'مبانی', number: 3, title: 'مبانی امنیت سایبری و اخلاق حرفه‌ای',
    level: 'مبتدی', priority: 'حیاتی', prerequisites: ['foundations', 'networking'], months: 'حدود ۲ هفته',
    summary: 'محرمانگی، یکپارچگی، دسترس‌پذیری، دارایی، تهدید، آسیب‌پذیری، ریسک، کنترل و مرز مجوز را یاد می‌گیری.',
    why: 'دانش فنی بدون تعیین محدوده و مجوز، امنیت حرفه‌ای محسوب نمی‌شود؛ این فصل چارچوب تصمیم‌گیری مسئولانه را می‌سازد.',
    source: { title: 'Introduction to Cybersecurity', instructor: 'Cisco Networking Academy', publisher: 'Cisco U.', url: 'https://u.cisco.com/courses/introduction-cybersecurity-26628', durationText: '۶ ساعت طبق Cisco؛ شامل ۷ آزمایشگاه آموزشی', durationKind: 'official', contentMinutes: 360, note: 'سطح Beginner، انگلیسی و رایگان اعلام شده است.' },
    videos: [{"title": "Introduction to Cybersecurity", "author": "Cisco Networking Academy", "status": "review", "url": "https://www.youtube.com/watch?v=STM3EUvL7wg"}],
    studyHours: 7, practiceHours: 13,
    practice: 'برای یک حساب فرضی، دارایی‌ها، تهدیدها، کنترل‌های ساده و مرز مجاز را در یک برگهٔ ریسک بنویس؛ هیچ سامانهٔ بیرونی را آزمایش نکن.',
    gate: 'CIA Triad، تفاوت threat و vulnerability و risk، و مفهوم مجوز مکتوب و محدودهٔ آزمایش را توضیح بده.',
    lessons: ['CIA Triad، دارایی و مدل تهدید', 'تهدید، آسیب‌پذیری، ریسک و کنترل', 'قانون، مجوز، محدوده و افشای مسئولانه']
  },
  {
    id: 'windows', stage: 'سیستم‌ها و برنامه‌نویسی', number: 4, title: 'معماری Windows و مشاهدهٔ رفتار سیستم',
    level: 'مبتدی تا متوسط', priority: 'حیاتی', prerequisites: ['foundations'], months: 'حدود ۴ هفته',
    summary: 'فرایند، thread، حافظهٔ مجازی، فایل‌سیستم، رجیستری، سرویس، مجوز، رویداد امنیتی و user/kernel mode را می‌شناسی.',
    why: 'چون Windows سیستم‌عامل اصلی توست، باید رفتار عادی سیستم را ببینی و از روی شواهد اتفاق‌ها را توضیح دهی.',
    source: { title: 'About Processes and Threads + Memory Management', instructor: 'Microsoft Learn', publisher: 'Microsoft', url: 'https://learn.microsoft.com/en-us/windows/win32/procthread/about-processes-and-threads', secondaryUrl: 'https://learn.microsoft.com/en-us/windows/win32/memory/about-memory-management', secondaryTitle: 'مستند تکمیلی مدیریت حافظه', durationText: 'حدود ۴ ساعت مطالعهٔ مستندات (تخمینی؛ ویدیوی رسمی اعلام نشده)', durationKind: 'estimate', contentMinutes: 240, note: 'از صفحات رسمی Microsoft Learn استفاده کن.' },
    videos: [{"title": "About Processes and Threads + Memory Management", "author": "Microsoft Learn", "status": "review", "url": "https://www.youtube.com/playlist?list=PL96F5PDvO1HHuVewlKWQDzzTUrhMm-wGS"}],
    studyHours: 13, practiceHours: 32,
    practice: 'در Task Manager و Event Viewer فقط سیستم خودت را مشاهده کن؛ گزارشی از process، service، RAM و چند رویداد عادی بساز.',
    gate: 'process و thread را تفکیک کن، user/kernel mode را توضیح بده و یک رویداد Windows را با زمان و منبع مستند کن.',
    lessons: ['Process، thread، handle و context', 'حافظهٔ مجازی، stack، heap و فایل‌سیستم', 'رجیستری، سرویس‌ها، مجوزها و Event Viewer']
  },
  {
    id: 'linux', stage: 'سیستم‌ها و برنامه‌نویسی', number: 5, title: 'Linux و خط فرمان',
    level: 'مبتدی تا متوسط', priority: 'حیاتی', prerequisites: ['foundations'], months: 'حدود ۳ هفته',
    summary: 'فایل‌سیستم، مسیرها، مجوزها، کاربران، processها، pipe، redirect، shell و مدیریت بسته‌ها را در Ubuntu یاد می‌گیری.',
    why: 'بسیاری از ابزارهای تحلیل و زیرساخت‌های سروری روی Linux هستند؛ آشنایی با CLI دقت و سرعت را بالا می‌برد.',
    source: { title: 'The Linux command line for beginners', instructor: 'Ubuntu Documentation Team', publisher: 'Canonical · Ubuntu', url: 'https://ubuntu.com/desktop/docs/en/latest/tutorial/the-linux-command-line-for-beginners/', durationText: 'حدود ۳ ساعت مطالعه و تمرین مقدماتی (تخمینی)', durationKind: 'estimate', contentMinutes: 180, note: 'روی Windows می‌توانی با WSL و Ubuntu تمرین کنی؛ ابتدا دستورات را بفهم، سپس اجرا کن.' },
    videos: [{"title": "Command Line Basics for Beginners", "author": "freeCodeCamp", "status": "supplied", "url": "https://www.youtube.com/watch?v=mABpAI-pCw0"}, {"title": "The Linux command line for beginners", "author": "Ubuntu Documentation Team", "status": "review", "url": "https://www.youtube.com/watch?v=lZAoFs75_cs", "optional": true}, {"title": "Linux for Ethical Hackers (2022 – Full Kali Linux Course)", "author": "The Cyber Mentor", "status": "review", "url": "https://www.youtube.com/playlist?list=PLLKT__MCUeixqHJ1TRqrHsEd6_EdEvo47", "optional": true, "note": "در پلی‌لیست The Cyber Mentor پیدا کن؛ لینک تکی تأیید نشده"}],
    practiceNow: [{"platform": "OverTheWire", "name": "Bandit – Level 0 تا Level 10", "url": "https://overthewire.org/wargames/bandit/bandit0.html", "tasks": "Level 0: اتصال با ssh bandit0@bandit.labs.overthewire.org -p 2220 (رمز bandit0)؛ سپس هر مرحله با رمز مرحلهٔ قبل", "teaches": "دستورهای پایهٔ Linux (ls، cat، find، grep)", "do": "هر مرحله را خودت حل کن؛ دستورهای استفاده‌شده را در فایل یادداشت بنویس.", "prereq": "ندارد؛ نیازی به نصب نیست (ssh در ویندوز)", "time": "حدود ۲ تا ۳ ساعت (تخمینی)", "access": "رایگان", "challenge": "بدون کپی کردن دستور، یک فایل را پیدا کن، محتوایش را فیلتر کن و نتیجه را در فایل دیگر ذخیره کن.", "done": "Bandit را تا Level 10 بدون Writeup رفته‌ای.", "tool": "ssh و دستورهای Linux"}],
    studyHours: 10, practiceHours: 25,
    practice: 'در یک پوشهٔ آزمایشی فایل بساز، خروجی فرمان‌ها را ذخیره کن، مجوزها را مشاهده کن و با ps، top و man آشنا شو.',
    gate: 'بدون راهنما در مسیرها حرکت کن، فایل بساز/بخوان، مجوزها را توضیح بده و دو فرمان را با pipe یا redirect ترکیب کن.',
    lessons: ['Shell، مسیرها و مدیریت فایل', 'کاربران، گروه‌ها، مجوزها و sudo', 'Processها، pipe، redirect و package manager']
  },
  {
    id: 'home-lab', stage: 'سیستم‌ها و برنامه‌نویسی', number: 6, title: 'ساخت آزمایشگاه ایزوله با ماشین مجازی',
    level: 'مبتدی تا متوسط', priority: 'حیاتی', prerequisites: ['windows', 'linux'], months: 'حدود ۱ هفته',
    summary: 'VirtualBox، نصب Kali Linux به‌عنوان ماشین مهمان، شبکهٔ ایزولهٔ Host-Only یا Internal، snapshot و جدا نگه داشتن آزمایشگاه از شبکه و فایل‌های اصلی را یاد می‌گیری.',
    why: 'تمام تمرین‌های تهاجمی و تحلیل فایل در فصل‌های بعد فقط در محیط ایزوله و مجاز انجام می‌شود؛ بدون این فصل سراغ فصل‌های هک اخلاقی نرو.',
    source: { title: 'Kali inside VirtualBox (Guest VM)', instructor: 'Kali Linux Team', publisher: 'Kali Linux · OffSec', url: 'https://www.kali.org/docs/virtualization/install-virtualbox-guest-vm/', secondaryUrl: 'https://www.virtualbox.org/wiki/Documentation', secondaryTitle: 'مستندات رسمی VirtualBox', durationText: 'حدود ۳ ساعت مطالعه و نصب (تخمینی)', durationKind: 'estimate', contentMinutes: 180, note: 'برای اجرای هم‌زمان چند ماشین، ۱۶ گیگابایت RAM یا بیشتر مناسب است. shared folder و clipboard مشترک را غیرفعال بگذار و قبل از هر تمرین snapshot بگیر.' },
    videos: [{"title": "Kali inside VirtualBox (Guest VM)", "author": "Kali Linux Team", "status": "review", "url": "https://www.youtube.com/watch?v=wX75Z-4MEoM"}],
    studyHours: 5, practiceHours: 10,
    practice: 'VirtualBox را نصب کن، یک ماشین Kali بساز، شبکهٔ آن را روی Host-Only یا Internal Network بگذار، یک snapshot تمیز بگیر و بازگردانی آن را امتحان کن.',
    gate: 'ثابت کن ماشین آزمایشگاه به فایل‌های اصلی و شبکهٔ خانه دسترسی ندارد، snapshot را بازگردانی کن و تفاوت NAT، Host-Only و Internal Network را توضیح بده.',
    lessons: ['مجازی‌سازی و نصب Kali در VirtualBox', 'حالت‌های شبکه و ایزوله‌سازی آزمایشگاه', 'Snapshot، پاک‌سازی و قواعد ایمنی']
  },
  {
    id: 'docker-labs', stage: 'سیستم‌ها و برنامه‌نویسی', number: 7, title: 'Docker برای ساخت سریع آزمایشگاه',
    level: 'مبتدی تا متوسط', priority: 'مهم', prerequisites: ['linux', 'home-lab'], months: 'حدود ۲ هفته',
    summary: 'image، container، پورت، volume و Docker Compose را یاد می‌گیری تا برنامه‌های آموزشی آسیب‌پذیر را سریع، تمیز و فقط روی localhost اجرا کنی.',
    why: 'بالا آوردن و پاک کردن لب‌هایی مثل Juice Shop و DVWA با Docker چند دقیقه است و آزمایشگاه تو را از سیستم اصلی جدا نگه می‌دارد.',
    source: { title: 'Docker – Get Started', instructor: 'Docker Docs Team', publisher: 'Docker', url: 'https://docs.docker.com/get-started/', durationText: 'حدود ۵ ساعت مطالعه و تمرین (تخمینی)', durationKind: 'estimate', contentMinutes: 300, note: 'کانتینرها را فقط روی localhost یا شبکهٔ ایزولهٔ آزمایشگاه منتشر کن و هیچ برنامهٔ آسیب‌پذیر را روی اینترنت باز نگذار.' },
    videos: [{"title": "Docker – Get Started", "author": "Docker Docs Team", "status": "review", "url": "https://www.youtube.com/playlist?list=PLy7NrYWoggjzfAHlUusx2wuDwfCrmJYcs"}],
    studyHours: 6, practiceHours: 14,
    practice: 'یک برنامهٔ آموزشی آسیب‌پذیر مثل OWASP Juice Shop را با Docker فقط روی localhost اجرا کن، متوقف و پاک کن و یک فایل Compose ساده برای آن بنویس.',
    gate: 'تفاوت image و container را توضیح بده، یک برنامهٔ آزمایشی را با Docker فقط روی localhost اجرا و کامل حذف کن و بگو چرا نباید پورت آن را عمومی کنی.',
    lessons: ['image، container و دستورات پایه', 'پورت، volume و شبکهٔ Docker', 'Compose و اجرای امن برنامه‌های آزمایشگاهی']
  },
  {
    id: 'bandit', stage: 'سیستم‌ها و برنامه‌نویسی', number: 8, title: 'تمرین عملی Linux با OverTheWire Bandit',
    level: 'مبتدی تا متوسط', priority: 'حیاتی', prerequisites: ['linux'], months: 'حدود ۲ هفته',
    summary: 'با حل مرحله‌به‌مرحلهٔ بازی Bandit، فرمان‌های Linux، SSH، مجوزها، جست‌وجوی فایل، فشرده‌سازی، شبکه و Bash را در عمل تمرین می‌کنی.',
    why: 'این اولین تمرین پیوستهٔ کاربردی است و مهارت خط فرمان را که در همهٔ فصل‌های بعد لازم است عمیق می‌کند.',
    source: { title: 'OverTheWire: Bandit', instructor: 'OverTheWire Community', publisher: 'OverTheWire', url: 'https://overthewire.org/wargames/bandit/', durationText: 'حدود ۸ ساعت حل مراحل (تخمینی)', durationKind: 'estimate', contentMinutes: 480, note: 'فقط روی سرور رسمی Bandit تمرین کن که برای همین کار ساخته شده است. اول خودت تلاش کن و بعد سراغ ویدیوی راه‌حل برو.' },
    videos: [{"title": "OverTheWire: Bandit", "author": "OverTheWire Community", "status": "review", "url": "https://www.youtube.com/playlist?list=PLqyUgadpThTJieczMHSsY2eRImQgecBRL"}],
    studyHours: 5, practiceHours: 15,
    practice: 'مراحل ۰ تا ۱۰ را بدون راه‌حل آماده حل کن و برای هر مرحله فرمان‌ها و دلیل کارکردشان را یادداشت کن؛ سپس تا مرحلهٔ ۲۵ ادامه بده.',
    gate: 'حداقل ۲۵ مرحله را حل کن و برای ۵ مرحله دقیق توضیح بده هر فرمان چه کرد و چرا کار کرد.',
    lessons: ['SSH و کار با فایل‌ها (مراحل ۰ تا ۱۰)', 'جست‌وجو، فشرده‌سازی و pipe (مراحل ۱۱ تا ۲۰)', 'شبکه، cron و Bash (مراحل ۲۱ تا ۳۰)']
  },
  {
    id: 'python', stage: 'سیستم‌ها و برنامه‌نویسی', number: 9, title: 'Python برای اتوماسیون و تحلیل',
    level: 'مبتدی تا متوسط', priority: 'حیاتی', prerequisites: ['foundations'], months: 'حدود ۶ تا ۷ هفته',
    summary: 'متغیر، شرط، حلقه، تابع، ساختار داده، فایل، استثنا، ماژول، تست و خواندن داده را تمرین می‌کنی.',
    why: 'Python برای خودکارسازی کارهای تکراری، پردازش log و ساخت ابزارهای کوچک تحلیل دفاعی مناسب است.',
    source: { title: 'CS50’s Introduction to Programming with Python', instructor: 'David J. Malan', publisher: 'Harvard University · OpenCourseWare', url: 'https://cs50.harvard.edu/python/', durationText: '۹ هفته و ۳ تا ۹ ساعت کار هفتگی طبق Harvard؛ ۹ ساعت محتوای منتخب تخمینی', durationKind: 'estimate', contentMinutes: 540, note: 'رایگان در OpenCourseWare؛ transcript انگلیسی و مناسب افراد بدون پیش‌زمینه.' },
    videos: [{"title": "Python Full Course for Beginners", "author": "Programming with Mosh", "status": "supplied", "url": "https://www.youtube.com/watch?v=K5KVEU3aaeQ"}, {"title": "CS50’s Introduction to Programming with Python", "author": "David J. Malan", "status": "review", "url": "https://www.youtube.com/playlist?list=PLhQjrBD2T3817j24-GogXmWqO5Q5vYy0V", "optional": true}],
    practiceNow: [{"platform": "تمرین محلی", "name": "خواندن فایل لاگ ساختگی", "url": "", "tasks": "—", "teaches": "خواندن فایل، حلقه و شمارش با Python", "do": "یک فایل متنی لاگ ساختگی بساز و اسکریپتی بنویس که تعداد خطاهای هر نوع را چاپ کند.", "prereq": "ندارد", "time": "حدود ۱ ساعت", "access": "رایگان", "challenge": "اسکریپت را طوری تغییر بده که ۵ پرتکرارترین پیام را نشان دهد.", "done": "اسکریپت بدون خطا اجرا می‌شود و خروجی را توضیح می‌دهی.", "tool": "Python", "local": true}],
    studyHours: 21, practiceHours: 49,
    practice: 'ابزاری آفلاین بساز که فایل log نمونه را بخواند، رخدادها را بشمارد و خلاصهٔ CSV/JSON تولید کند؛ ورودی را اعتبارسنجی و کد را تست کن.',
    gate: 'برنامه‌ای چندفایلی با تابع، کلاس ساده، مدیریت خطا، خواندن فایل و تست بنویس و منطق آن را توضیح بده.',
    lessons: ['متغیرها، شرط‌ها، حلقه‌ها و توابع', 'ساختار داده، فایل، exception و ماژول', 'تست، regex، کلاس و پروژهٔ کوچک']
  },
  {
    id: 'powershell-scripting', stage: 'سیستم‌ها و برنامه‌نویسی', number: 10, title: 'PowerShell برای اتوماسیون در Windows',
    level: 'مبتدی تا متوسط', priority: 'مهم', prerequisites: ['windows', 'python'], months: 'حدود ۲ هفته',
    summary: 'cmdlet، pipeline، شیء‌ها، فیلتر کردن، اسکریپت‌نویسی ساده و خواندن لاگ‌ها و تنظیمات سیستم را با PowerShell تمرین می‌کنی.',
    why: 'PowerShell ابزار اصلی مدیریت Windows و Active Directory و ابزار مهم Blue Team است؛ برای کار با لاگ و خودکارسازی ضروری است.',
    source: { title: 'Get started with Windows PowerShell', instructor: 'Microsoft Learn', publisher: 'Microsoft', url: 'https://learn.microsoft.com/en-us/training/paths/get-started-windows-powershell/', secondaryUrl: 'https://learn.microsoft.com/en-us/powershell/scripting/learn/ps101/00-introduction', secondaryTitle: 'PowerShell 101', durationText: 'حدود ۶ ساعت مطالعه و ویدیو (تخمینی)', durationKind: 'estimate', contentMinutes: 360, note: 'اسکریپت‌ها را فقط روی سیستم خودت یا VM اجرا کن و کد ناشناس را هرگز اجرا نکن.' },
    videos: [{"title": "PowerShell for Beginners", "author": "Microsoft Learn", "status": "official", "url": "https://learn.microsoft.com/en-us/shows/mvp-windows-and-devices-for-it/powershell-beginners"}, {"title": "Intro to PowerShell in Under 30 Minutes", "author": "The Cyber Mentor", "status": "review", "url": "https://www.youtube.com/playlist?list=PLLKT__MCUeixqHJ1TRqrHsEd6_EdEvo47", "optional": true, "note": "در پلی‌لیست The Cyber Mentor پیدا کن؛ لینک تکی تأیید نشده"}],
    practiceNow: [{"platform": "تمرین محلی", "name": "PowerShell روی سیستم خودت", "url": "", "tasks": "—", "teaches": "cmdlet و pipeline", "do": "Get-Process | Sort-Object CPU -Descending | Select-Object -First 5 را اجرا کن و خروجی را در فایل متنی ذخیره کن.", "prereq": "ندارد", "time": "حدود ۱ ساعت", "access": "رایگان", "challenge": "لیست سرویس‌های در حال اجرا را در یک فایل CSV ذخیره کن.", "done": "با Get-Help یک cmdlet ناآشنا را یاد می‌گیری.", "tool": "PowerShell", "local": true}],
    studyHours: 8, practiceHours: 17,
    practice: 'یک اسکریپت بنویس که رویدادهای Security لاگ سیستم خودت را فیلتر کند، بر اساس شناسهٔ رویداد بشمارد و خلاصه را در یک فایل CSV ذخیره کند.',
    gate: 'با pipeline فرمان‌ها را ترکیب کن، خروجی را فیلتر و مرتب کن و یک اسکریپت کوچک با پارامتر و مدیریت خطا بنویس.',
    lessons: ['cmdlet، pipeline و شیء‌ها', 'فیلتر، مرتب‌سازی و خروجی گرفتن', 'اسکریپت، پارامتر و مدیریت خطا']
  },
  {
    id: 'c-memory', stage: 'سیستم‌ها و برنامه‌نویسی', number: 11, title: 'زبان C، اشاره‌گر و مدل حافظه',
    level: 'متوسط', priority: 'حیاتی', prerequisites: ['python'], months: 'حدود ۶ تا ۷ هفته',
    summary: 'کامپایل، نوع داده، آرایه، رشته، pointer، تخصیص حافظه، stack/heap و مدیریت حافظه را با برنامه‌های کوچک می‌فهمی.',
    why: 'برای فهم باینری، Assembly و تحلیل کد native باید بدانی C چگونه به حافظه و دستورهای ماشین نزدیک می‌شود.',
    source: { title: 'CS50x – Weeks 1–4: C, Arrays, Algorithms, Memory', instructor: 'David J. Malan', publisher: 'Harvard University · OpenCourseWare', url: 'https://cs50.harvard.edu/x/', durationText: 'حدود ۱۰ ساعت محتوای منتخب از مباحث C و حافظه (تخمینی)', durationKind: 'estimate', contentMinutes: 600, note: 'مباحث C، آرایه و حافظه؛ تمرین‌ها را با کدهای بی‌خطر خودت انجام بده.' },
    videos: [{"title": "CS50x – Weeks 1–4: C, Arrays, Algorithms, Memory", "author": "David J. Malan", "status": "review", "url": "https://www.youtube.com/playlist?list=PLhQjrBD2T381WAHyx1pq-sBfykqMBI7V4"}],
    studyHours: 21, practiceHours: 49,
    practice: 'برنامه‌های کوچک برای آرایه، رشته و struct بنویس؛ رفتار حافظه را با debugger مشاهده کن و طول ورودی را درست مدیریت کن.',
    gate: 'pointer و array را مقایسه کن، stack و heap را توضیح بده و مالکیت حافظه و طول ورودی را در یک برنامه رعایت کن.',
    lessons: ['C، کامپایلر، نوع‌ها و آرایه‌ها', 'Pointer، string و struct', 'Stack/heap، تخصیص حافظه و debugger']
  },
  {
    id: 'traffic', stage: 'سیستم‌ها و برنامه‌نویسی', number: 12, title: 'پروتکل‌ها و تحلیل بستهٔ شبکه',
    level: 'متوسط', priority: 'مهم', prerequisites: ['networking', 'windows', 'linux'], months: 'حدود ۳ هفته',
    summary: 'ساختار frame، packet و segment، handshake، DNS، HTTP، TLS و تفاوت دادهٔ رمز‌شده و قابل مشاهده را با Wireshark بررسی می‌کنی.',
    why: 'تحلیل بسته کمک می‌کند رفتار شبکه را با شواهد ببینی، نه اینکه صرفاً به حدس یا هشدار ابزارها تکیه کنی.',
    source: { title: 'Wireshark User’s Guide', instructor: 'Wireshark Foundation contributors', publisher: 'Wireshark', url: 'https://www.wireshark.org/docs/wsug_html_chunked/', secondaryUrl: 'https://wiki.wireshark.org/SampleCaptures', secondaryTitle: 'فایل‌های capture نمونه', durationText: 'حدود ۴ ساعت برای بخش‌های مقدماتی و نمونه‌ها (تخمینی)', durationKind: 'estimate', contentMinutes: 240, note: 'فقط فایل نمونه و ترافیک دستگاه خودت را تحلیل کن؛ ترافیک دیگران را ضبط نکن.' },
    videos: [{"title": "Learn Wireshark! Tutorial for Beginners", "author": "Chris Greer", "status": "supplied", "url": "https://www.youtube.com/watch?v=OU-A2EmVrKQ"}],
    practiceNow: [{"platform": "TryHackMe", "name": "Wireshark 101", "url": "https://tryhackme.com/room/wireshark", "tasks": "Tasks 3 و 5–13: Overview، Filtering، Packet Dissection، ARP، ICMP، TCP، DNS، HTTP، HTTPS، Exploit PCAPs", "teaches": "خواندن ترافیک", "do": "Taskها را به ترتیب انجام بده.", "prereq": "networking", "time": "حدود ۶۰ دقیقه", "access": "Premium (طبق صفحهٔ اتاق)؛ با حساب رایگان قفل است", "challenge": "روی یک PCAP یک فیلتر dns و یکی http بنویس.", "done": "می‌توانی یک جریان TCP را دنبال کنی.", "tool": "Wireshark"}, {"platform": "Wireshark", "name": "Sample Captures (ویکی رسمی)", "url": "https://wiki.wireshark.org/SampleCaptures", "tasks": "یک فایل مبتدی (مثلاً DNS یا HTTP) را باز کن", "teaches": "همان مهارت با فایل‌های رایگان", "do": "ده پروتکل/میزبان اصلی را فهرست کن و خلاصهٔ ده‌خطی بنویس.", "prereq": "networking", "time": "حدود ۱ ساعت", "access": "رایگان", "challenge": "سه بستهٔ مشکوک را با دلیل علامت بزن.", "done": "خلاصهٔ ده‌خطی از یک PCAP نوشته‌ای.", "tool": "Wireshark", "local": true}],
    studyHours: 12, practiceHours: 28,
    practice: 'چند pcap نمونه را باز کن و برای DNS، TCP و TLS گزارشی از مبدأ/مقصد، زمان و نوع پروتکل بساز؛ payload خصوصی را منتشر نکن.',
    gate: 'packet و flow را تفکیک کن، یک DNS lookup را در capture نمونه پیدا کن و حدود دیدپذیری TLS را توضیح بده.',
    lessons: ['Ethernet، IP، TCP و UDP در capture', 'DNS، HTTP و TLS در سطح مشاهده', 'فیلترهای نمایشی و گزارش ترافیک']
  },
  {
    id: 'security-principles', stage: 'امنیت و کاربرد', number: 13, title: 'اصول دفاع، ریسک و چارچوب امنیت',
    level: 'متوسط', priority: 'مهم', prerequisites: ['security-intro', 'traffic'], months: 'حدود ۲ هفته',
    summary: 'مدیریت دارایی، کنترل دسترسی، به‌روزرسانی، پشتیبان‌گیری، ثبت رویداد، مدیریت ریسک و NIST CSF 2.0 را درک می‌کنی.',
    why: 'امنیت فقط پیدا کردن نقص نیست؛ اولویت‌بندی ریسک و پیشنهاد کنترل متناسب، مهارت کلیدی تحلیل‌گر دفاعی است.',
    source: { title: 'NIST Cybersecurity Framework 2.0', instructor: 'NIST', publisher: 'National Institute of Standards and Technology', url: 'https://www.nist.gov/cyberframework', durationText: 'حدود ۳ ساعت مطالعهٔ مقدماتی (تخمینی)', durationKind: 'estimate', contentMinutes: 180, note: 'چارچوب را برای دسته‌بندی و گفت‌وگوی ریسک به کار ببر. ویدیوی NIST دربارهٔ CSF 2.0 است، نه آموزش CIA.' },
    videos: [{"title": "NIST Cybersecurity Framework (CSF) 2.0", "author": "NIST", "status": "official", "url": "https://www.nist.gov/video/nist-cybersecurity-framework-csf-20-0", "note": "این ویدیو دربارهٔ NIST CSF 2.0 است، نه آموزش سه‌گانهٔ CIA."}],
    studyHours: 10, practiceHours: 20,
    practice: 'برای لپ‌تاپ شخصی فهرست دارایی و تهدیدهای محتمل بساز و برای هر ریسک یک کنترل پیشگیرانه یا کشف‌کننده پیشنهاد بده.',
    gate: 'توابع Govern، Identify، Protect، Detect، Respond و Recover را با مثال توضیح بده و برای یک ریسک کنترل قابل سنجش پیشنهاد کن.',
    lessons: ['مدیریت دارایی و مدل‌سازی ریسک', 'کنترل دسترسی، پشتیبان‌گیری و به‌روزرسانی', 'NIST CSF 2.0 و پاسخ به رخداد']
  },
  {
    id: 'security-plus', stage: 'امنیت و کاربرد', number: 14, title: 'پوشش کامل مفاهیم امنیت با دورهٔ Security+',
    level: 'مبتدی تا متوسط', priority: 'مهم', prerequisites: ['security-intro', 'networking'], months: 'حدود ۲ هفته',
    summary: 'کنترل‌های امنیتی، تهدیدها، رمزنگاری، هویت و دسترسی، امنیت شبکه، پاسخ به رخداد و مدیریت ریسک را در ویدیوهای کوتاه و منظم مرور می‌کنی.',
    why: 'واژگان و ساختار فکری مشترک صنعت را می‌دهد و خلأهای نظری را پر می‌کند؛ می‌توانی آن را هم‌زمان با فصل‌های عملی ببینی.',
    source: { title: 'CompTIA Security+ SY0-701 – Study Resources', instructor: 'Professor Messer', publisher: 'professormesser.com', url: 'https://www.professormesser.com/sy0-701-certification-course/', durationText: 'حدود ۲۵ ساعت ویدیو (تخمینی)', durationKind: 'estimate', contentMinutes: 1500, note: 'ویدیوهای دوره رایگان‌اند. آزمون رسمی پولی است و لازم نیست آن را بدهی؛ هدف فقط یادگیری مفاهیم است.' },
    videos: [{"title": "CompTIA Security+ SY0-701 – Study Resources", "author": "Professor Messer", "status": "review", "url": "https://www.youtube.com/playlist?list=PLG49S3nxzAnl4QDVqK-hOnoqcSKEIDDuv"}],
    studyHours: 17, practiceHours: 8,
    practice: 'برای هر دامنهٔ اصلی دوره یک کارت خلاصه بنویس و ۱۰ پرسش برای خودت طراحی کن؛ سه مفهوم را در آزمایشگاه خودت مشاهده کن.',
    gate: 'برای هر دامنهٔ اصلی چند مفهوم کلیدی را بدون یادداشت توضیح بده و تفاوت کنترل‌های پیشگیرانه، کشف‌کننده و اصلاحی را با مثال بگو.',
    lessons: ['مفاهیم عمومی، تهدیدها و آسیب‌پذیری‌ها', 'معماری، شبکه، رمزنگاری و هویت', 'عملیات امنیتی، پاسخ به رخداد و حاکمیت']
  },
  {
    id: 'human-security', stage: 'امنیت و کاربرد', number: 15, title: 'امنیت انسانی و تشخیص مهندسی اجتماعی',
    level: 'مبتدی تا متوسط', priority: 'مهم', prerequisites: ['security-intro'], months: 'حدود ۲ هفته',
    summary: 'نشانه‌های فیشینگ، جعل هویت، فوریت ساختگی، درخواست اطلاعات حساس و روش گزارش و راستی‌آزمایی مستقل را یاد می‌گیری.',
    why: 'بخش بزرگی از دفاع به تصمیم‌های انسانی وابسته است؛ هدف محافظت و آگاهی‌بخشی است، نه شبیه‌سازی فریب افراد.',
    source: { title: 'How To Recognize and Avoid Phishing Scams', instructor: 'Federal Trade Commission', publisher: 'FTC · Consumer Advice', url: 'https://consumer.ftc.gov/articles/how-recognize-avoid-phishing-scams', secondaryUrl: 'https://www.cisa.gov/secure-our-world', secondaryTitle: 'CISA Secure Our World', durationText: 'حدود ۲ ساعت مطالعه و تمرین تشخیص پیام (تخمینی)', durationKind: 'estimate', contentMinutes: 120, note: 'تمرین فقط با نمونه‌های ساختگی؛ هیچ پیام فریبنده‌ای برای شخص واقعی ارسال نکن.' },
    videos: [{"title": "How To Recognize and Avoid Phishing Scams", "author": "Federal Trade Commission", "status": "review", "url": "https://www.youtube.com/watch?v=9SD6DRCKZFU"}],
    studyHours: 7, practiceHours: 13,
    practice: '۱۰ پیام ساختگی بی‌خطر را با معیار فرستنده، دامنه، فوریت، درخواست داده و کانال راستی‌آزمایی ارزیابی کن.',
    gate: 'نشانه‌های مشکوک را بدون کلیک روی لینک تشخیص بده و بررسی مستقل، گزارش و حذف را توضیح بده.',
    lessons: ['نشانه‌های فیشینگ و جعل هویت', 'راستی‌آزمایی چندکاناله و گزارش امن', 'رمز عبور یکتا، MFA و حریم خصوصی']
  },
  {
    id: 'web-foundations', stage: 'امنیت و کاربرد', number: 16, title: 'مبانی وب، HTTP و مرورگر',
    level: 'متوسط', priority: 'حیاتی', prerequisites: ['python', 'networking'], months: 'حدود ۴ تا ۵ هفته',
    summary: 'چرخهٔ درخواست/پاسخ، متدها، status code، header، cookie، session، same-origin، HTML، JavaScript و API را یاد می‌گیری.',
    why: 'برای فهم آسیب‌پذیری وب باید سازوکار عادی مرورگر، سرور و نشست کاربر را بشناسی.',
    source: { title: 'An overview of HTTP', instructor: 'MDN Contributors', publisher: 'Mozilla Developer Network', url: 'https://developer.mozilla.org/en-US/docs/Web/HTTP/Guides/Overview', durationText: 'حدود ۳ ساعت مطالعه و مثال محلی (تخمینی)', durationKind: 'estimate', contentMinutes: 180, note: 'صفحهٔ انگلیسی و مناسب مطالعهٔ موضوعی است.' },
    videos: [{"title": "An overview of HTTP", "author": "MDN Contributors", "status": "review", "url": "https://www.youtube.com/playlist?list=PLQnljOFTspQU6zO0drAYHFtkkyfNJw1IO"}],
    studyHours: 18, practiceHours: 32,
    practice: 'یک صفحهٔ محلی ساده و API ساختگی طراحی کن؛ درخواست و پاسخ را در DevTools مشاهده و اجزای آن را مستند کن.',
    gate: 'یک HTTP request/response را بخوان و نقش cookie، session، header، status code و same-origin را توضیح بده.',
    lessons: ['چرخهٔ HTTP، URL، method و status code', 'Cookie، session، origin و browser storage', 'HTML، JavaScript و API پایه']
  },
  {
    id: 'sql-databases', stage: 'امنیت و کاربرد', number: 17, title: 'مبانی SQL و دیتابیس',
    level: 'مبتدی تا متوسط', priority: 'مهم', prerequisites: ['python', 'web-foundations'], months: 'حدود ۱ هفته',
    summary: 'جدول، کلید، SELECT، JOIN، فیلتر و تجمیع را در SQL تمرین می‌کنی تا بعداً سازوکار SQL Injection را درست بفهمی.',
    why: 'فهم آسیب‌پذیری‌های تزریق بدون دانستن اینکه برنامه با دیتابیس چگونه ارتباط می‌گیرد ممکن نیست.',
    source: { title: 'SQLBolt – Learn SQL', instructor: 'SQLBolt', publisher: 'SQLBolt', url: 'https://sqlbolt.com/', secondaryUrl: 'https://portswigger.net/web-security/sql-injection', secondaryTitle: 'SQL injection – PortSwigger (مطالعهٔ مفهومی)', durationText: 'حدود ۵ ساعت تمرین تعاملی (تخمینی)', durationKind: 'estimate', contentMinutes: 300, note: 'دروس تعاملی و رایگان‌اند. بخش SQL injection را فقط در labهای مجاز PortSwigger دنبال کن.' },
    videos: [{"title": "SQL Tutorial for Beginners", "author": "Kevin Stratvert", "status": "supplied", "url": "https://www.youtube.com/watch?v=h0nxCDiD-zg"}],
    practiceNow: [{"platform": "SQLBolt", "name": "SQLBolt – درس‌های تعاملی", "url": "https://sqlbolt.com/", "tasks": "درس‌های ابتدایی SELECT، WHERE، JOIN", "teaches": "پرس‌وجوی پایگاه‌داده", "do": "درس‌ها را به ترتیب انجام بده و جواب هر تمرین را خودت بنویس.", "prereq": "ندارد", "time": "حدود ۳ ساعت (تخمینی)", "access": "رایگان (طبق شناخت عمومی؛ تأیید نشده)", "challenge": "برای یک جدول نمونهٔ خودت سه پرس‌وجوی مختلف بنویس.", "done": "می‌توانی با JOIN دو جدول را ترکیب کنی.", "tool": "SQL"}],
    studyHours: 6, practiceHours: 9,
    practice: 'در یک دیتابیس SQLite محلی دو جدول با دادهٔ ساختگی بساز و رفتار پرس‌وجوی پارامتری و غیرپارامتری را در برنامهٔ کوچک خودت مقایسه کن.',
    gate: 'یک پرس‌وجوی JOIN و تجمیع بنویس و توضیح بده چرا پرس‌وجوی پارامتری جلوی تزریق را می‌گیرد.',
    lessons: ['SELECT، فیلتر و مرتب‌سازی', 'JOIN، تجمیع و طراحی جدول', 'پرس‌وجوی پارامتری و ایمنی ورودی']
  },
  {
    id: 'web-security', stage: 'امنیت و کاربرد', number: 18, title: 'مبانی امنیت وب در آزمایشگاه مجاز',
    level: 'متوسط', priority: 'حیاتی', prerequisites: ['web-foundations', 'security-principles'], months: 'حدود ۵ تا ۶ هفته',
    summary: 'خطاهای رایج در احراز هویت، کنترل دسترسی، ورودی، پیکربندی، نشست و اعتبارسنجی را می‌شناسی و اصلاح آن‌ها را تحلیل می‌کنی.',
    why: 'این فصل پل میان مفاهیم وب و تحقیق آسیب‌پذیری است؛ تمرین فقط در آزمایشگاه‌های آموزشی انجام می‌شود.',
    source: { title: 'Web Security Academy – Getting started & Learning Paths', instructor: 'PortSwigger Research Team', publisher: 'PortSwigger', url: 'https://portswigger.net/web-security/getting-started', secondaryUrl: 'https://top10.owasp.org/', secondaryTitle: 'OWASP Top 10:2025', durationText: '۹ ساعت محتوای مقدماتی منتخب (تخمینی؛ مسیر کل زمان ثابت ندارد)', durationKind: 'estimate', contentMinutes: 540, note: 'فقط labهای خود Academy یا برنامهٔ محلی؛ دامنه یا حساب واقعی را آزمایش نکن.' },
    videos: [{"title": "Beginner Web Application Hacking (Full Course)", "author": "The Cyber Mentor", "status": "review", "url": "https://www.youtube.com/playlist?list=PLLKT__MCUeixqHJ1TRqrHsEd6_EdEvo47", "optional": true, "note": "در پلی‌لیست The Cyber Mentor پیدا کن؛ لینک تکی تأیید نشده"}],
    practiceNow: [{"platform": "PortSwigger", "name": "Web Security Academy – Getting started", "url": "https://portswigger.net/web-security/getting-started", "tasks": "نام دقیق lab را در صفحه انتخاب کن (تأیید نشده)", "teaches": "XSS، SQLi و احراز هویت", "do": "labهای مبتدی را به ترتیب انجام بده.", "prereq": "web-foundations", "time": "چند ساعت (تخمینی)", "access": "رایگان (طبق شناخت عمومی؛ تأیید نشده)", "challenge": "برای هر lab یک کارت «علت، نشانه، اصلاح» بنویس.", "done": "یک آسیب‌پذیری وب را با زبان خودت توضیح می‌دهی.", "tool": "Burp Suite"}],
    studyHours: 18, practiceHours: 37,
    practice: 'برای یک سناریوی آموزشی، علت ریشه‌ای، اثر، شواهد غیرحساس و راهکار اصلاح را در قالب یادداشت دفاعی بنویس.',
    gate: 'برای چند دستهٔ رایج توضیح بده چه فرضی در طراحی شکسته شده و چگونه کنترل دسترسی، اعتبارسنجی و تنظیم امن آن را اصلاح می‌کند.',
    lessons: ['نقشهٔ مفاهیم وب و OWASP Top 10:2025', 'احراز هویت، نشست و کنترل دسترسی', 'تحلیل lab مقدماتی و راهکار اصلاح']
  },
  {
    id: 'crypto', stage: 'امنیت و کاربرد', number: 19, title: 'مبانی رمزنگاری کاربردی',
    level: 'متوسط', priority: 'مهم', prerequisites: ['python', 'security-principles'], months: 'حدود ۲ هفته',
    summary: 'XOR، رمزنگاری متقارن و نامتقارن، RSA، hash، امضای دیجیتال و خطاهای رایج استفاده از آن‌ها را با چالش‌های رایگان تمرین می‌کنی.',
    why: 'TLS، ذخیرهٔ رمز عبور و امضای کد بر رمزنگاری بنا شده‌اند؛ باید بدانی هر روش چه چیزی را تضمین می‌کند و چه چیزی را نه.',
    source: { title: 'CryptoHack – Introduction Course', instructor: 'CryptoHack Team', publisher: 'CryptoHack', url: 'https://cryptohack.org/courses/intro/course_details/', secondaryUrl: 'https://cryptohack.org/challenges/introduction/', secondaryTitle: 'چالش‌های مقدماتی CryptoHack', durationText: 'حدود ۸ ساعت دوره و چالش مقدماتی (تخمینی)', durationKind: 'estimate', contentMinutes: 480, note: '' },
    videos: [{"title": "CryptoHack – Introduction Course", "author": "CryptoHack Team", "status": "review", "url": "https://www.youtube.com/watch?v=JD72Ry60eP4"}],
    studyHours: 9, practiceHours: 16,
    practice: 'دورهٔ مقدماتی و چالش‌های آن را حل کن؛ برای هر مفهوم یک اسکریپت کوچک Python بنویس و بگو چرا استفادهٔ نادرست از آن ناامن است.',
    gate: 'تفاوت encoding، hashing و encryption را توضیح بده، جریان RSA ساده را روی کاغذ بنویس و دو خطای رایج استفاده از رمزنگاری را نام ببر.',
    lessons: ['Encoding، XOR و رمزنگاری متقارن', 'Hash، MAC و امضای دیجیتال', 'RSA و رمزنگاری کلید عمومی']
  },
  {
    id: 'secure-coding', stage: 'امنیت و کاربرد', number: 20, title: 'برنامه‌نویسی امن و بازبینی کد',
    level: 'متوسط', priority: 'مهم', prerequisites: ['c-memory', 'web-foundations'], months: 'حدود ۳ هفته',
    summary: 'اعتبارسنجی ورودی، اصل کمترین امتیاز، مدیریت خطا، رمزنگاری صحیح، مدیریت وابستگی و بازبینی کد را تمرین می‌کنی.',
    why: 'تحلیل‌گر خوب فقط مشکل را نام نمی‌برد؛ می‌تواند توضیح دهد چگونه از تکرار آن جلوگیری شود.',
    source: { title: 'OWASP Developer Guide – Foundations & Secure Development', instructor: 'OWASP Contributors', publisher: 'OWASP Foundation', url: 'https://devguide.owasp.org/en/', secondaryUrl: 'https://owasp.org/projects/secure-coding-practices-quick-reference-guide', secondaryTitle: 'Secure Coding Practices Quick Reference', durationText: 'حدود ۴ ساعت مطالعهٔ بخش‌های انتخابی (تخمینی)', durationKind: 'estimate', contentMinutes: 240, note: 'برای مطالب جاری، Developer Guide اولویت دارد.' },
    studyHours: 13, practiceHours: 27,
    practice: 'برنامهٔ کوچک خودت را با چک‌لیست OWASP از نظر ورودی، خطا، مجوز و وابستگی‌ها بازبینی و اصلاح کن.',
    gate: 'حداقل پنج ریسک طراحی/کدنویسی را شناسایی، پیامدشان را توضیح و اصلاح قابل‌تست پیشنهاد کن.',
    lessons: ['اعتبارسنجی ورودی و مدیریت خطا', 'کنترل دسترسی، secret و اصل کمترین امتیاز', 'بازبینی وابستگی و کد امن']
  },
  {
    id: 'vulnerability-research', stage: 'امنیت و کاربرد', number: 21, title: 'تحلیل آسیب‌پذیری و گزارش مسئولانه',
    level: 'متوسط تا پیشرفته', priority: 'حیاتی', prerequisites: ['web-security', 'secure-coding'], months: 'حدود ۵ تا ۶ هفته',
    summary: 'نشانهٔ نقص را از علت ریشه‌ای جدا می‌کنی، اثر را در محدودهٔ محلی تبیین و گزارش اصلاح‌محور می‌نویسی.',
    why: 'تحقیق حرفه‌ای بر شواهد، محدودهٔ مجاز، شدت‌سنجی، اصلاح و افشای مسئولانه تکیه دارد.',
    source: { title: 'Pwning OWASP Juice Shop – Official Companion Guide', instructor: 'Bjoern Kimminich & OWASP contributors', publisher: 'OWASP Foundation', url: 'https://pwning.owasp-juice.shop/', secondaryUrl: 'https://owasp.org/www-project-juice-shop/', secondaryTitle: 'معرفی OWASP Juice Shop و آزمایشگاه محلی', durationText: 'حدود ۵ ساعت مباحث مقدماتی و گزارش‌نویسی (تخمینی)', durationKind: 'estimate', contentMinutes: 300, note: 'فقط محلی و جدا از داده‌های واقعی؛ علت و راهکار مهم‌تر از امتیاز چالش است.' },
    videos: [],
    studyHours: 13, practiceHours: 42,
    practice: 'در Juice Shop محلی یک مشکل آموزشی مقدماتی را با شواهد بی‌خطر مستند کن؛ خلاصه، دامنه، اثر، راهکار و محدودیت‌ها را بنویس.',
    gate: 'گزارشی مسئولانه بنویس که scope، اثر، شواهد، شدت تقریبی و remediation را پوشش دهد و شامل دادهٔ شخصی یا سامانهٔ بیرونی نباشد.',
    lessons: ['طبقه‌بندی نقص، علت ریشه‌ای و اثر', 'تحلیل کنترل‌شده در برنامهٔ محلی', 'گزارش مسئولانه، شواهد و اصلاح']
  },
  {
    id: 'ctf-pico', stage: 'هک اخلاقی در آزمایشگاه مجاز', number: 22, title: 'شروع CTF با picoCTF',
    level: 'متوسط', priority: 'مهم', prerequisites: ['bandit', 'python'], months: 'حدود ۳ هفته',
    summary: 'چالش‌های General Skills، Web، Crypto، Forensics و Reverse را در پلتفرم آموزشی picoCTF حل می‌کنی و روش فکر کردن در CTF را یاد می‌گیری.',
    why: 'CTF محیط قانونی و ساخت‌یافته برای تمرین مداوم است و تنوع مهارت‌ها را در برابرت می‌گذارد.',
    source: { title: 'picoCTF – Getting Started & CTF Primer', instructor: 'Carnegie Mellon University', publisher: 'picoCTF', url: 'https://picoctf.org/get_started.html', secondaryUrl: 'https://primer.picoctf.com/', secondaryTitle: 'راهنمای CTF Primer', durationText: 'حدود ۱۰ ساعت راهنما و چالش مقدماتی (تخمینی)', durationKind: 'estimate', contentMinutes: 600, note: 'فقط چالش‌های رسمی پلتفرم.' },
    videos: [{"title": "picoCTF – Getting Started & CTF Primer", "author": "Carnegie Mellon University", "status": "review", "url": "https://www.youtube.com/watch?v=ZUqGSbvZp1k"}],
    studyHours: 7, practiceHours: 28,
    practice: 'با دسته‌های General Skills و Web شروع کن و برای هر چالش حل‌شده یک writeup کوتاه (ابزار، ایده، اشتباه‌ها) بنویس.',
    gate: '۲۰ چالش از دسته‌های مختلف حل کن و برای ۵ تا writeup بنویس که بدون نگاه به راه‌حل قابل تکرار باشد.',
    lessons: ['آشنایی با پلتفرم و General Skills', 'Web و Crypto در سطح مقدماتی', 'Forensics، Reverse و نوشتن writeup']
  },
  {
    id: 'burp-portswigger', stage: 'هک اخلاقی در آزمایشگاه مجاز', number: 23, title: 'Burp Suite و تمرین کامل Web Security Academy',
    level: 'متوسط تا پیشرفته', priority: 'حیاتی', prerequisites: ['web-security', 'home-lab'], months: 'حدود ۴ تا ۵ هفته',
    summary: 'Burp Suite Community، Proxy و Repeater را یاد می‌گیری و labهای Academy برای تزریق، XSS، CSRF، SSRF و کنترل دسترسی را مرحله‌به‌مرحله حل می‌کنی.',
    why: 'Burp ابزار استاندارد تست امنیت وب است و labهای Academy بهترین تمرین رایگان و کاملاً قانونی برای این مهارت‌اند.',
    source: { title: 'Burp Suite – Getting Started', instructor: 'PortSwigger', publisher: 'PortSwigger', url: 'https://portswigger.net/burp/documentation/desktop/getting-started', secondaryUrl: 'https://portswigger.net/web-security/all-materials', secondaryTitle: 'تمام مباحث و labهای Academy', durationText: 'حدود ۱۵ ساعت مطالعه و ویدیوی حل lab (تخمینی؛ زمان labها جداست)', durationKind: 'estimate', contentMinutes: 900, note: 'فقط labهای رسمی Academy. Burp را بدون مجوز مکتوب روی سایت واقعی به کار نبر.' },
    videos: [{"title": "Intercept HTTP requests", "author": "PortSwigger", "status": "supplied", "url": "https://www.youtube.com/watch?v=ouDe5sJ_uC8"}, {"title": "Burp Repeater introduction", "author": "PortSwigger", "status": "supplied", "url": "https://www.youtube.com/watch?v=_Wifm2g9ugg"}, {"title": "Official Burp Suite video tutorials", "author": "PortSwigger", "status": "official", "url": "https://portswigger.net/burp/pro/video-tutorials", "optional": true, "note": "بعضی ویدیوها امکانات Professional را نشان می‌دهند. Proxy/Intercept و Repeater در Community هست؛ Scanner و امکانات پیشرفته فقط Professional‌اند."}],
    practiceNow: [{"platform": "TryHackMe", "name": "Burp Suite: The Basics", "url": "https://tryhackme.com/room/burpsuitebasics", "tasks": "Tasks 5–13: Dashboard، Proxy، FoxyProxy، Site Map، Burp Browser، Scoping، HTTPS", "teaches": "Proxy و Intercept", "do": "دستورها را روی ماشین هدف خود اتاق انجام بده.", "prereq": "web-foundations", "time": "حدود ۶۰ دقیقه", "access": "Premium (طبق صفحهٔ اتاق)؛ با حساب رایگان قفل است", "challenge": "یک درخواست را intercept کن و پارامترش را در Repeater تغییر بده.", "done": "Proxy، Intercept و Repeater را توضیح می‌دهی.", "tool": "Burp Suite Community"}, {"platform": "PortSwigger", "name": "Web Security Academy – Getting started", "url": "https://portswigger.net/web-security/getting-started", "tasks": "نام دقیق lab را در صفحه انتخاب کن (تأیید نشده)", "teaches": "Burp روی lab مجاز", "do": "یک lab مقدماتی را با Burp Community حل کن.", "prereq": "web-foundations", "time": "حدود ۱ ساعت (تخمینی)", "access": "رایگان (طبق شناخت عمومی؛ تأیید نشده)", "challenge": "برای lab یک یادداشت «علت، نشانه، اصلاح» بنویس.", "done": "یک lab را بدون راهنما حل می‌کنی.", "tool": "Burp Suite"}],
    studyHours: 12, practiceHours: 38,
    practice: 'حداقل ۲۰ lab سطح Apprentice را حل کن و برای هر دسته (SQLi، XSS، کنترل دسترسی) یادداشت «علت، نشانه، اصلاح» بنویس.',
    gate: 'یک درخواست را در Burp رهگیری و ویرایش کن، ۲۰ lab را کامل کن و برای سه دسته علت ریشه‌ای و اصلاح را توضیح بده.',
    lessons: ['راه‌اندازی Burp، Proxy و Repeater', 'labهای SQLi، XSS و CSRF', 'labهای SSRF، کنترل دسترسی و جمع‌بندی']
  },
  {
    id: 'api-security', stage: 'هک اخلاقی در آزمایشگاه مجاز', number: 24, title: 'امنیت API در آزمایشگاه مجاز',
    level: 'متوسط تا پیشرفته', priority: 'مهم', prerequisites: ['burp-portswigger'], months: 'حدود ۳ هفته',
    summary: 'REST و GraphQL، احراز هویت توکنی، OWASP API Security Top 10 و labهای API Academy را یاد می‌گیری و برای هر خطا راه اصلاح می‌نویسی.',
    why: 'بیشتر برنامه‌های مدرن بر API بنا شده‌اند و خطاهای کنترل دسترسی در API از رایج‌ترین مشکلات امنیتی امروز است.',
    source: { title: 'API testing – Web Security Academy', instructor: 'PortSwigger', publisher: 'PortSwigger', url: 'https://portswigger.net/web-security/learning-paths/api-testing', secondaryUrl: 'https://owasp.org/API-Security/editions/2023/en/0x11-t10/', secondaryTitle: 'OWASP API Security Top 10 – 2023', durationText: 'حدود ۸ ساعت مطالعه و lab (تخمینی؛ زمان labها جداست)', durationKind: 'estimate', contentMinutes: 480, note: 'فقط labهای رسمی Academy یا API آزمایشگاهی خودت؛ هیچ API واقعی را بدون مجوز مکتوب آزمایش نکن.' },
    videos: [],
    studyHours: 10, practiceHours: 25,
    practice: 'labهای مسیر API testing را حل کن و برای هر دسته از OWASP API Top 10 یک کارت «علت، نشانه، اصلاح» بنویس.',
    gate: 'سه خطای رایج API را توضیح بده و برای هرکدام کنترل اصلاحی مثل اعتبارسنجی مالکیت شیء یا محدودیت نرخ پیشنهاد کن.',
    lessons: ['REST، GraphQL و احراز هویت API', 'OWASP API Security Top 10', 'labهای API و راه اصلاح']
  },
  {
    id: 'hacker101', stage: 'هک اخلاقی در آزمایشگاه مجاز', number: 25, title: 'Hacker101 و ورود مسئولانه به Bug Bounty',
    level: 'متوسط', priority: 'مهم', prerequisites: ['burp-portswigger'], months: 'حدود ۲ هفته',
    summary: 'درس‌های ویدیویی رایگان HackerOne دربارهٔ وب، قواعد برنامه‌های bug bounty، scope، گزارش و CTF مخصوص Hacker101 را دنبال می‌کنی.',
    why: 'مسیر قانونی تبدیل مهارت به پژوهش واقعی است؛ قاعدهٔ اصلی این است که فقط برنامه‌هایی را آزمایش کنی که صراحتاً scope و مجوز دارند.',
    source: { title: 'Hacker101', instructor: 'HackerOne', publisher: 'HackerOne', url: 'https://www.hacker101.com/', durationText: 'حدود ۱۰ ساعت ویدیو و تمرین (تخمینی)', durationKind: 'estimate', contentMinutes: 600, note: 'قبل از هر آزمایش، سیاست و scope برنامه را کامل بخوان؛ هر چیز خارج از scope غیرمجاز است.' },
    videos: [{"title": "Practical Bug Bounty", "author": "The Cyber Mentor", "status": "review", "url": "https://www.youtube.com/playlist?list=PLLKT__MCUeixqHJ1TRqrHsEd6_EdEvo47", "optional": true, "note": "در پلی‌لیست The Cyber Mentor پیدا کن؛ لینک تکی تأیید نشده"}],
    studyHours: 9, practiceHours: 11,
    practice: 'سیاست یک برنامهٔ عمومی را فقط بخوان (بدون آزمایش) و scope، قواعد و دسته‌بندی شدت را خلاصه کن؛ سپس CTF مخصوص Hacker101 را انجام بده.',
    gate: 'تفاوت in-scope و out-of-scope را با مثال توضیح بده و یک گزارش نمونه با شدت، اثر و راهکار بنویس.',
    lessons: ['قواعد، scope و اخلاق bug bounty', 'ویدیوهای وب و آسیب‌پذیری‌های رایج', 'CTF Hacker101 و گزارش‌نویسی']
  },
  {
    id: 'nmap-recon', stage: 'هک اخلاقی در آزمایشگاه مجاز', number: 26, title: 'شناسایی شبکه و اسکن با Nmap',
    level: 'متوسط', priority: 'حیاتی', prerequisites: ['traffic', 'home-lab'], months: 'حدود ۲ هفته',
    summary: 'کشف میزبان، اسکن پورت، تشخیص سرویس و نسخه، NSE و خواندن خروجی را روی ماشین‌های آزمایشگاه خودت تمرین می‌کنی.',
    why: 'هر ارزیابی امنیتی با شناسایی سطح حمله شروع می‌شود؛ تفسیر درست خروجی Nmap مهم‌تر از حفظ سوییچ‌هاست.',
    source: { title: 'Nmap Network Scanning – Official Guide', instructor: 'Gordon “Fyodor” Lyon', publisher: 'Nmap Project', url: 'https://nmap.org/book/', secondaryUrl: 'https://nmap.org/book/man.html', secondaryTitle: 'Nmap Reference Guide', durationText: 'حدود ۷ ساعت مطالعهٔ بخش‌های انتخابی (تخمینی)', durationKind: 'estimate', contentMinutes: 420, note: 'فقط ماشین‌های آزمایشگاه خودت یا اهداف دارای مجوز را اسکن کن.' },
    videos: [{"title": "Nmap Tutorial for Beginners", "author": "(ارائه‌شده توسط کاربر)", "status": "supplied", "url": "https://www.youtube.com/watch?v=40j6Ptqu_fM"}, {"title": "Ethical Hacking in 15 Hours – 2023 Edition", "author": "The Cyber Mentor", "status": "review", "url": "https://www.youtube.com/playlist?list=PLLKT__MCUeixqHJ1TRqrHsEd6_EdEvo47", "optional": true, "note": "در پلی‌لیست The Cyber Mentor پیدا کن؛ لینک تکی تأیید نشده"}],
    practiceNow: [{"platform": "TryHackMe", "name": "Nmap: The Basics", "url": "https://tryhackme.com/room/nmap", "tasks": "Tasks 2–6: Host Discovery، Port Scanning، Version Detection، Timing، Output", "teaches": "کشف میزبان، پورت و سرویس", "do": "هر Task را بخوان و دستورها را روی ماشین خود اتاق اجرا کن.", "prereq": "networking", "time": "حدود ۶۰ دقیقه", "access": "Premium (طبق صفحهٔ اتاق)؛ با حساب رایگان قفل است", "challenge": "سه سناریوی اسکن مختلف را در جدول مقایسه کن.", "done": "تفاوت اسکن host discovery و port scan را توضیح می‌دهی.", "tool": "Nmap — کشف میزبان و سرویس"}, {"platform": "تمرین محلی", "name": "اسکن VM خودت", "url": "", "tasks": "—", "teaches": "همان مهارت بدون اشتراک", "do": "فقط روی VM آزمایشی خودت دستورهای nmap را اجرا کن؛ هیچ سیستم دیگری را اسکن نکن.", "prereq": "home-lab", "time": "حدود ۱ ساعت", "access": "رایگان", "challenge": "خروجی را ذخیره کن و سرویس‌های باز را بشمار.", "done": "فقط روی هدف مجاز اسکن کردی و خروجی را توضیح می‌دهی.", "tool": "Nmap", "local": true}],
    studyHours: 7, practiceHours: 13,
    practice: 'در شبکهٔ ایزولهٔ آزمایشگاه، یک ماشین هدف خودت را اسکن کن و خروجی را به جدول «پورت، سرویس، نسخه، ریسک احتمالی» تبدیل کن.',
    gate: 'تفاوت اسکن TCP connect و SYN را توضیح بده، یک خروجی Nmap را تفسیر کن و دامنهٔ مجاز اسکن را پیش از شروع بنویس.',
    lessons: ['کشف میزبان و اسکن پورت', 'تشخیص سرویس و نسخه و NSE', 'تفسیر خروجی و مستندسازی']
  },
  {
    id: 'wifi-security', stage: 'هک اخلاقی در آزمایشگاه مجاز', number: 27, title: 'امنیت Wi-Fi در شبکهٔ خودت',
    level: 'متوسط', priority: 'مهم', prerequisites: ['networking', 'nmap-recon', 'home-lab'], months: 'حدود ۲ هفته',
    summary: 'WPA2 و WPA3، تنظیمات روتر، رمز مدیریت، WPS و به‌روزرسانی را می‌شناسی و امنیت شبکهٔ بی‌سیم خودت را ارزیابی و سخت‌سازی می‌کنی.',
    why: 'شبکهٔ بی‌سیم خانگی و سازمانی نقطهٔ ورود رایج است؛ دانستن ضعف‌ها به تو کمک می‌کند تنظیمات درست را اعمال کنی.',
    source: { title: "Best Practices for Securing Your Home Network", instructor: "NSA (National Security Agency)", publisher: "NSA", url: "https://media.defense.gov/2023/Feb/22/2003165170/-1/-1/0/CSI_BEST_PRACTICES_FOR_SECURING_YOUR_HOME_NETWORK.PDF", durationText: "حدود ۲ ساعت مطالعه و تنظیم روتر (تخمینی)", durationKind: 'estimate', contentMinutes: 120, note: "این فصل فقط دربارهٔ امن‌سازی شبکهٔ خودت است؛ هیچ تمرین دسترسی غیرمجاز به شبکه‌ای که مال تو نیست وجود ندارد. ویدیوی تأییدشده‌ای هنوز ثبت نشده." },
    videos: [{"title": "Aircrack-ng – Getting Started", "author": "Aircrack-ng Team", "status": "review", "url": "https://www.youtube.com/watch?v=KaqKoKNEKnE"}],
    practiceNow: [{"platform": "تمرین محلی", "name": "بازبینی امنیت روتر خودت", "url": "", "tasks": "—", "teaches": "WPA2/WPA3، WPS، رمز مدیریت و به‌روزرسانی", "do": "وارد صفحهٔ مدیریت روتر خودت شو و نوع رمزنگاری، WPS، رمز مدیریت و نسخهٔ firmware را بررسی کن.", "prereq": "networking", "time": "حدود ۱ ساعت", "access": "رایگان", "challenge": "گزارش یک‌صفحه‌ای با پنج تنظیم امن‌سازی و دلیل هر کدام بنویس.", "done": "روتر خودت را بدون ابزار حمله ارزیابی و سخت‌سازی کرده‌ای.", "tool": "صفحهٔ مدیریت روتر", "local": true}],
    studyHours: 8, practiceHours: 17,
    practice: 'تنظیمات امنیتی روتر خودت (نوع رمزنگاری، WPS، رمز مدیریت، به‌روزرسانی) را بررسی کن و گزارش ریسک و اصلاح بنویس.',
    gate: 'تفاوت WPA2 و WPA3 را توضیح بده و برای روتر خودت پنج تنظیم امن‌سازی با دلیل پیشنهاد کن.',
    lessons: ['پروتکل‌های WEP، WPA2 و WPA3', 'ضعف‌های رایج و تنظیمات پرخطر', 'ارزیابی و سخت‌سازی شبکهٔ خودت']
  },
  {
    id: 'osint', stage: 'هک اخلاقی در آزمایشگاه مجاز', number: 28, title: 'OSINT اخلاقی و شناسایی منابع باز',
    level: 'مبتدی تا متوسط', priority: 'مهم', prerequisites: ['security-intro', 'human-security', 'networking'], months: 'حدود ۲ هفته',
    summary: 'OSINT، شناسایی passive و active، WHOIS/RDAP، رکوردهای DNS، Certificate Transparency، Shodan و Censys، Wayback، Wappalyzer و مستندسازی یافته‌ها را فقط روی دامنه و سازمان‌های مجاز تمرین می‌کنی.',
    why: 'شناسایی و راستی‌آزمایی هر دو به OSINT وابسته‌اند؛ اما تحقیق باید دربارهٔ موضوع‌های عمومی و مجاز باشد، نه افراد خصوصی.',
    source: { title: "Passive Reconnaissance – TryHackMe", instructor: "TryHackMe", publisher: "TryHackMe", url: "https://tryhackme.com/room/passiverecon", secondaryUrl: "https://bellingcat.gitbook.io/toolkit", secondaryTitle: "Bellingcat Online Investigation Toolkit (اختیاری)", durationText: "حدود ۱ ساعت اتاق + مطالعه و تمرین (تخمینی)", durationKind: 'estimate', contentMinutes: 240, note: "فقط اطلاعات فنی دامنه و سازمان در سناریوهای مجاز؛ هیچ فرد خصوصی هدف تحقیق نباشد. اتاق را ابتدا خودت انجام بده؛ ویدیو مکمل است." },
    videos: [{"title": "TryHackMe Passive Reconnaissance Walkthrough", "author": "(ارائه‌شده توسط کاربر)", "status": "supplied", "url": "https://www.youtube.com/watch?v=CgIDHZCLiHI", "optional": true, "note": "مکمل است؛ ابتدا اتاق را خودت انجام بده."}],
    practiceNow: [{"platform": "TryHackMe", "name": "Passive Reconnaissance", "url": "https://tryhackme.com/room/passiverecon", "tasks": "Tasks 2–6: Passive vs Active، Whois، nslookup و dig، DNSDumpster، Shodan.io (و Task 7: Summary)", "teaches": "whois، DNS و منابع عمومی", "do": "اتاق را خودت انجام بده؛ ویدیو فقط مکمل است.", "prereq": "networking", "time": "حدود ۶۰ دقیقه", "access": "بررسی نشده؛ پیش از شروع، قفل‌بودن اتاق را در سایت ببین", "challenge": "برای example.com یا دامنهٔ خودت جدولی از رکوردهای A، MX، TXT بساز.", "done": "تفاوت passive و active را توضیح می‌دهی.", "tool": "whois / dig / nslookup / DNSDumpster / Shodan"}, {"platform": "تمرین محلی", "name": "crt.sh و Wayback روی دامنهٔ مجاز", "url": "https://crt.sh/", "tasks": "—", "teaches": "Certificate Transparency و تاریخچهٔ عمومی", "do": "فقط برای دامنهٔ خودت یا example.com زیردامنه‌ها را در crt.sh ببین، Wayback Machine را باز کن و فناوری‌ها را با Wappalyzer مشاهده کن.", "prereq": "networking", "time": "حدود ۱ ساعت", "access": "رایگان", "challenge": "یافته‌ها را در یک جدول با منبع و تاریخ ثبت کن.", "done": "یافته‌ها را بدون هدف‌گیری فرد خصوصی مستند کرده‌ای.", "tool": "crt.sh / Wayback / Wappalyzer", "local": true}],
    studyHours: 8, practiceHours: 12,
    practice: 'برای یک دامنهٔ مجاز (مال خودت یا example.com) رکوردهای DNS، گواهی‌ها و فناوری‌های عمومی را جمع کن و در یک جدول با منبع و تاریخ ثبت کن.',
    gate: 'تفاوت شناسایی passive و active را توضیح بده و یک جدول مستند از اطلاعات فنی یک دامنهٔ مجاز بدون هدف‌گیری فرد خصوصی ارائه کن.',
    lessons: ['OSINT چیست؟ شناسایی passive و active و اخلاق', 'WHOIS، RDAP و رکوردهای DNS با dig و nslookup', 'Certificate Transparency (crt.sh)، دامنه و زیردامنه و DNSDumpster', 'Shodan و Censys، Wayback Machine و Wappalyzer', 'عملگرهای جست‌وجوی فنی و راستی‌آزمایی چندمنبعی', 'ثبت و مستندسازی یافته‌ها']
  },
  {
    id: 'metasploit', stage: 'هک اخلاقی در آزمایشگاه مجاز', number: 29, title: 'Metasploit در آزمایشگاه مجاز',
    level: 'متوسط تا پیشرفته', priority: 'مهم', prerequisites: ['nmap-recon'], months: 'حدود ۲ هفته',
    summary: 'ساختار Metasploit Framework، ماژول‌ها، payload، session و گزارش‌گیری را روی ماشین‌های آسیب‌پذیر عمدیِ آزمایشگاه خودت می‌شناسی.',
    why: 'ابزار استاندارد آموزش ارزیابی نفوذ است و کمک می‌کند ارتباط آسیب‌پذیری شناخته‌شده، ماژول و اثر را درک کنی.',
    source: { title: 'Metasploit Unleashed', instructor: 'OffSec', publisher: 'OffSec', url: 'https://www.offsec.com/metasploit-unleashed/introduction/', durationText: 'حدود ۸ ساعت مطالعه (تخمینی)', durationKind: 'estimate', contentMinutes: 480, note: 'فقط روی ماشین‌های آسیب‌پذیر عمدی داخل شبکهٔ ایزولهٔ خودت؛ هیچ ماژولی را روی سامانهٔ بیرونی اجرا نکن.' },
    videos: [{"title": "Metasploit – Get Started", "author": "Rapid7", "status": "official", "url": "https://www.metasploit.com/get-started"}, {"title": "The past, present and future of Metasploit", "author": "Help Net Security / Rapid7 researcher", "status": "supplied", "url": "https://www.helpnetsecurity.com/2022/07/20/past-present-future-metasploit-video/", "optional": true, "note": "ویدیوی معرفی و تاریخچه است، نه آموزش گام‌به‌گام."}],
    practiceNow: [{"platform": "TryHackMe", "name": "Metasploit: Introduction", "url": "https://tryhackme.com/room/metasploitintro", "tasks": "Tasks 2–4: Main Components، Msfconsole، Working with modules", "teaches": "ساختار و ماژول‌های Metasploit", "do": "Taskها را روی ماشین خود اتاق انجام بده.", "prereq": "networking، linux، nmap-recon", "time": "حدود ۳۰ دقیقه", "access": "بررسی نشده؛ پیش از شروع، قفل‌بودن اتاق را در سایت ببین", "challenge": "ماژول‌های یک سرویس را جست‌وجو کن و گزینه‌های هرکدام را بخوان.", "done": "ساختار Metasploit را توضیح می‌دهی.", "tool": "Metasploit — فقط روی ماشین مجاز"}],
    studyHours: 7, practiceHours: 13,
    practice: 'در شبکهٔ ایزولهٔ آزمایشگاه یک ماشین آسیب‌پذیر عمدی را ارزیابی کن و برای هر یافته آسیب‌پذیری، شواهد، اثر و راه اصلاح بنویس.',
    gate: 'ساختار ماژول، payload و session را توضیح بده و یک ارزیابی آزمایشگاهی را همراه راهکار اصلاح مستند کن.',
    lessons: ['ساختار Framework و ماژول‌ها', 'انتخاب ماژول، payload و session', 'گزارش و راهکار اصلاح']
  },
  {
    id: 'privesc', stage: 'هک اخلاقی در آزمایشگاه مجاز', number: 30, title: 'ارتقای دسترسی در Linux و Windows',
    level: 'پیشرفته', priority: 'حیاتی', prerequisites: ['linux', 'windows', 'nmap-recon'], months: 'حدود ۲ هفته',
    summary: 'سوءپیکربندی‌های رایج مجوز، سرویس، زمان‌بندی، SUID و token را در محیط‌های تمرینی می‌شناسی و برای هرکدام راه اصلاح می‌نویسی.',
    why: 'بسیاری از رخدادهای واقعی پس از دسترسی اولیه با ارتقای دسترسی بزرگ می‌شوند؛ درک آن برای مدافع و آزمایشگر هر دو لازم است.',
    source: { title: 'TryHackMe – Linux PrivEsc', instructor: 'TryHackMe', publisher: 'TryHackMe', url: 'https://tryhackme.com/room/linprivesc', secondaryUrl: 'https://tryhackme.com/room/windowsprivesc20', secondaryTitle: 'اتاق Windows PrivEsc', durationText: 'حدود ۱۰ ساعت (تخمینی)', durationKind: 'estimate', contentMinutes: 600, note: 'برخی اتاق‌ها نیاز به اشتراک دارند؛ فقط بخش رایگان را انجام بده و تمرین را روی ماشین‌های خود پلتفرم یا آزمایشگاه خودت نگه دار.' },
    videos: [{"title": "Linux Privilege Escalation for Beginners", "author": "The Cyber Mentor", "status": "review", "url": "https://www.youtube.com/playlist?list=PLLKT__MCUeixqHJ1TRqrHsEd6_EdEvo47", "note": "در پلی‌لیست The Cyber Mentor پیدا کن؛ لینک تکی تأیید نشده"}, {"title": "Windows Privilege Escalation for Beginners", "author": "The Cyber Mentor", "status": "review", "url": "https://www.youtube.com/playlist?list=PLLKT__MCUeixqHJ1TRqrHsEd6_EdEvo47", "note": "در پلی‌لیست The Cyber Mentor پیدا کن؛ لینک تکی تأیید نشده"}],
    studyHours: 9, practiceHours: 21,
    practice: 'برای هر روش ارتقای دسترسی یک کارت «شرط، نشانه، اصلاح» بنویس و در ماشین آزمایشگاه خودت مجوزها و سرویس‌ها را بازبینی و ایمن‌سازی کن.',
    gate: 'سه سوءپیکربندی رایج را در هر سیستم‌عامل توضیح بده و برای هرکدام تنظیم اصلاحی و شیوهٔ تشخیص بنویس.',
    lessons: ['مفاهیم، شمارش و سوءپیکربندی در Linux', 'مفاهیم، سرویس و token در Windows', 'راه تشخیص و اصلاح']
  },
  {
    id: 'active-directory', stage: 'هک اخلاقی در آزمایشگاه مجاز', number: 31, title: 'Active Directory: ساختار، حمله و دفاع',
    level: 'پیشرفته', priority: 'حیاتی', prerequisites: ['windows', 'privesc'], months: 'حدود ۳ هفته',
    summary: 'دامنه، کاربر و گروه، Kerberos، NTLM، GPO و سوءپیکربندی‌های رایج را در آزمایشگاه خودت می‌سازی و هم‌زمان دید مهاجم و مدافع را تمرین می‌کنی.',
    why: 'بیشتر سازمان‌ها از AD استفاده می‌کنند و نبود آن بزرگ‌ترین خلأ مهارت در مسیر هک اخلاقی و Red Team است.',
    source: { title: 'Active Directory Domain Services – Training Path', instructor: 'Microsoft Learn', publisher: 'Microsoft', url: 'https://learn.microsoft.com/en-us/training/paths/active-directory-domain-services/', durationText: 'حدود ۱۵ ساعت مطالعه و آزمایشگاه (تخمینی)', durationKind: 'estimate', contentMinutes: 900, note: 'یک آزمایشگاه AD ایزوله با Windows Server نسخهٔ Evaluation و یک کلاینت بساز؛ هرگز روی دامنهٔ واقعی محل کار یا دانشگاه آزمایش نکن.' },
    videos: [{"title": "Microsoft Active Directory: An Introduction", "author": "Microsoft Learn", "status": "official", "url": "https://learn.microsoft.com/en-us/shows/introtoad/01"}, {"title": "Hacking Active Directory for Beginners", "author": "The Cyber Mentor", "status": "review", "url": "https://www.youtube.com/playlist?list=PLLKT__MCUeixqHJ1TRqrHsEd6_EdEvo47", "optional": true, "note": "در پلی‌لیست The Cyber Mentor پیدا کن؛ لینک تکی تأیید نشده"}],
    practiceNow: [{"platform": "تمرین محلی", "name": "ساخت دامنهٔ آزمایشی", "url": "", "tasks": "—", "teaches": "کاربر، گروه و Domain Controller", "do": "روی ماشین‌های مجازی خودت یک دامنهٔ آزمایشی بساز، دو کاربر و یک گروه بساز و عضویت را مشاهده کن.", "prereq": "home-lab", "time": "حدود ۳ ساعت (تخمینی)", "access": "نیاز به ISO ارزیابی مایکروسافت (طبق شرایط آن)", "challenge": "کاربر ساختگی را به گروه اضافه و حذف کن و اثرش را بررسی کن.", "done": "نقش Domain Controller و ارتباط کاربر و گروه را توضیح می‌دهی.", "tool": "Active Directory", "local": true}],
    studyHours: 14, practiceHours: 26,
    practice: 'یک دامنهٔ آزمایشی بساز، کاربران، گروه‌ها و یک GPO ایجاد کن و گزارش «ساختار، ریسک سوءپیکربندی و کنترل دفاعی» بنویس.',
    gate: 'نقش Kerberos، NTLM و کنترلر دامنه را توضیح بده و برای سه سوءپیکربندی رایج AD راه تشخیص و اصلاح پیشنهاد کن.',
    lessons: ['مبانی AD، دامنه و GPO', 'Kerberos، NTLM و احراز هویت', 'سوءپیکربندی‌ها، تشخیص و سخت‌سازی']
  },
  {
    id: 'pentest-methodology', stage: 'هک اخلاقی در آزمایشگاه مجاز', number: 32, title: 'متدولوژی تست نفوذ و گزارش‌نویسی حرفه‌ای',
    level: 'پیشرفته', priority: 'مهم', prerequisites: ['burp-portswigger', 'nmap-recon', 'active-directory'], months: 'حدود ۲ هفته',
    summary: 'مراحل یک ارزیابی نفوذ، تعیین scope و قواعد درگیری، چارچوب OWASP WSTG، شدت‌سنجی و نوشتن گزارش قابل‌اقدام را یاد می‌گیری.',
    why: 'تفاوت آزمایشگر حرفه‌ای با علاقه‌مند در مجوز مکتوب، روش‌مندی و گزارش مفید است.',
    source: { title: 'OWASP Web Security Testing Guide', instructor: 'OWASP Contributors', publisher: 'OWASP Foundation', url: 'https://wstg.owasp.org/', secondaryUrl: 'https://wstg.owasp.org/v4.2/5-Reporting/', secondaryTitle: 'بخش گزارش‌نویسی WSTG', durationText: 'حدود ۶ ساعت مطالعهٔ منتخب (تخمینی)', durationKind: 'estimate', contentMinutes: 360, note: 'WSTG را به‌عنوان چک‌لیست ارزیابی وب به کار ببر و هر تمرین را فقط روی برنامهٔ آزمایشگاهی خودت انجام بده.' },
    videos: [{"title": "Ethical Hacking in 12 Hours – Full Course", "author": "The Cyber Mentor", "status": "review", "url": "https://www.youtube.com/playlist?list=PLLKT__MCUeixqHJ1TRqrHsEd6_EdEvo47", "optional": true, "note": "در پلی‌لیست The Cyber Mentor پیدا کن؛ لینک تکی تأیید نشده"}],
    studyHours: 8, practiceHours: 17,
    practice: 'یک ارزیابی کامل آزمایشگاهی (Juice Shop محلی یا ماشین خودت) را از scope تا گزارش نهایی با خلاصهٔ مدیریتی، یافته‌ها، شدت و راهکار بنویس.',
    gate: 'گزارشی بنویس که scope، روش، یافته‌ها، شدت، شواهد غیرحساس و راه اصلاح را پوشش دهد و یک مدیر غیرفنی هم آن را بفهمد.',
    lessons: ['Scope، قواعد درگیری و مجوز', 'چک‌لیست WSTG و شدت‌سنجی', 'گزارش اجرایی و فنی']
  },
  {
    id: 'assembly', stage: 'تخصص‌گرایی', number: 33, title: 'مبانی Assembly و معماری x86-64',
    level: 'متوسط تا پیشرفته', priority: 'مهم', prerequisites: ['c-memory'], months: 'حدود ۳ هفته',
    summary: 'رجیسترها، دستورهای پایه، stack frame، فراخوانی تابع، پارامترها و جریان کنترل را در برنامه‌های ساده می‌خوانی.',
    why: 'Assembly زبان مشاهدهٔ لایهٔ واقعی اجرای برنامه توسط پردازنده است و پیش‌نیاز مهندسی معکوس می‌شود.',
    source: { title: 'Architecture 1001: x86-64 Assembly', instructor: 'Xeno Kovah', publisher: 'OpenSecurityTraining2', url: 'https://p.ost2.fyi/courses/course-v1:OpenSecurityTraining2+Arch1001_x86-64_Asm+2021_v1/', durationText: 'حدود ۸ ساعت محتوای منتخب (تخمینی؛ مدت تجمیعی اعلام نشده)', durationKind: 'estimate', contentMinutes: 480, note: 'پیش‌نیاز C است؛ بخش‌های خواندن برنامهٔ ساده را دنبال کن و لاب exploit را کنار بگذار.' },
    videos: [{"title": "Architecture 1001: x86-64 Assembly", "author": "Xeno Kovah", "status": "review", "url": "https://www.youtube.com/playlist?list=PLqyUgadpThTKe27k2yDIziwZFeej-PHjW"}],
    studyHours: 13, practiceHours: 27,
    practice: 'یک برنامهٔ سادهٔ C خودت را در debugger مشاهده کن و رابطهٔ متغیر، رجیستر و فراخوانی تابع را یادداشت کن.',
    gate: 'چند دستور رایج را توضیح بده، stack frame را رسم کن و ارتباط یک تابع C ساده با Assembly را شرح بده.',
    lessons: ['رجیسترها، داده و دستورهای پایه', 'Stack، فراخوانی تابع و پارامترها', 'شرط، حلقه و تطبیق C با Assembly']
  },
  {
    id: 'reverse-engineering', stage: 'تخصص‌گرایی', number: 34, title: 'مهندسی معکوس با Ghidra',
    level: 'پیشرفته', priority: 'حیاتی', prerequisites: ['assembly', 'c-memory'], months: 'حدود ۵ تا ۶ هفته',
    summary: 'ساخت پروژه، import فایل آموزشی، decompiler، symbol، function graph، data type و یادداشت‌گذاری را یاد می‌گیری.',
    why: 'این مرحله توانایی تبدیل یک باینری بی‌خطر به درکی مستند از ساختار و منطق برنامه را شکل می‌دهد.',
    source: { title: 'Introduction to Ghidra – Student Guide', instructor: 'Ghidra Training Team', publisher: 'National Security Agency · Ghidra Project', url: 'https://ghidra.re/ghidra_docs/GhidraClass/Beginner/Introduction_to_Ghidra_Student_Guide.html', durationText: 'حدود ۵ ساعت راهنما و تمرین ساده (تخمینی)', durationKind: 'estimate', contentMinutes: 300, note: 'فقط برنامهٔ خودساخته یا فایل آموزشی بی‌خطر و مجاز؛ به فایل ناشناس دست نزن.' },
    videos: [{"title": "Introduction to Ghidra – Student Guide", "author": "Ghidra Training Team", "status": "review", "url": "https://www.youtube.com/watch?v=fTGTnrgjuGA"}],
    studyHours: 19, practiceHours: 46,
    practice: 'دو برنامهٔ سادهٔ C خودت را در Ghidra باز کن؛ functionها را نام‌گذاری، نوع داده را اصلاح و گزارش «از کد تا باینری» بنویس.',
    gate: 'یک برنامهٔ benign خودساخته را import و تحلیل کن، functionها را توضیح بده و یافته‌ها را همراه شواهد و عدم‌قطعیت ثبت کن.',
    lessons: ['پروژه، import، تنظیمات و تحلیل خودکار', 'Decompiler، symbol، data type و function graph', 'مستندسازی رفتار باینری خودساخته']
  },
  {
    id: 'blue-team', stage: 'تخصص‌گرایی', number: 35, title: 'Blue Team، لاگ و پایش دفاعی',
    level: 'متوسط تا پیشرفته', priority: 'تکمیلی', prerequisites: ['windows', 'linux', 'security-principles', 'traffic'], months: 'حدود ۵ تا ۶ هفته',
    summary: 'ثبت رویداد، خط مبنا، فرایندهای آغاز به کار، هشدار، triage اولیه و مستندسازی رخداد را تمرین می‌کنی.',
    why: 'تحلیل دفاعی یعنی جدا کردن رفتار عادی از مورد نیازمند بررسی با دادهٔ مجاز و شواهد.',
    source: { title: 'View the security event log + Sysinternals', instructor: 'Microsoft Learn / Mark Russinovich', publisher: 'Microsoft', url: 'https://learn.microsoft.com/en-us/windows/security/threat-protection/auditing/view-the-security-event-log', secondaryUrl: 'https://learn.microsoft.com/en-us/sysinternals/downloads/', secondaryTitle: 'ابزارهای رسمی Sysinternals', durationText: 'حدود ۴ ساعت مطالعه و مشاهدهٔ لاگ (تخمینی)', durationKind: 'estimate', contentMinutes: 240, note: 'فقط رویدادهای دستگاه خودت یا دادهٔ آموزشی را بررسی کن.' },
    videos: [],
    studyHours: 15, practiceHours: 40,
    practice: 'خط مبنایی از رویدادهای عادی Windows بساز، چند رویداد آموزشی را دسته‌بندی و علت نیاز یا عدم نیاز به بررسی را بنویس.',
    gate: 'یک رویداد را با زمان، منبع، شناسه، حساب/فرایند مرتبط و نتیجهٔ triage مستند کن؛ بدون شواهد نتیجه‌گیری نکن.',
    lessons: ['Event Viewer، Security log و خط مبنا', 'Process Explorer و Autoruns در حالت مشاهده', 'Triage، timeline و گزارش دفاعی']
  },
  {
    id: 'network-defense', stage: 'تخصص‌گرایی', number: 36, title: 'دفاع شبکه: فایروال و تشخیص نفوذ با Suricata',
    level: 'متوسط تا پیشرفته', priority: 'تکمیلی', prerequisites: ['traffic', 'blue-team', 'home-lab'], months: 'حدود ۳ هفته',
    summary: 'فایروال، تفاوت IDS و IPS، نوشتن و خواندن قواعد Suricata و تحلیل هشدارها را روی ترافیک آموزشی تمرین می‌کنی.',
    why: 'مدافع باید بتواند ترافیک مشکوک را ببیند و قاعدهٔ تشخیص بنویسد؛ این فصل کنار Wireshark و ATT&CK قرار می‌گیرد.',
    source: { title: 'Suricata User Guide – Rules', instructor: 'OISF', publisher: 'Open Information Security Foundation', url: 'https://docs.suricata.io/en/latest/rules/intro.html', durationText: 'حدود ۷ ساعت مطالعه و تمرین (تخمینی)', durationKind: 'estimate', contentMinutes: 420, note: 'Suricata را فقط در VM خودت و روی فایل‌های pcap آموزشی یا ترافیک آزمایشگاه اجرا کن.' },
    videos: [{"title": "Suricata User Guide – Rules", "author": "OISF", "status": "review", "url": "https://www.youtube.com/watch?v=QSbqDivLi4k"}],
    studyHours: 12, practiceHours: 23,
    practice: 'Suricata را در یک VM نصب کن، روی یک pcap آموزشی اجرا کن، یک قاعدهٔ ساده بنویس و هشدارها را به‌صورت «علت، شواهد، نتیجهٔ triage» ثبت کن.',
    gate: 'تفاوت IDS و IPS را توضیح بده، ساختار یک قاعدهٔ Suricata را بخوان و یک هشدار را با شواهد بررسی کن.',
    lessons: ['فایروال و مفاهیم IDS و IPS', 'ساختار قواعد Suricata', 'تحلیل هشدار و triage']
  },
  {
    id: 'dfir', stage: 'تخصص‌گرایی', number: 37, title: 'فارنزیک دیجیتال و پاسخ به رخداد',
    level: 'پیشرفته', priority: 'تکمیلی', prerequisites: ['blue-team', 'windows'], months: 'حدود ۴ تا ۵ هفته',
    summary: 'نگهداری شواهد، تحلیل دیسک با Autopsy، آرتیفکت‌های Windows، فارنزیک حافظه با Volatility و ساخت timeline رخداد را روی تصاویر آموزشی تمرین می‌کنی.',
    why: 'وقتی رخدادی رخ می‌دهد، مدافع باید با شواهد بگوید چه شد؛ این فصل بزرگ‌ترین خلأ بخش دفاعی را پر می‌کند.',
    source: { title: 'Autopsy User’s Guide', instructor: 'Basis Technology / Sleuth Kit community', publisher: 'The Sleuth Kit', url: 'https://sleuthkit.org/autopsy/docs/user-docs/4.22.1/', secondaryUrl: 'https://volatility3.readthedocs.io/en/latest/', secondaryTitle: 'مستندات Volatility 3', durationText: 'حدود ۱۲ ساعت مطالعه و تمرین (تخمینی)', durationKind: 'estimate', contentMinutes: 720, note: 'فقط تصاویر دیسک و حافظهٔ آموزشی عمومی یا ساخته‌شده توسط خودت؛ روی دستگاه یا دادهٔ شخصی دیگران کار نکن.' },
    videos: [{"title": "Autopsy User’s Guide", "author": "Basis Technology / Sleuth Kit community", "status": "review", "url": "https://www.youtube.com/watch?v=VYROU-ZwZX8"}],
    studyHours: 16, practiceHours: 34,
    practice: 'یک تصویر دیسک آموزشی را در Autopsy بررسی کن، رویدادهای کلیدی را روی یک timeline بگذار و گزارش «شواهد، زمان، نتیجه و محدودیت» بنویس.',
    gate: 'زنجیرهٔ نگهداری شواهد را توضیح بده، چند آرتیفکت Windows را تفسیر کن و یک timeline مستند از یک رخداد آموزشی بساز.',
    lessons: ['شواهد، زنجیرهٔ نگهداری و ایمنی', 'تحلیل دیسک و آرتیفکت‌های Windows', 'فارنزیک حافظه و timeline رخداد']
  },
  {
    id: 'attack-detection', stage: 'تخصص‌گرایی', number: 38, title: 'MITRE ATT&CK و تشخیص تهدید',
    level: 'متوسط تا پیشرفته', priority: 'مهم', prerequisites: ['security-principles', 'windows'], months: 'حدود ۲ هفته',
    summary: 'تاکتیک‌ها و تکنیک‌های ATT&CK، نگاشت رفتار به لاگ، قواعد تشخیص ساده و آشنایی با Security Onion را می‌آموزی.',
    why: 'ATT&CK زبان مشترک Red Team و Blue Team است و نشان می‌دهد هر تکنیک چه ردپایی در لاگ می‌گذارد.',
    source: { title: 'MITRE ATT&CK – Get Started', instructor: 'MITRE', publisher: 'MITRE', url: 'https://attack.mitre.org/resources/', secondaryUrl: 'https://docs.securityonion.net/en/3/main/first-time-users/', secondaryTitle: 'شروع کار با Security Onion', durationText: 'حدود ۶ ساعت مطالعه و تمرین (تخمینی)', durationKind: 'estimate', contentMinutes: 360, note: 'Security Onion را فقط در ماشین‌های مجازی خودت و با دادهٔ آموزشی راه‌اندازی کن؛ منابع سنگینی می‌خواهد.' },
    videos: [{"title": "Security Operations (SOC) 101 Course", "author": "The Cyber Mentor", "status": "review", "url": "https://www.youtube.com/playlist?list=PLLKT__MCUeixqHJ1TRqrHsEd6_EdEvo47", "optional": true, "note": "در پلی‌لیست The Cyber Mentor پیدا کن؛ لینک تکی تأیید نشده"}],
    studyHours: 9, practiceHours: 16,
    practice: 'برای ۵ تکنیک ATT&CK مشخص کن چه لاگ یا رویدادی در Windows یا Linux تولید می‌کند و یک قاعدهٔ تشخیص ساده بنویس.',
    gate: 'یک رفتار را به تاکتیک و تکنیک ATT&CK نگاشت کن و منبع داده‌ای که آن را آشکار می‌کند، همراه محدودیت تشخیص، بنویس.',
    lessons: ['ساختار ATT&CK و ماتریس', 'نگاشت تکنیک به لاگ و منبع داده', 'قواعد تشخیص و Security Onion']
  },
  {
    id: 'cloud-security', stage: 'تخصص‌گرایی', number: 39, title: 'مبانی امنیت Cloud و هویت (SC-900)',
    level: 'مبتدی تا متوسط', priority: 'تکمیلی', prerequisites: ['security-principles', 'security-plus'], months: 'حدود ۲ هفته',
    summary: 'مدل مسئولیت مشترک، هویت و دسترسی، Zero Trust، رمزنگاری در ابر و ابزارهای امنیتی Microsoft را در حد مفهومی می‌شناسی.',
    why: 'بخش بزرگی از زیرساخت‌ها به ابر منتقل شده و مفاهیم هویت و دسترسی آنجا مهم‌ترین کنترل امنیتی هستند.',
    source: { title: 'Introduction to security, compliance, and identity concepts', instructor: 'Microsoft Learn', publisher: 'Microsoft', url: 'https://learn.microsoft.com/en-us/training/paths/describe-concepts-of-security-compliance-identity/', durationText: 'حدود ۸ ساعت مطالعه و ویدیو (تخمینی)', durationKind: 'estimate', contentMinutes: 480, note: 'مسیر رایگان است؛ آزمون رسمی پولی است و لازم نیست آن را بدهی.' },
    videos: [{"title": "Introduction to security, compliance, and identity concepts", "author": "Microsoft Learn", "status": "review", "url": "https://www.youtube.com/watch?v=-FJqb60wPSY"}],
    studyHours: 8, practiceHours: 17,
    practice: 'برای یک سناریوی فرضی (برنامه‌ای در ابر) مسئولیت‌های ارائه‌دهنده و مشتری را جدا کن و برای هویت و دسترسی سه کنترل پیشنهاد بده.',
    gate: 'مدل مسئولیت مشترک و Zero Trust را با مثال توضیح بده و تفاوت احراز هویت و مجوزدهی را در ابر بگو.',
    lessons: ['مدل ابر و مسئولیت مشترک', 'هویت، MFA و Zero Trust', 'ابزارهای امنیتی و انطباق']
  },
  {
    id: 'malware-analysis', stage: 'تخصص‌گرایی', number: 40, title: 'تحلیل دفاعی فایل و بدافزار – ایستا و ایمن',
    level: 'پیشرفته', priority: 'تکمیلی', prerequisites: ['assembly', 'reverse-engineering', 'blue-team'], months: 'حدود ۵ تا ۶ هفته',
    summary: 'triage ایستا، hash، نوع فایل، امضای دیجیتال، metadata، strings و ثبت شاخص‌ها را روی فایل‌های بی‌خطر می‌آموزی.',
    why: 'برای دفاع باید فایل را با احتیاط ارزیابی کنی؛ اجرای نمونهٔ ناشناس یا ساخت/تغییر بدافزار در برنامه نیست.',
    source: { title: 'REMnux Documentation – Examine Static Properties', instructor: 'REMnux Community', publisher: 'REMnux', url: 'https://docs.remnux.org/discover-the-tools/examine+static+properties', secondaryUrl: 'https://docs.remnux.org/', secondaryTitle: 'مستندات ابزار REMnux', durationText: 'حدود ۳٫۵ ساعت مطالعهٔ مباحث ایستای منتخب (تخمینی)', durationKind: 'estimate', contentMinutes: 210, note: 'فقط metadata و فایل‌های آزمایشی بی‌خطر یا خودساخته؛ نمونهٔ واقعی ناشناس را دانلود یا اجرا نکن. تحلیل رفتاری فقط در فصل آزمایشگاه ایزولهٔ بعدی و فقط با نمونه‌های آموزشی انجام می‌شود.' },
    studyHours: 16, practiceHours: 44,
    practice: 'برای فایل متنی یا باینری بی‌خطر خودت، hash و metadata را ثبت کن، امضا و نوع فایل را تفکیک و گزارش triage ایستا بنویس.',
    gate: 'triage ایستا را با زنجیرهٔ شواهد، محدودیت تحلیل و نتیجهٔ محتاطانه مستند کن؛ هرگز فایل ناشناس را اجرا نکن.',
    lessons: ['قواعد ایمنی، hash، نوع فایل و امضا', 'Metadata، strings و ویژگی‌های ایستا', 'گزارش triage و محدودیت نتیجه']
  },
  {
    id: 'malware-lab', stage: 'تخصص‌گرایی', number: 41, title: 'تحلیل رفتاری بدافزار در آزمایشگاه ایزوله',
    level: 'پیشرفته', priority: 'تکمیلی', prerequisites: ['malware-analysis', 'home-lab'], months: 'حدود ۲ هفته',
    summary: 'با workshop مقدماتی Malware Unicorn، تحلیل ایستا و رفتاری را روی نمونه‌های آموزشیِ خود workshop در یک ماشین کاملاً ایزوله تمرین می‌کنی.',
    why: 'تکمیل‌کنندهٔ تحلیل ایستاست؛ اما چون اجرای کد مخرب خطر دارد، فقط پس از تسلط بر ایزوله‌سازی و با نمونه‌های آموزشی مجاز مناسب است.',
    source: { title: 'Reverse Engineering 101', instructor: 'Malware Unicorn', publisher: 'malwareunicorn.org', url: 'https://malwareunicorn.org/workshops/re101.html', durationText: 'حدود ۷ ساعت workshop (تخمینی)', durationKind: 'estimate', contentMinutes: 420, note: 'فقط نمونه‌های آموزشی خود workshop، داخل VM ایزوله بدون شبکهٔ واقعی، بدون shared folder و با snapshot. هرگز نمونهٔ ناشناس دانلود یا اجرا نکن؛ ساخت یا تغییر بدافزار خارج از دامنه است.' },
    videos: [{"title": "Reverse Engineering 101", "author": "Malware Unicorn", "status": "review", "url": "https://www.youtube.com/watch?v=gFxImi5t37c"}],
    studyHours: 9, practiceHours: 16,
    practice: 'یک VM ایزولهٔ بدون اینترنت بساز، snapshot بگیر و فقط نمونه‌های workshop را تحلیل کن؛ گزارش رفتار، شاخص‌ها و راه دفاعی بنویس.',
    gate: 'قواعد ایمنی ایزوله‌سازی را بدون یادداشت بگو و یک گزارش رفتاری با شواهد و نتیجهٔ محتاطانه بنویس.',
    lessons: ['آماده‌سازی و ایزوله‌سازی آزمایشگاه', 'تحلیل نمونه‌های آموزشی workshop', 'شاخص‌ها و گزارش دفاعی']
  },
  {
    id: 'portfolio', stage: 'پروژه و تثبیت', number: 42, title: 'پروژه‌های نهایی و Portfolio',
    level: 'پیشرفته', priority: 'مهم', prerequisites: ['foundations', 'networking', 'security-intro', 'windows', 'linux', 'home-lab', 'docker-labs', 'bandit', 'python', 'powershell-scripting', 'c-memory', 'traffic', 'security-principles', 'security-plus', 'human-security', 'web-foundations', 'sql-databases', 'web-security', 'crypto', 'secure-coding', 'vulnerability-research', 'ctf-pico', 'burp-portswigger', 'api-security', 'hacker101', 'nmap-recon', 'wifi-security', 'osint', 'metasploit', 'privesc', 'active-directory', 'pentest-methodology', 'assembly', 'reverse-engineering', 'attack-detection'], months: 'حدود ۷ تا ۸ هفته',
    summary: 'آموخته‌ها را به گزارش و پروژه‌های کوچک، قابل بازبینی و اخلاقی تبدیل می‌کنی؛ تمرکز روی کیفیت توضیح، شواهد و اصلاح است.',
    why: 'Portfolio خوب نشان می‌دهد چطور مسئله را تحلیل می‌کنی و یافته را مسئولانه منتقل می‌کنی.',
    source: { title: 'GitHub Skills – Introduction to GitHub', instructor: 'GitHub Skills Team', publisher: 'GitHub', url: 'https://skills.github.com/', durationText: 'حدود ۱ ساعت آشنایی پایه؛ پروژه و گزارش جداست (تخمینی)', durationKind: 'estimate', contentMinutes: 60, note: 'فقط کد/گزارش خودساخته، دادهٔ ساختگی و اطلاعات غیرحساس را منتشر کن.' },
    videos: [{"title": "Git & GitHub Crash Course for Beginners", "author": "freeCodeCamp", "status": "supplied", "url": "https://www.youtube.com/watch?v=mAFoROnOfHs"}],
    practiceNow: [{"platform": "GitHub Skills", "name": "Introduction to GitHub", "url": "https://skills.github.com/", "tasks": "دورهٔ تعاملی", "teaches": "مخزن، commit و README", "do": "دوره را انجام بده و یک مخزن برای Writeupهایت بساز.", "prereq": "ندارد", "time": "حدود ۱ ساعت", "access": "رایگان", "challenge": "یک README بنویس که روش، ابزار و نتیجه را توضیح دهد.", "done": "یک مخزن عمومی با README داری.", "tool": "Git و GitHub"}],
    studyHours: 18, practiceHours: 62,
    practice: 'سه خروجی بساز: تحلیل شبکه با pcap عمومی، گزارش آسیب‌پذیری برنامهٔ محلی همراه remediation، و تحلیل Ghidra/triage ایستای برنامهٔ benign خودساخته؛ README بنویس.',
    gate: 'حداقل سه پروژهٔ قابل بازبینی با README، هدف، روش مجاز، شواهد غیرحساس، نتیجه و محدودیت‌ها منتشر کرده باشی.',
    lessons: ['ساخت مخزن، README و مستندسازی فنی', 'پروژهٔ شبکه و گزارش Blue Team', 'پروژهٔ وب/RE ایمن و بازبینی نهایی']
  }
];

export const roadmap = modules.map((module) => {
  const count = module.lessons.length;
  // Three-lesson chapters keep their original split so saved progress weights stay the same.
  const minuteRatios = count === 3 ? [0.28, 0.34, 0.38] : Array(count).fill(1 / count);
  const hourRatios = count === 3 ? [0.32, 0.34, 0.34] : Array(count).fill(1 / count);
  const totalHours = module.studyHours + module.practiceHours;
  let allocatedMinutes = 0;
  let allocatedHours = 0;
  const lessonItems = module.lessons.map((title, index) => {
    const isLast = index === count - 1;
    const minutes = isLast ? module.source.contentMinutes - allocatedMinutes : Math.round(module.source.contentMinutes * minuteRatios[index]);
    const weightHours = isLast ? totalHours - allocatedHours : Math.round(totalHours * hourRatios[index]);
    allocatedMinutes += minutes;
    allocatedHours += weightHours;
    return { id: module.id + '-lesson-' + (index + 1), title, minutes, weightHours };
  });
  return { ...module, totalHours, lessons: lessonItems };
});

export const totalPlanHours = roadmap.reduce((sum, item) => sum + item.totalHours, 0);
