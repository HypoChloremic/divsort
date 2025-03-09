/** presentElement
* @param {HTMLElement} el
* @returns {void}
*/
function presentElement(el) {
	const presentContainer = document.getElementById("selectedRow");
	presentContainer.innerHTML = el.nextElementSibling.dataset.val;
	console.log(presentContainer, el.dataset.val);
	return;
}


document.addEventListener("DOMContentLoaded", () => {
	const options = {
		// root: document.querySelector("#informationContainer"),
		root: null,
		rootMargin: "0px",
		threshold: 1.0
	};

	const observer = new IntersectionObserver((entries, observer) => {
		entries.forEach(entry => {
			if (entry.intersectionRatio < 1) {
				entry.target.style.background = "red";
				presentElement(entry.target)
			} else {
				entry.target.style.background = "blue";
			}
		});
	}, options);

	const elements = document.querySelectorAll(".intersect");
	elements.forEach(el => observer.observe(el));
	console.log(observer);
});
