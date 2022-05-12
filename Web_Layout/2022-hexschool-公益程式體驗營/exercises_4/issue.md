[04. Flex 小節作業 (media query)| AK ](https://codepen.io/contraryAK/pen/jOZEvgL)


作業批改回饋 : https://courses.hexschool.com/courses/d9be03/lectures/38838681

這邊提供幾點建議：

- [x] 可以點選的連結、按鈕都可以嘗試設定 hover 效果，像是：右上社群連結、表尾聯絡資訊、送出按鈕
- [x]  `.social-media` 也可以使用 ul li 結構製作。另外本身就是區塊元素，可以不用設定為 inline-block
- [x]  `.header-wrap` 的設定可以直接在 header 使用，這樣該 div 就可以移除，簡化結構
- [x]  `.banner` 中 `justify-content: flex-start;` 為預設值，可以不需設定哦
- [x]  `.curr-feat` 為課程列表，可以使用 ul li 結構製作
- [x]   `.curr-feat-card` 在平板時可以設定 `align-items:``center;` 讓左右圖文可以垂直置中對齊
- [x]   `min-width: 490px;` 時 `.card-col` 樣式可以不需再次設定，在手機版時都有設定哩
- [x]   `.form-group` PC 版時寬度可以設定為 48%、手機版 100%，內層元素可以統一另外設定為 100%，使其可以撐滿到與外層同寬
- [x]   送出按鈕樣式可以嘗試依照設計稿調整，另外可以加上 `cursor: pointer;` 當滑鼠滑過時可以出現手指點選
		>送出按鈕樣式沒有顯示，HTML 沒有 class，造成沒有樣式。 
- [x]   `.contact-hexschool` 可以使用 ul li 結構
