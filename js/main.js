import { attachCard } from './card.js';

const contentElement = document.querySelector('.content');

for (let x = 1; x <= 10; x++) {
	attachCard(contentElement, `Card ${x}`);
}