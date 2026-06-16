const btn = document.getElementById("themeBtn");

btn.onclick = function(){

document.body.classList.toggle("dark-mode");

btn.classList.toggle("active");

if(document.body.classList.contains("dark-mode")){

btn.innerHTML = "☀️";

}else{

btn.innerHTML = "🌙";

}

}