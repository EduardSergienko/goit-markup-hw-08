const filterBtn = document.querySelectorAll(".portfolio-filter__button");

filterBtn.forEach((btn) => {
	btn.addEventListener("click", () => {
		const allCards = document.querySelectorAll(".portfolio__item");
		console.log(allCards);
		allCards.forEach((card) => {
			if (
				card.dataset.filter !== btn.dataset.action &&
				btn.dataset.action !== "all"
			) {
				card.classList.add("portfolio__card-remove");
			} else {
				card.classList.remove("portfolio__card-remove");
			}
		});
	});
});
