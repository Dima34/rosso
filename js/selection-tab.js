const selection = document.querySelector("[data-selection]")

const idList=[]
const list = [].slice.call(selection)
list.forEach(elem => {
	idList.push(elem.value)
});

function closeAllSections(){
	idList.forEach(id=>{
		document.getElementById(id).style.display = "none"
	})
}

function openSection(id) {
	document.getElementById(id).style.display = "block"
}

closeAllSections()
openSection(selection.value)

selection.addEventListener("change", ()=>{
	closeAllSections();
	openSection(selection.value)
})