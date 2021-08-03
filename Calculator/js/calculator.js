	//練習類別
	class Calculator {
		constructor(){
			// console.log(`| new.target |\n\n ${new.target}`);

			if(new.target === Calculator){
				throw new TypeError("Cannot construct Abstract instances directly");
			}
		}
		calculate(){	}


	}

	/* 一般計算機 上數字顯示規則 如小數點、正負號
	-----------------------------------------------*/
	class StandardCalculator extends Calculator {


        composeNumber(numberOnDisplay, keyboard){
        	console.log(numberOnDisplay, keyboard);
			// 只有0 不會轉換 - ，要先有數值 再按正負號 
			if(keyboard.includes("-")){
					console.log(numberOnDisplay.substring(1,numberOnDisplay.length));
				if(numberOnDisplay.substring(0,1) === "-"){
					return numberOnDisplay.substring(1,numberOnDisplay.length);
				}
				// console.log("-".concat(numberOnDisplay));
				return "-".concat(numberOnDisplay);
			}


			// 只有0的時候，變成 "0." 不是0得時候，加在數值後面
			if(numberOnDisplay === "0" && keyboard === "."){
				return "0.";
			}

			if(numberOnDisplay.includes(".") && keyboard === "."){
				return numberOnDisplay;
			}

			if(numberOnDisplay === "0"){
				numberOnDisplay = "";
			}
		
			return numberOnDisplay += keyboard;

		}
		//  計算機 firstNumber | activedOperator | nextNumber  
		//  按下operator，firstNumber 會先被儲存起來(operator 的click事件中寫)，再按下 nextNumber 去運算
		//  
		calculate(firstNumber,nextNumber,activedOperator){
			firstNumber  = parseInt(firstNumber,10);
			nextNumber  = parseInt(nextNumber,10);
			// console.log(`firstNumber: ${firstNumber} | nextNumber: | ${nextNumber}`);
			// TODO | no BigDecimal 待解決不精確數字問題，有可使用的 Math.js或者BigDecimal.js 或自己寫運算規則
			let result = 0;  // 
			console.log(nextNumber);
			// if(nextNumber === )
			switch(activedOperator){
				case "+":
				result = firstNumber + nextNumber;
				break;
				case "-":
				result = firstNumber - nextNumber;
				break;
				case "*":
				result = firstNumber * nextNumber;

				break;
				case "/":
				result = firstNumber / nextNumber;
				break;
			}
			return result.toString();

		}// End of function calculate

	}

	/*  計算機 : Programmer, Date Calculation
	-----------------------------------------------*/
	// class ProgrammerCalculator extends Calculator {
	// }



	function testClass(){

	// console.log("calculator - js");
	//Uncaught TypeError: Cannot construct Abstract instances directly at new Calculator
	// const testClass = new Calculator();
	const testInheritedClass = new StandardCalculator();
	// console.log(testInheritedClass);
	let testCal = testInheritedClass.calculate(1,2,"+");
	console.log(`TEST 計算 - ${testCal}`);
	console.log(testInheritedClass.composeNumber(".","."));
}
// testClass();

