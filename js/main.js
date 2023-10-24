const menuBars = document.querySelector("#nav-menu-bars");
const navAside = document.querySelector(".nav");
const modal = document.querySelector(".modal");
const closeMenu = document.querySelector(".close-menu");
const menuFeatures = document.querySelector("#Features");
const menuCompany = document.querySelector("#Company");

function handleMenuBarsClick() {
	navAside.classList.remove("hide-menu");
	modal.classList.remove("hide");
}

function handleCloseMenuClick() {
	navAside.classList.add("hide-menu");
	modal.classList.add("hide");
}

function handleItemClick(e) {
	e.stopPropagation();
	const target = e.target.id;
	const list = document.getElementById(target).nextSibling;
	const arrow = document.querySelector(`#${target} :nth-child(1) `);
	list.nextSibling.classList.toggle("active");
	arrow.classList.toggle("rotate");
}

function clickFocused(e) {
	if (e.key === "Enter") {
		e.target.click();
	}
}

document.documentElement.addEventListener("click", function () {
	if (
		menuFeatures.nextSibling.nextSibling.classList.contains("active") ||
		menuCompany.nextSibling.nextSibling.classList.contains("active")
	) {
		menuCompany.nextSibling.nextSibling.classList.remove("active");

		document.querySelector(`#Company :nth-child(1)`).classList.remove("rotate");

		menuFeatures.nextSibling.nextSibling.classList.remove("active");
		document
			.querySelector(`#Features :nth-child(1)`)
			.classList.remove("rotate");
	}
});


menuBars.addEventListener("click", handleMenuBarsClick);
closeMenu.addEventListener("click", handleCloseMenuClick);
menuFeatures.addEventListener("click", handleItemClick);
menuCompany.addEventListener("click", handleItemClick);
