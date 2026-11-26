import { useState } from 'react';
import { ExternalLink, Flag, Info, Lightbulb, ShieldCheck, Target } from 'lucide-react';

const tabs = [
  { id: 'path', label: 'ماندگاری و هر مرحله' },
  { id: 'thm', label: 'TryHackMe' },
  { id: 'htb', label: 'Hack The Box' },
];

const habits = [
  ['در هفتهٔ اول یک برد واقعی بگیر', 'با Bandit یا یک ماشین ساده در TryHackMe حس «هک کردم» را زود بچش؛ بعد از آن تئوری معنا پیدا می‌کند.'],
  ['تئوری را به اندازهٔ نیاز بخوان', 'وقتی در یک ماشین گیر کردی همان موضوع را بخوان. دیدن پشت‌سرهم یک دورهٔ کامل معمولاً خسته‌کننده است.'],
  ['هدف روزانهٔ کوچک بگذار', 'مثلاً «امروز یک اتاق» یا «یک مرحله». ۴۵ تا ۶۰ دقیقه هر روز بهتر از یک روز پنج ساعت و شش روز هیچ است.'],
  ['قانون گیر کردن', '۲۰ تا ۳۰ دقیقه خودت تلاش کن، بعد Hint یا Writeup ببین، و بعد همان را دوباره بدون کمک انجام بده.'],
  ['پیشرفت را ثبت کن', 'یک فایل ساده: ماشین‌های حل‌شده، چیزی که یاد گرفتی و Writeup کوتاه. بعد از یک ماه می‌بینی چقدر جلو رفته‌ای و بعداً پورتفولیو می‌شود.'],
  ['هم‌مسیر پیدا کن', 'جامعهٔ TryHackMe، تیم‌های CTF و گروه‌های Discord. وقتی دیگران هم همین راه را می‌روند، رها کردن سخت‌تر است.'],
  ['روز بد را قبول کن', 'قانون: «دو روز پشت‌سرهم را از دست ندهم.» حتی ۱۵ دقیقه هم حساب می‌شود.'],
];

const stageGuides = [
  { stage: 'مبانی', goal: 'زبان مشترک کامپیوتر و شبکه را یاد بگیر تا بعداً حمله‌ها را بفهمی، نه فقط تکرار کنی.',
    do: ['همزمان با دوره‌ها Bandit را از Level 0 شروع کن.', 'Kali را روی VirtualBox نصب و Snapshot بگیر.', 'در TryHackMe مسیر Pre Security یا اتاق‌های رایگان مبانی را انجام بده.'],
    done: 'بدون گوگل با دستورهای پایهٔ Linux و فایل و پورت کار می‌کنی و Bandit را تا حدود Level 10 رفته‌ای.' },
  { stage: 'سیستم‌ها و برنامه‌نویسی', goal: 'ابزار نوشتن اسکریپت و فهمیدن رفتار سیستم را به دست بیاور.',
    do: ['Bandit را تا حدود Level 20 ادامه بده.', 'یک فایل PCAP آموزشی را در Wireshark باز کن (نمونه‌های رسمی صفحهٔ Wireshark Sample Captures) و خلاصهٔ ده‌خطی از پروتکل‌ها و میزبان‌ها بنویس.', 'چند خط از یک لاگ نمونهٔ ساختگی را بخوان و رویدادهای مشکوک را علامت بزن.', 'یک اسکریپت Python کوچک بنویس که یک فایل متنی لاگ را بخواند و تعداد خطاها را بشمارد.'],
    done: 'می‌توانی کار تکراری را با اسکریپت خودکار کنی و یک PCAP یا لاگ ساده را بخوانی و خلاصه کنی.' },
  { stage: 'امنیت و کاربرد', goal: 'اولین آسیب‌پذیری‌های واقعی وب و رمزنگاری را به‌صورت عملی ببین.',
    do: ['لب‌های رایگان PortSwigger Web Security Academy را حل کن (SQLi، XSS، Auth).', 'OWASP Juice Shop را روی لب خودت اجرا کن.', 'چند چالش از picoCTF یا CryptoHack حل کن.'],
    done: 'یک آسیب‌پذیری وب را خودت پیدا و توضیح می‌دهی که چرا کار می‌کند.' },
  { stage: 'هک اخلاقی در آزمایشگاه مجاز', goal: 'روش کامل حمله را روی ماشین‌های مجاز تمرین کن: شناسایی، دسترسی، ارتقا و گزارش.',
    do: ['TryHackMe: ماشین‌های مبتدی مثل Vulnversity، Blue و Kenobi.', 'HTB: Starting Point، بعد Machines ساده.', 'اتاق‌های Linux PrivEsc، Windows PrivEsc و Attacktive Directory.', 'برای هر ماشین یک Writeup بنویس.'],
    done: 'یک ماشین ساده را بدون راهنما از شناسایی تا دسترسی کامل حل می‌کنی.' },
  { stage: 'تخصص‌گرایی', goal: 'یک شاخه را عمیق‌تر کن: RE، Active Directory، موبایل، وب پیشرفته یا چیز دیگر.',
    do: ['برای هر فصل تخصصی یک پروژهٔ کوچک تعریف کن.', 'در RE از crackme و چالش‌های picoCTF با Ghidra شروع کن.', 'ماشین‌های متوسط HTB را امتحان کن.'],
    done: 'درباره یک شاخه می‌توانی یک توضیح ۱۰ دقیقه‌ای و یک پروژهٔ نمایشی ارائه کنی.' },
  { stage: 'پروژه و تثبیت', goal: 'کارهایت را قابل نمایش کن و مهارت را بسنج.',
    do: ['حداقل ۵ Writeup خوب روی GitHub بگذار (ماشین‌های فعال را منتشر نکن).', 'یک ابزار یا اسکریپت کوچک منتشر کن.', 'در صورت تمایل برای مدرکی مثل eJPT یا PNPT آماده شو.'],
    done: 'پورتفولیویی داری که کسی بتواند در ۵ دقیقه مهارتت را از آن بفهمد.' },
];

