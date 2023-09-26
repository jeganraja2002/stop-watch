		
		let milsec=document.getElementById("misec")
		let second=document.getElementById("second")
		let mins=document.getElementById("min")
		let hours=document.getElementById("hour")
		
		let milsecCount=0
		let secondCount=0
		let minsCount=0
		let hoursCount=0

		let storeTime;


function TimerRunning() {

		storeTime = setInterval(()=>{

			milsecCount++

			if (milsecCount<10) {
				milsec.innerHTML="0"+milsecCount
			}

			else if(milsecCount<100){
				milsec.innerHTML=milsecCount
			}


			else if (milsecCount==100) {
				milsecCount=0
				milsec.innerHTML="0"+milsecCount

				
				secondCount++


					if (secondCount<10) {
						second.innerHTML="0"+secondCount
					}

					else if(secondCount<60){
						second.innerHTML=secondCount
					}

				
					if (secondCount==60) {
						secondCount=0
						second.innerHTML="0"+secondCount
					

						minsCount++


							if (minsCount<10) {
								mins.innerHTML="0"+minsCount
							}

							else if(minsCount<60){
								mins.innerHTML=minsCount
							}


				
							if (minsCount==60) {
								minsCount=0
								mins.innerHTML="0"+minsCount


									hoursCount++


									if (hoursCount<10) {
										hours.innerHTML="0"+hoursCount
									}

									else if(hoursCount<24){
										hours.innerHTML=hoursCount
									}


									if (hoursCount==24) {
										hoursCount=0
										hours.innerHTML="0"+hoursCount
									}
							}
					}
				
			}

	},10)

}	



let start = document.querySelector(".start")
let stop = document.querySelector(".stop")
let reset = document.querySelector(".reset")
let split = document.querySelector(".split")
let append = document.querySelector(".append")
let splitCount=0


	start.addEventListener("click",()=>{

			TimerRunning()
			stop.classList.remove("d-none")
			start.classList.add("d-none")
			split.classList.remove("visible")
	})


	stop.addEventListener("click",()=>{

			stop.classList.add("d-none")
			start.classList.remove("d-none")
			split.classList.add("visible")
			clearInterval(storeTime)
	})

	reset.addEventListener("click",()=>{
		stop.classList.add("d-none")
		start.classList.remove("d-none")
		split.classList.add("visible")
		
		milsec.innerHTML="0"+0
		second.innerHTML="0"+0
		mins.innerHTML="0"+0
		hours.innerHTML="0"+0
		milsecCount=0
		secondCount=0
		minsCount=0
		hoursCount=0
		splitCount=0
		append.innerHTML=""
		clearInterval(storeTime)
	})



	split.addEventListener("click",()=>{
			splitCount++
		append.innerHTML+=`<span class="fs-4 col-2">${splitCount}.</span>
						   <i class="bi bi-check-lg rotate col-2"></i>
						   <h1 class="col-2">${hours.innerHTML} : </h1>
						   <h1 class="col-2">${mins.innerHTML} : </h1>
						   <h1 class="col-2">${second.innerHTML} : </h1>
						   <h1 class="col-2">${milsec.innerHTML}</h1>`
	})

