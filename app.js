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
      '<h1>資料庫管理期末書面報告_主題為台灣全國疫苗施打紀錄</h1><div>使用Microsoft Access來製作各個資料表，並自行輸入隨機的資料，最後假設使用者會根據不同情況查詢資料操作一次</div><embed src="./presentation/資料庫管理期末書面報告_主題為台灣全國疫苗施打紀錄.pdf" type="">';
  } else if (e.target.id == "presentation2") {
    embedDiv.innerHTML =
      '<h1>畢業專題報告</h1><div>專題內容是使用Google訓練好的自然語言模型BERT，找到醫學文獻中的醫學專業詞彙後，再使用那些醫學專業詞彙詢問該篇醫學文獻中的研究新發現。我的工作內容包含最初想出不同形式的問題，詢問BERT提取的研究發現並計算正確率，以及使用python讓其自動去國家研究院的樂詞網查詢，BERT提取出來的詞彙是否為醫學專業詞彙。</div><embed src="./presentation/醫觸即發_專題展覽報告.pdf" type="">';
  } else if (e.target.id == "presentation3") {
    embedDiv.innerHTML =
      '<h1>物聯網課程期末報告</h1><div>使用Arduino及模擬器模擬屋子裡的濕度及風扇，到達溫度到達一定的高度時，電風扇會開啟；反之溫度降到一定的溫度時，電風扇會關閉。而當感測器感測到一定的亮度時，會顯示為白天，電燈(燈泡)會關閉；同樣當顯示為晚上時，代表感測器感測的亮度較低，電燈(燈泡)會自動開啟。</div><embed src="./presentation/物聯網第21組小專.pdf" type="">';
  }
});