const platforms = {
  thm: {
    name: 'TryHackMe', url: 'https://tryhackme.com/free-rooms',
    what: 'پلتفرم یادگیری گام‌به‌گام: هر «اتاق» توضیح کوتاه + ماشین مجازی در مرورگر دارد. برای شروع از همهٔ پلتفرم‌ها ساده‌تر است.',
    free: ['تعداد زیادی اتاق رایگان بدون نیاز به کارت بانکی (تعداد دقیق تغییر می‌کند؛ فهرست رسمی را ببین).', 'ماشین هدف و AttackBox مرورگری برای اتاق‌های رایگان.', 'فقط مسیرهای مقدماتی رایگان‌اند؛ زمان AttackBox برای کاربر رایگان محدود است.'],
    start: ['ثبت‌نام و مسیر Pre Security یا اتاق‌های رایگان مبتدی.', 'اتاق‌های «Linux Fundamentals» و «Network Fundamentals».', 'سپس اتاق‌های رایگان: OWASP Top 10، Nmap، Burp Suite: The Basics.', 'بعد ماشین‌های Vulnversity، Blue، Kenobi و Basic Pentesting.', 'در مرحلهٔ ارتقا: Linux PrivEsc، Windows PrivEsc و Attacktive Directory.'],
    how: ['اتاق را بدون پرش به جواب‌ها بخوان.', 'نکته‌های مهم را در فایل خودت بنویس.', 'بعد از اتمام، همان تکنیک را با دست خودت روی لب محلی تکرار کن.'],
    note: 'بعضی اتاق‌ها پولی‌اند؛ پیش از شروع نشان قفل را ببین و فقط بخش رایگان را انجام بده. شرایط پلتفرم و دسترسی از ایران را خودت بررسی کن.',
  },
  htb: {
    name: 'Hack The Box', url: 'https://www.hackthebox.com/hacker/htb-for-beginners',
    what: 'پلتفرم تمرین واقع‌گرایانه‌تر و چالشی‌تر. Academy آموزش می‌دهد و Labs ماشین‌ها و چالش‌ها را دارد؛ برای رسیدن به سطح حرفه‌ای عالی است ولی ساختارش برای مبتدی سخت‌تر از TryHackMe است.',
    free: ['Academy: بخشی از ماژول‌ها رایگان است (مثلاً Information Security Foundations؛ فهرست فعلی را در سایت ببین).', 'Starting Point: ماشین‌های مبتدی همراه با Writeup و توضیح مراحل.', 'Labs: Machines، Challenges و Sherlocks (بخش دفاعی). برخی ماشین‌ها و Pro Labs به اشتراک نیاز دارند.'],
    start: ['در Academy ماژول‌های Linux Fundamentals، Windows Fundamentals و Network Foundations.', 'بعد مسیر Information Security Foundations.', 'Starting Point: ماشین‌ها را به ترتیب انجام بده.', 'سپس Machines ساده (Easy) روی Labs.', 'برای دیدن روش‌های حرفه‌ای، ویدیوی IppSec همان ماشین را بعد از حل خودت ببین.'],
    how: ['اول خودت تلاش کن، بعد Writeup ببین.', 'برای هر ماشین یادداشت و Writeup شخصی بنویس.', 'ماشین‌های فعال را نه منتشر کن و نه راه‌حلش را بخوان؛ قوانین پلتفرم را رعایت کن.'],
    note: 'بخش رایگان و اشتراکی پلتفرم‌ها ممکن است تغییر کند؛ صفحهٔ Pricing را بررسی کن. دسترسی و شرایط استفاده از ایران را هم خودت چک کن.',
  },
};

