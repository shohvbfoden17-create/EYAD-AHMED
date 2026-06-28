const qrInput = document.getElementById("qrInput");
const generateBtn = document.getElementById("generateBtn");
const downloadBtn = document.getElementById("downloadBtn");
const qrResult = document.getElementById("qrResult");

let qrCode = null;

/* ========================= */
/* Generate QR */
/* ========================= */

if (generateBtn) {

generateBtn.addEventListener("click", generateQR);

}

function generateQR() {

const text = qrInput.value.trim();

if (text === "") {

const lang = localStorage.getItem("language") || "ar";

alert(lang === "en"
? "Please enter text or a link."
: "يرجى إدخال نص أو رابط.");

qrInput.focus();

return;

}

qrResult.innerHTML = "";

downloadBtn.style.display = "none";

qrCode = new QRCode(qrResult, {

text: text,

width: 250,

height: 250,

colorDark: "#111827",

colorLight: "#ffffff",

correctLevel: QRCode.CorrectLevel.H

});

setTimeout(() => {

const img = qrResult.querySelector("img");
const canvas = qrResult.querySelector("canvas");

if (img) {

downloadBtn.href = img.src;
downloadBtn.download = "qr-code.png";
downloadBtn.style.display = "inline-flex";

}

if (canvas) {

downloadBtn.href = canvas.toDataURL("image/png");
downloadBtn.download = "qr-code.png";
downloadBtn.style.display = "inline-flex";

}

}, 150);

}

/* ========================= */
/* Generate With Enter Key */
/* ========================= */

if (qrInput) {

qrInput.addEventListener("keydown", (event) => {

if (event.key === "Enter") {

generateQR();

}

});

}

/* ========================= */
/* Auto Focus */
/* ========================= */

window.addEventListener("load", () => {

if (qrInput) {

qrInput.focus();

}

});