const selection = document.querySelectorAll("[data-typeSelection]")

if(selection.length != 0 ){
	selection.forEach(el=>{
		const buttonList = el.querySelectorAll("[data-typeButton]")
		const imageDestElem = el.querySelector("[data-typeImageDest]")
		const textDestElem = el.querySelector("[data-typeTextDest]")

		SetActive(buttonList[0],imageDestElem, textDestElem, buttonList)

		buttonList.forEach(button=>{
			button.addEventListener("click", ()=>{
				SetActive(button,imageDestElem, textDestElem, buttonList)
			})
		})
	})

	function SetActive(button, imageDestElem, textDestElem, buttonList){
		imageDestElem.setAttribute("src", button.getAttribute("data-typebigimage"))
		textDestElem.textContent = button.getAttribute("data-typeName")

		buttonList.forEach(el=>{
			el.classList.remove("selected")
		})

		button.classList.add("selected")
	}
}