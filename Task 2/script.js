/* ------------------------------ TASK 2 ----------------------------
Parašykite JS kodą, kuris skaičiuos kiek kartų buvo paspaustas mygtukas
su tekstu "CLICK ME". Paspaudimų rezultatas turi būti matomas dešinėje
pusėje esančiame "state" skaičiavimo bloke (<div id="btn__state">0</div>)
------------------------------------------------------------------- */
const countBt = document.getElementById("btn__element");
let countNum = document.getElementById("btn__state");

countBt.addEventListener("click", countUp);

function countUp() {
  countNum.innerHTML++;
}
