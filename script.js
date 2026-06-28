const themeBtn = document.getElementById("themeBtn");
const langBtn = document.getElementById("langBtn");

/* ========================= */
/* Theme */
/* ========================= */

if (localStorage.getItem("theme") === "dark") {

document.body.classList.add("dark-mode");

if (themeBtn) themeBtn.innerHTML = "☀️";

}

if (themeBtn) {

themeBtn.addEventListener("click", () => {

document.body.classList.toggle("dark-mode");

if (document.body.classList.contains("dark-mode")) {

localStorage.setItem("theme", "dark");

themeBtn.innerHTML = "☀️";

} else {

localStorage.setItem("theme", "light");

themeBtn.innerHTML = "🌙";

}

});

}

/* ========================= */
/* Language */
/* ========================= */

let language = localStorage.getItem("language") || "ar";

applyLanguage();

if (langBtn) {

langBtn.addEventListener("click", () => {

language = language === "ar" ? "en" : "ar";

localStorage.setItem("language", language);

applyLanguage();

});

}

function setText(id, text) {

const element = document.getElementById(id);

if (element) element.innerHTML = text;

}

function applyLanguage() {

const isEnglish = language === "en";

document.documentElement.lang = isEnglish ? "en" : "ar";
document.documentElement.dir = isEnglish ? "ltr" : "rtl";

document.body.classList.toggle("english", isEnglish);
document.body.classList.toggle("arabic", !isEnglish);

if (langBtn) langBtn.innerHTML = isEnglish ? "العربية" : "English";

/* ========================= */
/* Home */
/* ========================= */

setText("title", isEnglish ? "Welcome 👋" : "مرحباً 👋");

setText("name", isEnglish ? "I am Eyad Ahmed" : "أنا إياد أحمد");

/* ========================= */
/* About */
/* ========================= */

setText("AboutName", isEnglish ? "Eyad Ahmed" : "إياد أحمد");

setText("age", isEnglish ? "Age: 15 Years" : "العمر: 15 سنة");

setText("grade", isEnglish ? "📚 Grade: First Secondary" : "📚 الصف الدراسي: أولى ثانوي عام");

setText("nation", isEnglish ? "🌍 Nationality: Egyptian" : "🌍 الجنسية: مصري");

setText("city", isEnglish ? "📍 City: Ismailia" : "📍 البلد: الإسماعيلية");

setText("learn", isEnglish ? "💻 Learning Programming And Web Design" : "💻 بتعلم برمجة وتصميم مواقع");

setText("interest", isEnglish ? "🎯 Interested In Technology, Mathematics, Science And Programming" : "🎯 مهتم بالتكنولوجيا والرياضيات والعلوم والبرمجة");

/* ========================= */
/* Navigation */
/* ========================= */

setText("homeLink", isEnglish ? "Home" : "الرئيسية");

setText("aboutLink", isEnglish ? "About" : "عنّي");

setText("toolsLink", isEnglish ? "Tools" : "الأدوات");

setText("toolsTitle", isEnglish ? "Tools" : "الأدوات");

setText("footerHome", isEnglish ? "Home" : "الرئيسية");

setText("footerAbout", isEnglish ? "About" : "عنّي");

setText("footerTools", isEnglish ? "Tools" : "الأدوات");

/* ========================= */
/* Guide Page */
/* ========================= */

setText("backArrow", isEnglish ? "←" : "→");

setText("backText", isEnglish ? "Back to Tools" : "الرجوع لقائمة الأدوات");

setText("guideTitle", isEnglish ? "QR Generator" : "منشئ رمز QR");

setText("whatTitle", isEnglish ? "What is QR Generator?" : "ما هي أداة QR Generator؟");

setText("whatText", isEnglish ?
"This tool allows you to create QR Codes instantly for websites, text, phone numbers, email addresses and many other types of data. The generated QR Code can be scanned by almost any smartphone camera or QR scanner."
:
"تتيح لك هذه الأداة إنشاء رموز QR بشكل فوري للروابط، والنصوص، وأرقام الهواتف، وعناوين البريد الإلكتروني، والعديد من أنواع البيانات الأخرى. ويمكن قراءة الرمز باستخدام معظم كاميرات الهواتف الذكية أو تطبيقات قراءة رموز QR."
);

setText("doesTitle", isEnglish ? "What Does It Do?" : "ماذا تقوم به؟");

setText("doesText", isEnglish ?
"It converts your information into a QR Code that can be shared digitally or printed. Anyone who scans the code will instantly access the stored content without typing it manually."
:
"تقوم الأداة بتحويل البيانات التي تدخلها إلى رمز QR يمكن مشاركته أو طباعته، بحيث يستطيع أي شخص مسحه للوصول إلى المحتوى مباشرة دون الحاجة إلى كتابته يدوياً."
);

setText("featuresTitle", isEnglish ? "Main Features" : "أهم المميزات");

setText("featuresText", isEnglish ?
"• Fast QR generation.<br>• Easy to use.<br>• High-quality output.<br>• Works on computers and phones.<br>• Free with no registration."
:
"• إنشاء سريع لرموز QR.<br>• سهلة الاستخدام.<br>• جودة عالية للرموز.<br>• تعمل على الكمبيوتر والهاتف.<br>• مجانية ولا تحتاج إلى تسجيل."
);

setText("howTitle", isEnglish ? "How to Use" : "طريقة الاستخدام");

setText("howText", isEnglish ?
"1. Enter your content.<br>2. Click Generate.<br>3. Preview the QR Code.<br>4. Download the image.<br>5. Share or print it."
:
"1. أدخل البيانات التي تريد تحويلها.<br>2. اضغط على زر إنشاء.<br>3. راجع رمز QR الناتج.<br>4. قم بتنزيل الصورة.<br>5. شاركها أو اطبعها."
);

setText("compareTitle", isEnglish ? "Advantages Over Traditional Methods" : "المميزات مقارنة بالطرق التقليدية");

setText("compareText", isEnglish ?
"QR Codes are much faster than typing long links or contact information manually. They also reduce typing mistakes and improve user experience."
:
"تُعد رموز QR أسرع بكثير من كتابة الروابط أو البيانات يدوياً، كما تقلل من أخطاء الكتابة وتوفر تجربة استخدام أسهل وأسرع."
);

setText("safeTitle", isEnglish ? "Is It Safe?" : "هل الأداة آمنة؟");

setText("safeText", isEnglish ?
"Yes. Your data is processed only to generate the QR Code. If the tool works locally in your browser, your information is not sent to external servers."
:
"نعم. يتم استخدام البيانات فقط لإنشاء رمز QR. وإذا كانت الأداة تعمل محلياً داخل المتصفح فلن يتم إرسال بياناتك إلى أي خادم خارجي."
);

setText("faqTitle", isEnglish ? "Frequently Asked Questions" : "الأسئلة الشائعة");

setText("faqText", isEnglish ?
"<strong>• Can I create unlimited QR Codes?</strong><br>Yes, you can generate as many QR Codes as you want.<br><br><strong>• Does it work on phones?</strong><br>Yes, it works on phones, tablets and computers.<br><br><strong>• Does a QR Code expire?</strong><br>No. As long as the stored content is available, the QR Code will continue to work."
:
"<strong>• هل يمكن إنشاء عدد غير محدود من رموز QR؟</strong><br>نعم، يمكنك إنشاء أي عدد تريده.<br><br><strong>• هل تعمل الأداة على الهاتف؟</strong><br>نعم، تعمل على الهواتف والأجهزة اللوحية وأجهزة الكمبيوتر.<br><br><strong>• هل ينتهي رمز QR بعد فترة؟</strong><br>لا، طالما أن المحتوى المرتبط به ما زال متاحاً فسيستمر الرمز في العمل."
);

setText("tipsTitle", isEnglish ? "Tips for Best Results" : "نصائح للحصول على أفضل نتيجة");

setText("tipsText", isEnglish ?
"Use valid content, test the QR Code before sharing it, and download the image in high quality if you plan to print it."
:
"استخدم بيانات صحيحة، واختبر رمز QR قبل مشاركته، وقم بتنزيله بجودة عالية إذا كنت تنوي طباعته."
);

setText("openTool", isEnglish ? "Open Tool" : "فتح الأداة");

/* ========================= */
/* Tool Page */
/* ========================= */

setText("toolTitle", isEnglish ? "QR Generator" : "منشئ رمز QR");

setText("toolDescription",
isEnglish ?
"Create QR Codes instantly for links, text, email addresses, phone numbers and more."
:
"أنشئ رموز QR بسهولة للروابط والنصوص والبريد الإلكتروني وأرقام الهواتف وغيرها."
);

setText("inputLabel",
isEnglish ?
"Enter Text or URL"
:
"أدخل النص أو الرابط"
);

const qrInput = document.getElementById("qrInput");

if (qrInput) {

qrInput.placeholder = isEnglish ?
"https://example.com"
:
"اكتب النص أو الرابط هنا";

}

setText("generateBtn",
isEnglish ?
"Generate QR Code"
:
"إنشاء رمز QR"
);

setText("downloadBtn",
isEnglish ?
"Download"
:
"تحميل الرمز"
);

setText("notesTitle",
isEnglish ?
"Notes"
:
"ملاحظات"
);

setText("notesText",
isEnglish ?
"Make sure your content is correct before generating the QR Code. Test it before sharing or printing."
:
"تأكد من صحة البيانات قبل إنشاء رمز QR، ثم اختبره قبل مشاركته أو طباعته."
);

/* تغيير زر الرجوع في صفحة الأداة */

const backLink = document.querySelector(".tool-page .back-link");

if (backLink) {

setText("backText", isEnglish ? "Back to Guide" : "الرجوع لشرح الأداة");

setText("backArrow", isEnglish ? "←" : "→");

}

}



/* ========================= */
/* Menu */
/* ========================= */

const menuBtn = document.getElementById("menuBtn");
const menu = document.getElementById("menu");

if (menuBtn && menu) {

menuBtn.addEventListener("click", (event) => {

event.stopPropagation();

menu.classList.toggle("show");

});

document.addEventListener("click", (event) => {

if (menu.classList.contains("show") && !menu.contains(event.target)) {

menu.classList.remove("show");

}

});

}

/* ========================= */
/* Close Menu After Clicking Link */
/* ========================= */

if (menu) {

const links = menu.querySelectorAll("a");

links.forEach((link) => {

link.addEventListener("click", () => {

menu.classList.remove("show");

});

});

}

/* ========================= */
/* Keyboard Accessibility */
/* ========================= */

document.addEventListener("keydown", (event) => {

if (event.key === "Escape" && menu) {

menu.classList.remove("show");

}

});

/* ========================= */
/* End Of File */
/* ========================= */
