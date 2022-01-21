import { attachCard, getInfo } from './card_as_function.js';
import { Card } from './card_as_class.js';

const contentElement = document.querySelector('.content');

contentElement.innerHTML += getInfo();
for (let x = 1; x <= 3; x++) {
	attachCard(contentElement, `Card as Function ${x}`);
}

const card = new Card(contentElement, `Card as Class`);
card.status = 'online';
card.display();