document.addEventListener("DOMContentLoaded", () => {
  document.querySelector("#productArea").addEventListener("click", (e) => {
    e.preventDefault()
    // 實作寫在這裡

      let products = document.querySelector("#productArea");
      let data = e.target.dataset;
      if(data.productId !== "undefined"){
        let li = document.createElement("li");
        let list = document.querySelector(".list");
        li.textContent = data.productId;
        list.appendChild(li);
      }
  })
})