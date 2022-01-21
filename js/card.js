export const attachCard = (elem, title = 'Info') => {
	elem.innerHTML += `
<div class="card">
<h2>${title}</h2>
	Information
</div>
`;
}