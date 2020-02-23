// Тоглогчийн ээлжийг хадгалах хувьсагч , нэгдүгээр тоглогч 0 хоёрдугаар тоглогч 1
var activePlayer = 1;

// Тоглогчидын цуглуулсан оноог хадгалах хувьсагч
var scores = [0, 0];
//Тоглогчийн цуглуулж байгаа оноог цуглуулах хувьсагч
var roundScore = 0;

// Шооны аль талаараа буусныг хадгалах хувьсагч хэрэгтэй , 1-6 гэсэн утгыг санамсаргүйгээр энэ хувьсагчид харуул
var dice = Math.floor(Math.random() * 6) + 1;

//<div class="player-score" id="score-0">43</div>
//window.document.querySelector("#score-0").textContent = dice;
//document.querySelector("#score-1").textContent = dice;
window.document.querySelector("#score-0").textContent = 0;
document.querySelector("#score-1").textContent = 0;
document.querySelector("#current-0").textContent = 0;
document.querySelector("#current-1").textContent = 0;
document.querySelector(".dice").style.display = "none";
console.log("Шоо : " + dice);
