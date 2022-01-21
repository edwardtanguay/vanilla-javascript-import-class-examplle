import { attachCard, getInfo } from './card_as_function.js';

const contentElement = document.querySelector('.content');

contentElement.innerHTML += getInfo();
for (let x = 1; x <= 3; x++) {
	attachCard(contentElement, `Card as Function ${x}`);
}