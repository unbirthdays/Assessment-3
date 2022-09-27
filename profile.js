
function handleSubmit(evt) {
	evt.preventDefault();
	alert(('I got your message!'));
}

function handleColor(evt) {
	evt.preventDefault();
	alert(("Green even though I can't see it!"));
}
function handlePlace(evt) {
	evt.preventDefault();
	alert(('The park! Woof!'));
}

function handleRitual(evt) {
	evt.preventDefault();
	alert(('Stretching in the mornings!'));
}

let form = document.querySelector('#msgMo');
let color = document.querySelector('#color');
let place = document.querySelector('#place');
let ritual = document.querySelector('#ritual');

form.addEventListener('submit', handleSubmit);
color.addEventListener('click', handleColor);
place.addEventListener('click', handlePlace);
ritual.addEventListener('click', handleRitual);
