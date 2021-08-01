document.addEventListener("DOMContentLoaded",function(){

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

	/* dock tooltip
	------------------------------------------------*/
	// const dockIcon = document.querySelector(".icon-set");
	// // console.log(dockIcon);
	// dockIcon.addEventListener("click", function(event){
	// 	console.log(event.target); // img
	// 	// console.log(event.target.alt);
	// 	// console.log(event.currentTarget);
	// 	console.log(event.target.parentNode);
	// 	//
	// });


	/* dock 右邊圖示區域 先只有寫計算機
	--------------------------------------*/
	const dockIcon = document.querySelector(".icon-set");

	dockIcon.addEventListener("click", function(event){
		let id = event.target["id"];	
		if(id === "icon_calculator"){
			document.querySelector(".calculator-wrap").style.visibility="visible";
			// TODO 這裡要把計算機的值 reset

		}

	});


	/* 1. 練習 : 縮小、放大、關閉按鈕 
	--------------------------------------*/
	const controlButton = document.querySelector(".btn-control");

	controlButton.addEventListener("click",function(event){
		console.log(event.target);
		let id = event.target["id"];
		if(id){
			console.log(id);
			switch(id){
				case "close":
				document.querySelector(".calculator-wrap").style.visibility="hidden";
				alert(`${id} 計算機先用隱藏代替關閉，要開啟請按右邊計算機圖示或重新整理`);
				// 這裡要把計算機的值 reset

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

	/*	按鈕初始化
	----------------------------------------*/


	let displayNumPanel = document.querySelector("#displayNumber");
	let limitedDigits = 8; // 目前先處理位數
	console.log(displayNumPanel);
	displayNumPanel.textContent = 0;


	// Keypress 事件
	document.querySelector("demo").addEventListener("keypress", myFunction);





});
