const suralar = document.querySelector(".suralar");
const audio = document.querySelector("audio");
const newPage = document.querySelector(".new-page");
const oyatlar = document.querySelector(".oyat-taxt");
const oyatText = document.querySelector(".oyatlar");

const tt = document.querySelector(".tt");
console.log(tt);

let api = async function () {
  const dd = await fetch("https://api.quran.sutanlab.id/surah");
  const bb = await dd.json();
  bb.data.reverse();
  bb.data.forEach((element) => {
    i++;
    let html = ` <div id="${element.number}"  class="surah-name">  
      <h2 class="heading-secondry">${element.number}.${element.name.transliteration.id}</h2>
      <br />
      <h2 class="heading-secondry">${element.name.long}</h2>
    </div>  `;
    suralar.insertAdjacentHTML("afterbegin", html);
    const surahName = document.querySelector(".surah-name");
    surahName.addEventListener("click", function () {
      let aniq = surahName.id;
      console.log(aniq);
      let pop = bb.data.find((el) => {
        return el.number == aniq;
      });
      console.log(pop);
    });
  });
};
let i = 1;

api();
