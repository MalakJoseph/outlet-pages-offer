function hamburgerClicked() {
	const linksHolder = document.querySelector('.links-holder'),
				links = document.querySelectorAll('.header-links');
	if (linksHolder.style.display === "flex") {
		linksHolder.style.animation = "slideOutRight 1s";
		setTimeout(() => {
			linksHolder.style.display = "none";
		}, 1000);
	} else {
		linksHolder.style.display = "flex";
		linksHolder.style.animation = "slideInRight 1s";
		linksHolder.classList.add('menu');
		links.forEach(el => {
			el.style.color = "#fff";
		});
	}
}
