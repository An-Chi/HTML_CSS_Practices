// GitHub |https://github.com/An-Chi/js-practise-everyday/blob/master/Calculator/calculator.md
// 參考MacBook 的計算機流程
// ISSUE TODO | 目前連(加減乘除)會和連續(等於+加減乘除)衝突 ，再繼續修改。 
// ISSUE TODO | 正負號切換在0的時候不用
// ISSUE TODO | % 尚未完成
// ISSUE keepNumber & nextNumber
// ISSUE 點擊數字再連續按[ - ][ = ] 或 點擊數字再連續按[ / ][ = ] 
// ISSUE 數字顯示位數、及縮小化
// ISSUE C 鍵 click  事件未完成
// ISSUE 運算結果顯示 再按其他數字時，畫面上的運算結果要先清掉。
// ISSUE 小數點數字 運算問題 (小數點第幾位)
// ISSUE 1+6+ = 14 , 但我的是 1+6+ = 12 

/* 目前可正常操作的 : 
*  1. 比如 1 + 2 = 3 連續點擊 [ = ] 等於，會一直累加
*  2. 單純加減乘除 
*  3. 比如 1 + 2 = 3 連續點擊 [ + ][ = ] 等於，會一直累加	
*/
// https://codepen.io/contraryAK/pen/WNjgZdN
document.addEventListener("DOMContentLoaded",function(){
	/*	初始化
	----------------------------------------*/
	let objCalculator = new StandardCalculator();
	let calculator = document.querySelector("#draggable");


	// string
	let outputPanel = document.querySelector("#displayNumber");

	
	/*20210806 TODO 等號和其他加減乘除的連續(加減乘除) 會互相干擾*/
	const INPUT_MODE = 0; // 輸入模式
    const RESULT_MODE = 1; // 顯示模式
    const END_MODE = 2; // 結束模式
    let intDisplayMode = INPUT_MODE; // 預設輸入模式
    // console.log(`display mode: ${intDisplayMode}`);


	const LimitedDigits = 8; // 目前先處理位數 TODO
	outputPanel.textContent = 0;
	// console.log(outputPanel.textContent);
	// objCalculator.calculate().toPrecision(LimitedDigits);
    let summary = 0;  //運算結果
    let currentOperator ="";
    let firstNumber =0;
    let nextNumber = 0;
    let keepNumber = 0; 
    let clearOnNextNumber = false; //是否清掉下一位數

	/*--------------
	 *	 畫  面
	 *--------------*/

	/* 先用jQuery的 draggable() 來達成移動計算機
	*  vanilla JS 尚未了解怎麼做，稍微查過 Canvas 可以做到
	-------------------------------------------------------------*/
	$(function() {
		$( "#draggable" ).draggable();
	} );



	/* Focus | WIP TODO 
	--------------------------------------------------------------*/
	// const getElementFocus = document.querySelectorAll("div");
	// for(let i = 0; i < getElementFocus.length; i++ ){
	// 	getElementFocus[i].setAttribute("tabindex","0");
	// }


	/* dock 右邊圖示區域 先只有寫計算機
	--------------------------------------*/
	const dockIcon = document.querySelector(".icon-set");
	dockIcon.addEventListener("click", function(event){
		let id = event.target["id"];	
		if(id === "icon_calculator"){
			document.querySelector(".calculator-wrap").style.visibility="visible";
			// TODO 這裡要把計算機的值 reset
			outputPanel.textContent = 0;
		}

	});


	/* 1. 練習 : 縮小、放大、關閉按鈕 
	--------------------------------------*/
	const controlButton = document.querySelector(".icon-set");
	controlButton.addEventListener("click",function(event){
		// console.log(event.target);
		let id = event.target["id"];
		if(id){
			// console.log(id);
			switch(id){
				case "close":
				document.querySelector(".calculator-wrap").style.visibility="hidden";
				alert(`${id} 計算機先用隱藏代替關閉，要開啟請按右邊計算機圖示或重新整理`);
				// 這裡要把計算機的值 reset
				outputPanel.textContent = 0;
				break;
				case "minimize":
				alert(`${id} 計算機縮小，還沒做`);
				break;

				case "maxmize":
				alert(`${id} 計算機放大，還沒做`);
				break;
			}
		}
	});




	/*---------------------------
	 *	button click event
	 -----------------------------*/
	 function isOriginalMode(){
	 	console.log("firstNumber: " + firstNumber);
	 	if(keepNumber === 0 && firstNumber ===0 && nextNumber === 0 && currentOperator ===""){
	 		return true;
	 	}
	 	return false;
	 }



	 function containOperator(){
		if(currentOperator !== "" && clearOnNextNumber){ // 有加減乘除符號 && 尚未清掉下一位數
			return true;
		} 
		console.log("ಠ_ಠ contain Operator()  false !!");
		return false;
	}

	const numberButtons = document.querySelectorAll("[data-number]");
	numberButtons.forEach(function(event,index){
		numberButtons[index].addEventListener("click",function(e){
			if(containOperator()){ //  有 加減乘除符號 及尚未清掉下一位數
				outputPanel.textContent = "";
				clearOnNextNumber = false;
				
				// console.log("☆☆ ≖‿≖ contain Operator     " + currentOperator + " ☆" + e.target.value + " ☆ ");
			}
			// 0 + n 
			outputPanel.textContent = objCalculator.composeNumber(outputPanel.textContent,e.target.value);
			console.log(`output : ${outputPanel.textContent}`);
		});
	});



	// click + - * /  四則運算符號
	const operatorButtons = document.querySelectorAll("[data-operator]");
	operatorButtons.forEach(function(event,index){
		operatorButtons[index].addEventListener("click",function(e){
			currentOperator = e.target.value;
			keepNumber = outputPanel.textContent;

			console.log(`${keepNumber} ⊙_⊙ contain Operator 【 ${currentOperator} 】`);
			clearOnNextNumber = true;
			
		});
	});

	// click =   等於
	const equalsButton = document.querySelector("[data-equals]");
	equalsButton.addEventListener("click",function(e){
		console.log("Equal Button");
		//  有 加減乘除符號 及尚未清掉下一位數
		if(nextNumber !== 0 && !containOperator()){
			console.log(`nextNumber: ${nextNumber} | ${outputPanel.textContent} | ${currentOperator}`);

			sum = objCalculator.calculate(outputPanel.textContent,nextNumber,currentOperator); // 

		}else{
			nextNumber = outputPanel.textContent;
			sum = objCalculator.calculate(keepNumber,outputPanel.textContent,currentOperator); // 
			console.log(`keepNumber: ${keepNumber} | ${outputPanel.textContent} | ${currentOperator}`);
		}

		//  + = 正常運作 但是 純粹按等於 不對
		outputPanel.textContent = sum;
		console.log(`current operator:  ${currentOperator}`);

	});

	// click  +/-   %    正負號 百分比 
	const composeButtons = document.querySelectorAll("[data-comosed]");
	composeButtons.forEach(function(event,index){
		composeButtons[index].addEventListener("click",function(e){
			// console.log(e.target.value);
			// console.log(`${outputPanel.textContent}---data-comosed`);
			outputPanel.textContent = objCalculator.composeNumber(outputPanel.textContent, e.target.value)

		});
	});




	// TODO 修正 btn-all-clear , btn-clear 先做AC 
	// 點一次 C，按鈕會變更為 AC 會清除畫面上數字，但不會把已經儲存的值給刪掉
	// 再點 AC 會把所有值清空 歸零
	const clearButton = document.querySelector(".btn-clear");
	const clearAllButton = document.querySelector("[data-all-clear]");
	clearAllButton.addEventListener("click",function(e){
		clearAll();
	});		

	//  C button
	function clearDisplayNumber(event){
		outputPanel.textContent = 0;
	}



	function isNextNumberExist(){

	}


	// AC button
	function clearAll(){
		firstNumber = 0;
		nextNumber = 0;
		currentOperator = "";
		keepNumber = 0;
		outputPanel.textContent = "0";
		console.log(`All Clear | savedNumber: ${keepNumber} | outputPanel: ${outputPanel.textContent}`);
	}

	//test
	function resetZero(firstNumber,operator,nextNumber){

		nextNumber = parseInt(nextNumber,10);

		if(nextNumber === 0){
			console.log(firstNumber/nextNumber);			
		}
	}
	






// document.querySelector(".btn-clear").addEventListener("click", clearDisplayNumber);
	// Focus 事件
	// function getFocus(){
	// keydown event	

}); // END of Document Ready
