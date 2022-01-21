export class Card {

	constructor(elem, title) {
		this.elem = elem;
		this.title = title;
		this.status = 'offline'; // online or offline
	}

	display() {
		this.elem.innerHTML += `
<div class="card ${this.status}">
<h2>${this.title}</h2>
	<p>Information</p>
	<p>${this.status}</p>
	<p>${this.status === 'offline' ? 'You cannot access data.' : 'You have access to all data available.'}</p>
</div>
`;
	}
}