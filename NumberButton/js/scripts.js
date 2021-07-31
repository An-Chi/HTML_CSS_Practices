document.addEventListener("DOMContentLoaded", () => {
  // 1.
  let btnGroups = document.querySelector("#buttonGroup").querySelectorAll('button');
  let displayResult = document.querySelector("#displayResult");
  // let buttonLength = btnGroups.length;
  // let clickedValue = displayResult;
  // clickedValue.style.overflow = "scroll";
  // console.log(clickedValue.scrollWidth);
  let concatNum = "";
  // let limitedContent = displayResult.getBoundingClientRect();
  // console.log(limitedContent);
  // displayResult.innerHTML = 0;
  // clickedValue.style.display = "none";
  btnGroups.forEach((element, index) => {
    // console.log(btnGroups[index].innerHTML);
    btnGroups[index].addEventListener("click", () => {
      // console.log(btnGroups);
      // console.log(concatNum.length); // 23 or 26

      if (btnGroups[index].id === "ac") {
        displayResult.innerHTML = 0;
        concatNum = "";
      } else {
        // 23字不對 因為數字本身的寬度不一，1 寬度比較窄(可以26字)，所以到第23個字時也沒有填滿div
        // 所以單純計算字數的方式不算解決了 字體溢出(overflow) 的問題.
        if (concatNum.length >= 23 && btnGroups[index].id !== "1") {
          console.log(btnGroups[index].id); // TEST
          return;
          // 按別的數字，後面都按1 也可以到26個字 但是會壓到div的 padding | TODO 待解決
          // 如果不考慮 DIV寬度偵測，單用數字顯示幾個會壓到padding 的話，應可用 Array.prototype.includes() 
        } else if (concatNum.length >= 26 && btnGroups[index].id === "1") {
          // console.log(clickedValue.scrollWidth);
          console.log(btnGroups[index].id); // TEST
          return;
        } else {
          // console.log(`${concatNum}+++`);
          concatNum = concatNum.concat(btnGroups[index].innerHTML);
          // console.log(`${concatNum}`);
          displayResult.innerHTML = concatNum;
        }
      }
    });

  }); // End of function (element, index)

}); // End Of document.ready | DOMContentLoaded