// Isolate English phrases so they don't scramble the order of Persian sentences.
const LATIN = /([A-Za-z0-9](?:[A-Za-z0-9.+#'/-]*[A-Za-z0-9+#])?(?:(?: |: )[A-Za-z0-9](?:[A-Za-z0-9.+#'/-]*[A-Za-z0-9+#])?)*)/;
const T = (text) => text.split(LATIN).map((part, i) => (i % 2 ? <bdi dir="ltr" key={i}>{part}</bdi> : part));

function List({ items }) {
  return <ul className="guide-list">{items.map((item) => <li key={item}>{T(item)}</li>)}</ul>;
}

function Platform({ data }) {
  return (
    <div className="page-stack">
      <section className="panel guide-panel">
        <div className="panel-heading"><div><span className="section-kicker">PLATFORM GUIDE</span><h2>{T(`${data.name} چیست؟`)}</h2></div></div>
        <p className="guide-text">{T(data.what)}</p>
        <div className="detail-columns">
          <div className="detail-block"><span className="detail-label">در نسخهٔ رایگان چه داری؟</span><List items={data.free} /></div>
          <div className="detail-block"><span className="detail-label">از کجا شروع کنم؟ (به ترتیب)</span><List items={data.start} /></div>
          <div className="detail-block"><span className="detail-label">چطور درست یاد بگیرم؟</span><List items={data.how} /></div>
        </div>
        <div className="resource-note"><Info size={13} /> {T(data.note)}</div>
        <div className="resource-links"><a href={data.url} target="_blank" rel="noreferrer">{T(`باز کردن ${data.name}`)} <ExternalLink size={14} /></a></div>
      </section>
    </div>
  );
}

export default function Guide({ currentStage }) {
  const [tab, setTab] = useState('path');
  return (
    <div className="page-stack">
      <section className="page-intro">
        <div><span className="section-kicker">PRACTICE GUIDE</span><h1>راهنمای تمرین و ماندگاری</h1><p>{T('چطور در مسیر بمانی، در هر مرحله چه کاری انجام بدهی و از TryHackMe و Hack The Box چطور استفاده کنی.')}</p></div>
      </section>

      <div className="guide-tabs" role="tablist" aria-label="بخش‌های راهنما">
        {tabs.map((item) => (
          <button key={item.id} type="button" role="tab" aria-selected={tab === item.id} className={tab === item.id ? 'active' : ''} onClick={() => setTab(item.id)}>{T(item.label)}</button>
        ))}
      </div>

      {tab === 'path' && (
        <>
          <section className="panel guide-panel">
            <div className="panel-heading"><div><span className="section-kicker">STAY IN THE GAME</span><h2>چطور رها نکنم؟</h2></div><Lightbulb size={19} className="subtle-icon" /></div>
            <div className="detail-columns">
              {habits.map(([title, text]) => <div className="detail-block" key={title}><span className="detail-label">{T(title)}</span><p>{T(text)}</p></div>)}
            </div>
          </section>

          <section className="panel guide-panel">
            <div className="panel-heading"><div><span className="section-kicker">STAGE BY STAGE</span><h2>به هر مرحله رسیدم چه کنم؟</h2></div><Target size={19} className="subtle-icon" /></div>
            <div className="guide-stage-list">
              {stageGuides.map((item, index) => (
                <article className={`guide-stage ${currentStage === item.stage ? 'guide-stage-current' : ''}`} key={item.stage}>
                  <div className="guide-stage-head"><span className="stage-count">۰{index + 1}</span><h3>{T(item.stage)}</h3>{currentStage === item.stage && <span className="guide-current-tag">مرحلهٔ فعلی تو</span>}</div>
                  <p className="guide-text">{T(item.goal)}</p>
                  <span className="detail-label">کارهای عملی</span>
                  <List items={item.do} />
                  <div className="practice-panel"><div className="practice-heading"><Flag size={16} /><strong>نشانهٔ آمادگی برای مرحلهٔ بعد</strong></div><p>{T(item.done)}</p></div>
                </article>
              ))}
            </div>
          </section>
        </>
      )}

      {tab === 'thm' && <Platform data={platforms.thm} />}
      {tab === 'htb' && <Platform data={platforms.htb} />}

      <div className="safety-strip"><ShieldCheck size={18} /><div><strong>قانون همیشگی</strong><p>فقط روی ماشین‌ها و لب‌هایی تمرین کن که پلتفرم یا خودت برای این کار ساخته‌ای. هیچ سیستم واقعی دیگری را هدف قرار نده.</p></div></div>
    </div>
  );
}
