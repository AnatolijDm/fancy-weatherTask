!function(e){var t={};function n(l){if(t[l])return t[l].exports;var a=t[l]={i:l,l:!1,exports:{}};return e[l].call(a.exports,a,a.exports,n),a.l=!0,a.exports}n.m=e,n.c=t,n.d=function(e,t,l){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:l})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var l=Object.create(null);if(n.r(l),Object.defineProperty(l,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)n.d(l,a,function(t){return e[t]}.bind(null,a));return l},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="dist/",n(n.s=0)}([function(e,t,n){"use strict";n.r(t);let l=0;let a=document.querySelector("#languageRu"),o=document.querySelector("#languageEn"),r=document.querySelector("#languageBe");function c(){a.style.display="none",o.style.display="block",r.style.display="none",document.querySelector(".lang").style.display="none",localStorage.setItem("displayL","block"),localStorage.setItem("displayLa","none"),localStorage.setItem("displayLan","none"),localStorage.setItem("lang","?lang=en")}const u="https://api.opencagedata.com/geocode/v1/json?",s="&key=85997c23fa5046499a421241d902d3b2",d="7cae3891212243c6653d4e8e6cf14477/",i=document.getElementById("city"),g=document.getElementById("weather");async function y(e,t,n,l,a,o,r,c){const y=await fetch("https://ipinfo.io/json?token=1b397c90e9c6ac").then(e=>e.json()).then(e=>e);localStorage.setItem("currentCity",`${y.city}`);let m="q="+localStorage.getItem("setCity");function p(e,t){const n=y.loc;let l="";for(let a=e;a<=t;a++)l+=n[a];return l}localStorage.setItem("locationLat",`${p(0,6)}`),localStorage.setItem("locationLon",`${p(8,14)}`);const S=await fetch(u+m+s).then(e=>e.json()).then(e=>e);localStorage.setItem("locationLat",`${S.results[0].geometry.lat}`),localStorage.setItem("locationLon",`${S.results[0].geometry.lng}`),async function(){let e=S.results[0].geometry.lng,t=S.results[0].geometry.lat;new google.maps.Map(document.querySelector("#city-map"),{center:{lat:+t,lng:+e},zoom:12}),document.querySelector("#location").innerHTML="lat: "+`${t}`+", lng: "+`${e}`+";"}();const f=await function(){const e="https://api.darksky.net/forecast/"+d+localStorage.getItem("locationLat")+","+localStorage.getItem("locationLon")+a;return fetch("https://cors-anywhere.herokuapp.com/"+e).then(e=>e.json()).then(e=>e)}();i.innerHTML=l+f.timezone,document.querySelector("#Time").innerHTML=function(e){let t,n=new Date(1e3*e);"?lang=en"===localStorage.getItem("lang")?t=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"]:"?lang=ru"===localStorage.getItem("lang")?t=["Января","Февраля","Марта","Апреля","Мая","Июня","Июля","Августа","Сентября","Октября","Ноября","Декабря"]:"?lang=be"===localStorage.getItem("lang")&&(t=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"]);let l=n.getFullYear(),a=t[n.getMonth()],o=n.getDate(),r=n.getHours(),c=n.getMinutes(),u=n.getSeconds();return o+" "+a+" "+l+" "+r+":"+c+":"+u}(f.currently.time),document.querySelector("#icon").style.background="url(https://darksky.net/images/weather-icons/"+`${f.currently.icon}`+".png)",g.innerHTML=f.currently.summary+", "+((f.currently.temperature-e)/t).toFixed(1)+" "+n,document.querySelector("#lang-text").innerHTML=o,document.querySelector("#temp-text").innerHTML=r,document.querySelector("#current_place").innerHTML=c}let m=0;let p=document.querySelector("#temperatureC"),S=document.querySelector("#temperatureF");function f(){p.style.display="block",S.style.display="none",document.querySelector(".temp").style.display="none",localStorage.setItem("displayP","block"),localStorage.setItem("displayN","none"),y(1,-273.15,"C")}const b=document.querySelector(".wrapper");async function I(){const e=await fetch("https://api.unsplash.com/photos/random?orientation=landscape&per_page=1&query=nature&client_id=d837c1d59b1ea1790d6e8be28c64938d668469f46d7b6e00a8936f1cf9e6ad54").then(e=>e.json()).then(e=>e.urls.full);b.style.backgroundImage="url("+`${e}`+")"}const q="7cae3891212243c6653d4e8e6cf14477/";async function k(e,t,n,l){const a=await function(){const e="https://api.darksky.net/forecast/"+q+localStorage.getItem("locationLat")+","+localStorage.getItem("locationLon")+l;return fetch("https://cors-anywhere.herokuapp.com/"+e).then(e=>e.json()).then(e=>e)}();document.querySelector(".TimeFirstDay").innerHTML=L(a.daily.data[1].time),document.querySelector(".iconF").style.background="url(https://darksky.net/images/weather-icons/"+`${a.currently.icon}`+".png)",document.querySelector(".firstDay").innerHTML=a.daily.data[1].summary+", "+((a.daily.data[1].temperatureHigh-e)/t).toFixed(1)+" "+n,document.querySelector(".TimeSecondDay").innerHTML=L(a.daily.data[2].time),document.querySelector(".iconS").style.background="url(https://darksky.net/images/weather-icons/"+`${a.currently.icon}`+".png)",document.querySelector(".secondDay").innerHTML=a.daily.data[2].summary+", "+((a.daily.data[2].temperatureHigh-e)/t).toFixed(1)+" "+n,document.querySelector(".TimeThirdDay").innerHTML=L(a.daily.data[3].time),document.querySelector(".iconT").style.background="url(https://darksky.net/images/weather-icons/"+`${a.currently.icon}`+".png)",document.querySelector(".thirdDay").innerHTML=a.daily.data[3].summary+", "+((a.daily.data[3].temperatureHigh-e)/t).toFixed(1)+" "+n}function L(e){let t,n=new Date(1e3*e);"?lang=en"===localStorage.getItem("lang")?t=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"]:"?lang=ru"===localStorage.getItem("lang")?t=["Января","Февраля","Марта","Апреля","Мая","Июня","Июля","Августа","Сентября","Октября","Ноября","Декабря"]:"?lang=be"===localStorage.getItem("lang")&&(t=["Студзеня","Лютага","Сакавiка","Красавiка","Мая","Чэрвеня","Лiпеня","Жнiвеня","Верасня","Кастрычнiка","Лiстапада","Снежня"]);let l=n.getFullYear(),a=t[n.getMonth()];return n.getDate()+" "+a+" "+l+" "+n.getHours()+":"+n.getMinutes()+":"+n.getSeconds()}document.querySelector("#search--button").onclick=function(){localStorage.setItem("setCity",`${document.querySelector("#search").value}`)},document.querySelector("#current_place").onclick=function(){let e=localStorage.getItem("currentCity");localStorage.setItem("setCity",`${e}`),window.location.reload(!0)},window.onload=function(){null==localStorage.getItem("setCity")&&(localStorage.setItem("setCity","Minsk"),f(),c(),h()),null!==localStorage.getItem("displayP")&&null!==localStorage.getItem("displayN")&&(document.querySelector("#temperatureC").style.display=localStorage.getItem("displayP"),document.querySelector("#temperatureF").style.display=localStorage.getItem("displayN")),null!==localStorage.getItem("displayL")&&null!==localStorage.getItem("displayLa")&&(document.querySelector("#languageRu").style.display=localStorage.getItem("displayLa"),document.querySelector("#languageEn").style.display=localStorage.getItem("displayL")),null!==localStorage.getItem("displayLan")&&(document.querySelector("#languageBe").style.display=localStorage.getItem("displayLan")),h(),I()};{let e=document.querySelector(".lang--en"),t=document.querySelector(".lang--ru"),n=document.querySelector(".lang--be");document.querySelector(".language").addEventListener("click",(function(){0===l?(document.querySelector(".lang").style.display="block",l=1):1===l&&(document.querySelector(".lang").style.display="none",l=0),document.querySelector(".temp").style.display="none"})),e.addEventListener("click",(function(){c(),h()})),t.addEventListener("click",(function(){a.style.display="block",o.style.display="none",r.style.display="none",document.querySelector(".lang").style.display="none",localStorage.setItem("displayLa","block"),localStorage.setItem("displayL","none"),localStorage.setItem("displayLan","none"),localStorage.setItem("lang","?lang=ru"),h()})),n.addEventListener("click",(function(){a.style.display="none",o.style.display="none",r.style.display="block",document.querySelector(".lang").style.display="none",localStorage.setItem("displayLan","block"),localStorage.setItem("displayLa","none"),localStorage.setItem("displayL","none"),localStorage.setItem("lang","?lang=be"),h()})),e.addEventListener("mouseenter",()=>{document.querySelector(".lang--en").style.background="#99adf2"}),e.addEventListener("mouseleave",()=>{document.querySelector(".lang--en").style.background="#99caf8"}),t.addEventListener("mouseenter",()=>{document.querySelector(".lang--ru").style.background="#99adf2"}),t.addEventListener("mouseleave",()=>{document.querySelector(".lang--ru").style.background="#99caf8"}),n.addEventListener("mouseenter",()=>{document.querySelector(".lang--be").style.background="#99adf2"}),n.addEventListener("mouseleave",()=>{document.querySelector(".lang--be").style.background="#99caf8"})}{let e=document.querySelector(".temp--C"),t=document.querySelector(".temp--F");document.querySelector(".temperature").addEventListener("click",(function(){0===m?(document.querySelector(".temp").style.display="block",m=1):1===m&&(document.querySelector(".temp").style.display="none",m=0),document.querySelector(".lang").style.display="none"})),e.addEventListener("click",(function(){f(),h()})),t.addEventListener("click",(function(){S.style.display="block",p.style.display="none",document.querySelector(".temp").style.display="none",localStorage.setItem("displayP","none"),localStorage.setItem("displayN","block"),y(1.8,-459.67,"F"),h()})),e.addEventListener("mouseenter",()=>{document.querySelector(".temp--C").style.background="#99adf2"}),e.addEventListener("mouseleave",()=>{document.querySelector(".temp--C").style.background="#99caf8"}),t.addEventListener("mouseenter",()=>{document.querySelector(".temp--F").style.background="#99adf2"}),t.addEventListener("mouseleave",()=>{document.querySelector(".temp--F").style.background="#99caf8"})}function h(){"block"===localStorage.getItem("displayP")&&"?lang=en"===localStorage.getItem("lang")?(y(32,1.8,"C","Your current location: ","?lang=en","Language: ","Temperature in: ","Set my current place"),k(32,1.8,"C","?lang=en")):"block"===localStorage.getItem("displayP")&&"?lang=ru"===localStorage.getItem("lang")?(y(32,1.8,"C","Ваше место положение: ","?lang=ru","Язык: ","Температура в: ","Выбрать мое местоположение"),k(32,1.8,"C","?lang=ru")):"block"===localStorage.getItem("displayP")&&"?lang=be"===localStorage.getItem("lang")?(y(32,1.8,"C","Ваша месцазнаходжанне: ","?lang=be","Мова: ","Тэмпература ў: ","Выбраць маё месцазнаходжанне"),k(32,1.8,"C","?lang=be")):"block"===localStorage.getItem("displayN")&&"?lang=en"===localStorage.getItem("lang")?(y(1,1,"F","Your current location: ","?lang=en","Language: ","Temperature in: ","Set my current place"),k(1,1,"F","?lang=en")):"block"===localStorage.getItem("displayN")&&"?lang=ru"===localStorage.getItem("lang")?(y(1,1,"F","Ваше место положение: ","?lang=ru","Язык: ","Температура в: ","Выбрать мое местоположение"),k(1,1,"F","?lang=ru")):"block"===localStorage.getItem("displayN")&&"?lang=be"===localStorage.getItem("lang")&&(y(1,1,"F","Ваша месцазнаходжанне: ","?lang=be","Мова: ","Тэмпература ў: ","Выбраць маё месцазнаходжанне"),k(1,1,"F","?lang=be"))}}]);