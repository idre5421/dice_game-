// Тоглоом дууссан эсхийг харуул
var isNewGame;
//Тоглоомын хувьсагч нарыг энд зарлий

var activePlayer;
//Хоёр тоглогчийн цуглуулсан оноо
var scores;
//Идэвхтэй тоглогчийн цуглуулж байгаа оноо
var roundScore;

//Тоглоомыг эхлүүлнэ
initGame();

//Шооны зургийг үзүүлэх элементийг ДОМ оос хайж олоод энд хадгалья
var diceDom = document.querySelector(".dice");
// Тоглоомыг шинээр эхлэх
function initGame() {
  isNewGame = true;
  // Тоглогчийн ээлжийг хадгалах хувьсагч , нэгдүгээр тоглогч 0 ,хоёрдугаар тоглогч 1
  activePlayer = 0;

  // Тоглогчидын цуглуулсан оноог хадгалах хувьсагч
  scores = [0, 0];
  //Тоглогчийн цуглуулж байгаа оноог цуглуулах хувьсагч
  roundScore = 0;

  //Програмаа эхлий

  document.getElementById("score-0").textContent = "0";
  document.getElementById("score-1").textContent = "0";
  document.getElementById("current-0").textContent = "0";
  document.getElementById("current-1").textContent = "0";

  //Тоглогчийн нэрийг буцаан гаргах
  document.getElementById("name-0").textContent = "Player 1";
  document.getElementById("name-1").textContent = "Player 2";

  document.querySelector(".player-0-panel").classList.remove("winner");
  document.querySelector(".player-1-panel").classList.remove("winner");
  document.querySelector(".player-0-panel").classList.remove("active");
  document.querySelector(".player-1-panel").classList.remove("active");
  document.querySelector(".player-0-panel").classList.add("active");
  //diceDom.style.display = "none";
}

//Шоог шидэх эвент листэнэр
document.querySelector(".btn-roll").addEventListener("click", function() {
  if (isNewGame === true) {
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
      document.getElementById(
        "current-" + activePlayer
      ).textContent = roundScore;
    } else {
      //Энэ ээлжийн цуглуулсан оноог нойл болгоноо
      switchToNextPlayer();
    }
  }
});

// HOLD товчны эвент листенэр
document.querySelector(".btn-hold").addEventListener("click", function() {
  if (isNewGame) {
    //Уг тоглуулагчийн цуглуулсан ээлжний оноог глобал оноо нь дээр нэм
    scores[activePlayer] = scores[activePlayer] + roundScore;

    //Дэлгэц дээрх оноог өөрчил
    document.getElementById("score-" + activePlayer).textContent =
      scores[activePlayer];

    //Уг тоглогч хожсон эсхийг(100 хүрсэн нь ялагч болно) шалгах
    if (scores[activePlayer] >= 100) {
      // Тоглоомын дууссан төлөвийг оруул
      isNewGame = false;
      //Ялагч гэсэн тестийн оронд гаргана.
      document.getElementById("name-" + activePlayer).textContent = "WINNER";
      document
        .querySelector(".player-" + activePlayer + "-panel")
        .classList.add("winner");
      document
        .querySelector(".player-" + activePlayer + "-panel")
        .classList.remove("active ");
    } else {
      // Тоглогчийн ээлжийг соль\
      switchToNextPlayer();
    }
  }
});
// Энэ функцийн тоглох ээлжийг дараачийн ээлжрүү шилжүүл
function switchToNextPlayer() {
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
}
// Шинэ тоглоом эхлүүлэх эвент листенэр
document.querySelector(".btn-new").addEventListener("click", initGame);
