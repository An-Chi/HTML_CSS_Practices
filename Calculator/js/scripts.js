/*
* 先做計算機上數字顯示規則	: 數字、小數點、正負號
* | 計算機運作流程|
* 1. 只要按了數字，C 就會變成 AC，點一次 C，按鈕會變更為 AC 會清除畫面上數字，但不會把已經儲存的值(已經按過 = 的值)給刪掉，再點 AC 會把所有值清空 歸零
* 2. 任何數字 / 0 都會 顯示 Not a number
* 3. Not a number 再按 C 再按 |+/-| 會顯示 Error
* 4. 先按數字，再按 |+/-| 及 | % | 才會進行數值運算或變更正負值，單純按
* 5. 
----------------------------------------------------------------------*/
document.addEventListener("DOMContentLoaded",function(){
	/*	初始化
	----------------------------------------*/
	let objCalculator = new StandardCalculator();
	let calculator = document.querySelector("#draggable");
	let displayNumPanel = document.querySelector("#displayNumber");

	/* 以MS OS 計算機中，顯示數字面板上方還有一個紀錄按鍵按了數字或是運算子符號 
	*  MAC OS  沒有，要按 Command + S 才會出現 paper tape 紀錄，
	*  但原理是一樣的，所以宣告一個變數 keepNumber 來儲存按鍵紀錄
	*/
	let keepNumber = ""; 
	const INPUT_MODE = 0; // 輸入模式
    const RESULT_MODE = 1; // 顯示模式
    const END_MODE = 2; // 結束模式
    let intDisplayMode = INPUT_MODE; // 預設輸入模式
    console.log(`display mode: ${intDisplayMode}`);


	const LimitedDigits = 8; // 目前先處理位數 TODO
	displayNumPanel.textContent = 0;
	let savedNumber = 0;
	console.log(displayNumPanel.textContent);
	// objCalculator.calculate().toPrecision(LimitedDigits);
    let summary = 0;  //運算結果
    let operator ="";
    let nextNumber = 0;


	/*--------------
	 *
	 *	畫面
	 *--------------*/

	/* 先用jQuery的 draggable() 來達成移動計算機
	vanilla JS 尚未了解怎麼做，稍微查過 Canvas 可以做到
	-----------------------------------------------*/
	$(function() {
		$( "#draggable" ).draggable();
	} );


	/* dock 右邊圖示區域 先只有寫計算機
	--------------------------------------*/
	const dockIcon = document.querySelector(".icon-set");
	dockIcon.addEventListener("click", function(event){
		let id = event.target["id"];	
		if(id === "icon_calculator"){
			document.querySelector(".calculator-wrap").style.visibility="visible";
			// TODO 這裡要把計算機的值 reset
			displayNumPanel.textContent = 0;
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
				displayNumPanel.textContent = 0;
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


	/*	button click event
	----------------------------------------------------*/
	//test
	function resetZero(firstNumber,operator,nextNumber){

		nextNumber = parseInt(nextNumber,10);

		if(nextNumber === 0){
			console.log(firstNumber/nextNumber);			
		}
	}

	const numberButtons = document.querySelectorAll("[data-number]");
	// console.log(numberButtons);
	numberButtons.forEach(function(event,index){
		numberButtons[index].addEventListener("click",function(e){
			console.log(e.target.value);
			console.log(e.target);

			displayNumPanel.textContent = objCalculator.composeNumber(displayNumPanel.textContent,e.target.value);

		});
		// $(numberButtons[index]).on("keydown",function(e){
		// 	// console.log(e);
		// 	console.log(e.target);

		// });
		
		numberButtons[index].addEventListener("onkeypress", function(e){
			displayNumPanel.textContent = objCalculator.composeNumber(displayNumPanel.textContent,e.target.value);
			console.log(e.key);
			console.log(e.code);
			console.log(e.target.value);

		});
	});




	const operatorButtons = document.querySelectorAll("[data-operator]");
	operatorButtons.forEach(function(event,index){
		operatorButtons[index].addEventListener("click",function(e){
			console.log(e.target.value);
			if(displayNumPanel.textContent === "0"){
				console.log(`${displayNumPanel.textContent}---displayNumPanel.textContent`);

			}

		});
	});

	const composeButtons = document.querySelectorAll("[data-comosed]");
	composeButtons.forEach(function(event,index){
		composeButtons[index].addEventListener("click",function(e){
			console.log(e.target.value);
			console.log(`${displayNumPanel.textContent}---data-comosed`);
			displayNumPanel.textContent = objCalculator.composeNumber(displayNumPanel.textContent, e.target.value)


		});
	});




	const equalsButton = document.querySelector("[data-equals]");
	equalsButton.addEventListener("click",function(e){

	});




	// TODO 修正 btn-all-clear , btn-clear 先做AC 
	// 點一次 C，按鈕會變更為 AC 會清除畫面上數字，但不會把已經儲存的值給刪掉
	// 再點 AC 會把所有值清空 歸零
	const clearButton = document.querySelector(".btn-clear");
	const clearAllButton = document.querySelector("[data-all-clear]");
	clearAllButton.addEventListener("click",function(e){
		displayNumPanel.textContent = 0;
		savedNumber =0;
		console.log(`All Clear | savedNumber: ${savedNumber} | displayNumPanel: ${displayNumPanel.textContent}`);
	});		

	function clearDisplayNumber(event){
		displayNumPanel.textContent = 0;
	}










	






// document.querySelector(".btn-clear").addEventListener("click", clearDisplayNumber);
	// Focus 事件
	// function getFocus(){
	// keydown event	

}); // END of Document Ready
