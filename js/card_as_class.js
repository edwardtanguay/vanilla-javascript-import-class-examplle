export class Card {

	constructor(elem, title) {
		this.elem = elem;
		this.title = title;
	}

	display() {
		this.elem.innerHTML += `
<div class="card">
<h2>${this.title}</h2>
	Information
</div>
`;
	}
}