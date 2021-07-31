const isValidPassword = (password) => {
  // 規則：
  // 1. 密碼至少要 8 個字
  // 2. 密碼裡至少要有 1 個數字以及 1 個大寫英文字母
  // 3. 密碼裡不能有 "password" 字樣
}

console.log(isValidPassword("12345"));           // false
console.log(isValidPassword("123passwordxyz"));  // false
console.log(isValidPassword("helloworld"));      // false
console.log(isValidPassword("Helloworld"));      // false
console.log(isValidPassword("helloWorld2"));     // true