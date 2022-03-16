const selection = document.querySelectorAll("[data-TargetID]")

selection.forEach(target=>{
	const targetBlock = document.getElementById(target.getAttribute('data-targetid'))
	
	if(target.hasAttribute("data-targetActive")){
		target.classList.add("active")
	} else{
		targetBlock.style.display="none"
	}

	target.addEventListener("click", ()=>{
		selection.forEach(targetEl=>{
			targetEl.classList.remove("active")
			document.getElementById(targetEl.getAttribute('data-targetid')).style.display="none"
		})

		targetBlock.style.display="block"
		target.classList.add("active")
	})
})