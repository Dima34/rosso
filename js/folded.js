const foldedContainer = document.querySelectorAll("*[data-foldedContainer]")

foldedContainer.forEach(container=>{
	const foldedList = container.querySelector("*[data-foldedList]")
	const foldedListItem = foldedList.children 

	let childTillFold = 3

	const foldedAmount = container.getAttribute("data-foldedAmount")
	
	if(foldedAmount){
		childTillFold = foldedAmount;
	}

	if(foldedListItem.length > childTillFold){
		const croppedChildList = Array.from(foldedListItem).slice(childTillFold)

		// Hide a listitems
		croppedChildList.forEach(el=>{
			el.setAttribute("hidden", "")
		})

		// Create an open button
		const foldedUnfoldButton = document.createElement("button")
		foldedUnfoldButton.textContent = container.getAttribute("data-foldedButtonText")

		const buttonClass = container.getAttribute("data-foldedButtonClass")
		foldedUnfoldButton.removeAttribute("data-foldedButtonClass")
		if(buttonClass){
			foldedUnfoldButton.setAttribute("class",buttonClass)
		}

		// Add a button after list
		foldedList.after(foldedUnfoldButton)

		// Handle button click

		foldedUnfoldButton.addEventListener("click", ()=>{
			croppedChildList.forEach(el=>{
				el.removeAttribute("hidden")
			})

			foldedUnfoldButton.remove()
		})

		foldedUnfoldButton.removeAttribute("data-foldedButtonText")
	}

	foldedList.removeAttribute("data-foldedList")
	container.removeAttribute("data-foldedContainer")
})

