////    GET RANDOM NUMBER
const getRandomNumber = (range) => {
	const randomFormula = Math.floor(Math.random() * range);
	return randomFormula;
};

////EVENT LISTENER
const button = document.querySelector('.btn');
const main = document.querySelector('#main');
const content = document.querySelector('h2');

button.addEventListener('click', (e) => {
	const randomColorIndex = colors[getRandomNumber(colors.length)];

	main.style.backgroundColor = `#${randomColorIndex.hexCode}`;

	content.innerHTML = `Background Color: ${randomColorIndex.name}`;
});
