const suralar = document.querySelector(".suralar");
const audio = document.querySelector("audio");
const newPage = document.querySelector(".new-page");
const oyatlar = document.querySelector(".oyat-taxt");
const oyatText = document.querySelector(".oyatlar");
const input = document.querySelector(".seach--input");

const tt = document.querySelector(".tt");
console.log(tt);

let api = async function () {
  const dd = await fetch(`https://api.quran.sutanlab.id/surah`);
  const bb = await dd.json();

  console.log(bb.data);
  if (input.value == "") {
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

      surahName.addEventListener("click", async function () {
        // suralar.classList.toogle("hide");
        // oyatText.classList.toogle("width");

        oyatText.textContent = "";
        let aniq = surahName.id;
        const aa = fetch(`https://api.quran.sutanlab.id/surah/${aniq}`)
          .then((res) => {
            return res.json();
          })
          .then((res) => {
            console.log(res.data.verses);
            res.data.verses.forEach((element) => {
              let html1 = `
              <div class="oyat-taxt "><p class="taxt">
              <span class="number">${element.number.inSurah}</span> ${element.text.arab} <br> <br> <br>   ${element.text.transliteration.en}<br> <br> <br> <br> 
              ${element.tafsir.id.short} <br> <br> <br>   
            </p>
            <audio controls>
              <source
                class="tt"
                src="${element.audio.secondary[0]}"
              />
            </audio></div>`;
              // element;
              oyatText.insertAdjacentHTML("beforeend", html1);
            });
          });

        console.log(aa);
        if (window.innerWidth < 600) {
          suralar.style.display = "none";
          console.log(window.innerWidth);
          oyatText.classList.add("popup");
        }
      });
    });
  }

  input.addEventListener("input", function () {
    suralar.textContent = "";

    let searchObj = bb.data.find((el) => {
      return el.name.transliteration.id.includes(input.value);
    });
    let html3 = ` <div id="${searchObj.number}"  class="surah-name">  
    <h2 class="heading-secondry">${searchObj.number}.${searchObj.name.transliteration.id}</h2>
    <br />
    <h2 class="heading-secondry">${searchObj.name.long}</h2>
  </div>  `;
    suralar.insertAdjacentHTML("afterbegin", html3);
    console.log(searchObj);
  });
};
let i = 1;

api();
