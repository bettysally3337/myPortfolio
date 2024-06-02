let nav = document.querySelector("nav");

window.addEventListener("scroll", () => {
  if (window.scrollY == 0) {
    nav.style.boxShadow = "";
  } else {
    nav.style.boxShadow = "0 10px 6px -6px #777";
  }
});

let buttons = document.querySelector(".presentation-buttons");
let embedDiv = document.querySelector(".embed-div");
buttons.addEventListener("click", (e) => {
  console.log(e.target.id);
  if (e.target.id == "presentation1") {
    embedDiv.innerHTML =
      '<embed src="./presentation/資料庫管理期末書面報告_主題為台灣全國疫苗施打紀錄.pdf" type="">';
  } else if (e.target.id == "presentation2") {
    embedDiv.innerHTML =
      '<embed src="./presentation/醫觸即發_專題展覽報告.pdf" type="">';
  } else if (e.target.id == "presentation3") {
    embedDiv.innerHTML =
      '<embed src="./presentation/物聯網第21組小專.pdf" type="">';
  }
});
