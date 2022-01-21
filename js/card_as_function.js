export const attachCard = (elem, title = 'Info') => {
	elem.innerHTML += `
<div class="card">
<h2>${title}</h2>
	Information
</div>
`;
}

export const getInfo = () => {
	return '<div class="info">This site is a demonstration of function and class modules.</div>'
}