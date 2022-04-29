# 數字按鈕
    >流程、想法筆記
---

![Number Button 畫面](./images/displayNumber.png)


1. `div#displayResult` set zero as default value
2. `div#displayResult` displays button value when number button has been clicked
3. `div#displayResult` concatenate clicked value as a string
4. `div#displayResult` reset to zero when the user clicked AC Button
5. 想法 | 但還沒解決 
    >TODO WIP

    * **1** 取得 displayResult.innerHTML 的文字總寬度去比對本身div容器的寬度，想使用 `scrollWidth > clientWidth`，試試看，可是 `div` 本身沒有`scrollWidth` ，若設定了 `overflow:scroll` 就可以取得 `scrollWidth`. 但是會改變元素本身外觀。

    * **2** 另外做一個跟 `#displayResult` 本身一樣樣式的元素，但是會改變元素本身外觀。  

    * **3** 數字不是只有23字就會超過，因為數字本身的寬度不一，`1` 寬度比較窄(可以26字)，所以到第23個字時也沒有填滿div，且按別的數字，後面都按`1` 也可以到26個字 但會壓到`div`的 `padding`所以單純計算字數的方式不算解決了 字體溢出(overflow) 的問題

    * **4** 如果不考慮 DIV寬度偵測，單用數字顯示幾個會壓到padding 的話，應可用 `Array.prototype.includes()` 

    * **5** 因為使用`forEach()` 走訪，因此產生了很多個按鈕偵聽事件，所以要改用針對按鈕的上一層元件去做偵聽事件，並利用 `target`      

    * **6** 判斷不對，變成只要有數字1的情況下，數字就可以跑到26個字


