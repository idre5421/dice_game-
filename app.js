// Тоглогчийн ээлжийг хадгалах хувьсагч , нэгдүгээр тоглогч 0 ,хоёрдугаар тоглогч 1
var activePlayer = 0;

// Тоглогчидын цуглуулсан оноог хадгалах хувьсагч
var scores = [0, 0];
//Тоглогчийн цуглуулж байгаа оноог цуглуулах хувьсагч
var roundScore = 0;

// Шооны аль талаараа буусныг хадгалах хувьсагч хэрэгтэй , 1-6 гэсэн утгыг санамсаргүйгээр энэ хувьсагчид харуул

//Програмаа эхлий

document.getElementById("score-0").textContent = "0";
document.getElementById("score-1").textContent = "0";
document.getElementById("current-0").textContent = "0";
document.getElementById("current-1").textContent = "0";
var diceDom = document.querySelector(".dice");
diceDom.style.display = "none";
//Шоог шидэх эвент листэнэр
document.querySelector(".btn-roll").addEventListener("click", function() {
  //1-6 хооронд санамсаргүй тоо гаргаж авна
  var diceNumber = Math.floor(Math.random() * 6) + 1;
  //Шооны зургийг вэб дээр гаргаж ирэх
  diceDom.style.display = "block";
  // Буусан санамсаргүй тоонд харгалзах шооны зургийг эвент дээр гаргаж ирнэ
  diceDom.src = "dice-" + diceNumber + ".png";
  // Буусан тоо нь 1 ээс ялгаатай бол идэвхитэй тоглогчийн оноог нэмэгдүүлнээ.
  if (diceNumber !== 1) {
    // 1ээс ялгаатай тоо буулга
    roundScore = roundScore + diceNumber;
    document.getElementById("current-" + activePlayer).textContent = roundScore;
  } else {
    //Энэ ээлжийн цуглуулсан оноог нойл болгоноо
    roundScore = 0;
    document.getElementById("current-" + activePlayer).textContent = 0;

    // Тоглогчийн ээлжиийг нөгөө тоглогчруу шилжүүлнэ
    // энэ хэсэгт тоглогчийн ээлжийг сольж өгнө үү
    // хэрэв идэвхтэй тоглогч 0 бол түүнийг 1 болго
    // Үгүй бол 0 болго
    activePlayer === 0 ? (activePlayer = 1) : (activePlayer = 0);
    // Улаан цэгийг шилжүүлэх код
    document.querySelector(".player-0-panel").classList.toggle("active");
    document.querySelector(".player-1-panel").classList.toggle("active");

    //Шоог түр алга болгий
    diceDom.style.display = "none";

    // if (activePlayer === 0) {
    //activePlayer= 1;
    // else{
    //    activePlayer =0;
    //}

    // }
  }
});
