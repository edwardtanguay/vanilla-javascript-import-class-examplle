import { attachCard } from './card_as_function.js';


const contentElement = document.querySelector('.content');

for (let x = 1; x <= 3; x++) {
	attachCard(contentElement, `Card as Function ${x}`);
}