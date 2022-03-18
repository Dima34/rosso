const places = document.querySelectorAll("[data-places]")

places.forEach(place=>{
	const selection = place.querySelectorAll("[data-TargetID]")

	selection.forEach(target=>{
		const targetBlock = place.querySelector("#"+target.getAttribute('data-targetid'))
		

		if(target.hasAttribute("data-targetActive")){
			target.classList.add("active")
		} else{
			targetBlock.style.display="none"
		}

		target.addEventListener("click", (e)=>{
			selection.forEach(targetEl=>{
				targetEl.classList.remove("active")
				place.querySelector("#"+targetEl.getAttribute('data-targetid')).style.display="none"
			})

			targetBlock.style.display="block"
			target.classList.add("active")
		})
	})
})
