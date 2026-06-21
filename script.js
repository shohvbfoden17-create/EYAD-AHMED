const themeBtn = document.getElementById("themeBtn");
const langBtn = document.getElementById("langBtn");

/* الوضع الليلي */

if(localStorage.getItem("theme") === "dark"){

document.body.classList.add("dark-mode");

if(themeBtn){
themeBtn.innerHTML = "☀️";
}

}

if(themeBtn){

themeBtn.addEventListener("click", () => {

document.body.classList.toggle("dark-mode");

if(document.body.classList.contains("dark-mode")){

localStorage.setItem("theme","dark");

themeBtn.innerHTML = "☀️";

}else{

localStorage.setItem("theme","light");

themeBtn.innerHTML = "🌙";

}

});

}

/* اللغة */

let language = localStorage.getItem("language") || "ar";

applyLanguage();

if(langBtn){

langBtn.addEventListener("click", () => {

if(language === "ar"){

language = "en";

}else{

language = "ar";

}

localStorage.setItem("language", language);

applyLanguage();

});

}

function applyLanguage(){

if(language === "en"){

if(langBtn) langBtn.innerHTML = "العربية";

/* الصفحة الرئيسية */

if(document.getElementById("title"))
document.getElementById("title").innerHTML =
"Welcome 👋";

if(document.getElementById("name"))
document.getElementById("name").innerHTML =
"I am Eyad Ahmed";

/* صفحة About */

if(document.getElementById("AboutName"))
document.getElementById("AboutName").innerHTML =
"Eyad Ahmed";

if(document.getElementById("age"))
document.getElementById("age").innerHTML =
"Age: 15 Years";

if(document.getElementById("grade"))
document.getElementById("grade").innerHTML =
"📚 Grade: First Secondary";

if(document.getElementById("nation"))
document.getElementById("nation").innerHTML =
"🌍 Nationality: Egyptian";

if(document.getElementById("city"))
document.getElementById("city").innerHTML =
"📍 City: Ismailia";

if(document.getElementById("learn"))
document.getElementById("learn").innerHTML =
"💻 Learning Programming And Web Design";

if(document.getElementById("interest"))
document.getElementById("interest").innerHTML =
"🎯 Interested In Technology, Mathematics, Science And Programming";

if(document.getElementById("homeLink"))
document.getElementById("homeLink").innerHTML =
"Home";

if(document.getElementById("aboutLink"))
document.getElementById("aboutLink").innerHTML =
"About";

if(document.getElementById("footerHome"))
document.getElementById("footerHome").innerHTML =
"Home";

if(document.getElementById("footerAbout"))
document.getElementById("footerAbout").innerHTML =
"About";

}else{

if(langBtn) langBtn.innerHTML = "English";

/* الصفحة الرئيسية */

if(document.getElementById("title"))
document.getElementById("title").innerHTML =
"مرحباً 👋";

if(document.getElementById("name"))
document.getElementById("name").innerHTML =
"أنا إياد أحمد";

/* صفحة About */

if(document.getElementById("AboutName"))
document.getElementById("AboutName").innerHTML =
"إياد أحمد";

if(document.getElementById("age"))
document.getElementById("age").innerHTML =
"العمر: 15 سنة";

if(document.getElementById("grade"))
document.getElementById("grade").innerHTML =
"📚 الصف الدراسي: أولى ثانوي عام";

if(document.getElementById("nation"))
document.getElementById("nation").innerHTML =
"🌍 الجنسية: مصري";

if(document.getElementById("city"))
document.getElementById("city").innerHTML =
"📍 البلد: الإسماعيلية";

if(document.getElementById("learn"))
document.getElementById("learn").innerHTML =
"💻 بتعلم برمجة وتصميم مواقع";

if(document.getElementById("interest"))
document.getElementById("interest").innerHTML =
"🎯 مهتم بالتكنولوجيا والرياضيات والعلوم والبرمجة";


if(document.getElementById("homeLink"))
document.getElementById("homeLink").innerHTML =
"الرئيسية";

if(document.getElementById("aboutLink"))
document.getElementById("aboutLink").innerHTML =
"عنّي";

if(document.getElementById("footerHome"))
document.getElementById("footerHome").innerHTML =
"الرئيسية";

if(document.getElementById("footerAbout"))
document.getElementById("footerAbout").innerHTML =
"عنّي";

}

}

const menuBtn = document.getElementById("menuBtn");
const menu = document.getElementById("menu");

if(menuBtn){

menuBtn.addEventListener("click", () => {

menu.classList.toggle("show");

});

}