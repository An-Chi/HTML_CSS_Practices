document.addEventListener("DOMContentLoaded",function(){
	/*	按鈕初始化
	----------------------------------------*/

	// 
	let objCalculator = new StandardCalculator();

	const INPUT_MODE = 0; // 輸入模式
    const RESULT_MODE = 1; // 顯示模式
    const END_MODE = 2; // 結束模式
    let intDisplayMode = INPUT_MODE; // 預設輸入模式
    let summary = 0;  //運算結果
    let operator ="";
    let nextNumber = 0;



	let calculator = document.querySelector("#draggable");
	let displayNumPanel = document.querySelector("#displayNumber");
	const LimitedDigits = 8; // 目前先處理位數 TODO
	displayNumPanel.textContent = 0;
	console.log(displayNumPanel.textContent);
	// objCalculator.calculate().toPrecision(LimitedDigits);

	// Focus 事件
	// function getFocus(){
	
	console.log(objCalculator.INPUT_MODE);


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
				
				// TODO 修正 btn-clear-all , btn-clear
				if(buttonGroup.includes("btn-clear-all")){
					return displayNumPanel.textContent = 0;
				}


				
			});

		});

	}

	getButton();



	










}); // END of Document Ready
