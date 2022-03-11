const mainImageBlock = document.querySelector(".product__image-main");
const imageButtons = document.querySelectorAll(".gallery-button");

mainImageBlock.querySelector("img").setAttribute("src", imageButtons[0].dataset.imgurl);
imageButtons[0].classList.add("active")

imageButtons.forEach(el=>{
	el.addEventListener("click", (e)=>{
		e.preventDefault();
		let imageUrl = el.dataset.imgurl;
		mainImageBlock.querySelector("img").setAttribute("src", imageUrl);

		imageButtons.forEach(btn=>{
			btn.classList.remove("active");
		})

		el.classList.add("active");
	})
})


