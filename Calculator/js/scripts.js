document.addEventListener("DOMContentLoaded",function(){
	/*	初始化
	----------------------------------------*/
 
	let objCalculator = new StandardCalculator();

	const INPUT_MODE = 0; // 輸入模式
    const RESULT_MODE = 1; // 顯示模式
    const END_MODE = 2; // 結束模式
    let intDisplayMode = INPUT_MODE; // 預設輸入模式
	console.log(`display mode: ${intDisplayMode}`);
    let summary = 0;  //運算結果
    let operator ="";
    let nextNumber = 0;



	let calculator = document.querySelector("#draggable");
	let displayNumPanel = document.querySelector("#displayNumber");
	const LimitedDigits = 8; // 目前先處理位數 TODO
	displayNumPanel.textContent = 0;
	console.log(displayNumPanel.textContent);
	// objCalculator.calculate().toPrecision(LimitedDigits);

	

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
	const controlButton = document.querySelector(".btn-control");

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



	// Focus 事件
	// function getFocus(){
	// keydown event	


	/*	button click event
	----------------------------------------------------*/
	function getButton(){
		const row = document.querySelectorAll(".row");
		row.forEach(function(event,index){
			// console.log(event);
			// console.log(row[index]);
			row[index].addEventListener("click",function(e){
				// get class name
				let buttonGroup = e.target.getAttribute("class");
				console.log(`${buttonGroup} | ${e.target.value}`);

				if(buttonGroup === "btn-num"){
					let number = e.target.value;
					displayNumPanel.textContent += number;	
					return displayNumPanel.textContent;
				}
				
				// TODO 修正 btn-clear-all , btn-clear 先做AC 
				// 點一次 C，按鈕會變更為 AC 會清除畫面上數字，但不會把已經儲存的值給刪掉
				// 再點 AC 會把所有值清空 歸零
				if(buttonGroup.includes("btn-clear-all")){
					return displayNumPanel.textContent = 0;
				}

			});

		});

	}

	getButton();



	/*
		1. 點一次 C，按鈕會變更為 AC 會清除畫面上數字，但不會把已經儲存的值(已經按過 = 的值)給刪掉，再點 AC 會把所有值清空 歸零
		2. 任何數字 / 0 都會 顯示 Not a number
		3. Not a number 再按 C 再按 |+/-| 會顯示 Error
		4. 先按數字，再按 |+/-| 及 | % | 才會進行數值運算或變更正負值
		5.  



	*/










}); // END of Document Ready
