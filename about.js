console.log("hello world");



function handleSubmit(evt) {
	evt.preventDefault();
	
	alert(('Submitted successfully!'));
}

function catAndMouse(evt) {
	evt.preventDefault();
	alert(("You're a cat person? You must be really cool!"));
}


let form = document.querySelector('#contact');
let cat = document.querySelector('#cat');

form.addEventListener('submit', handleSubmit);
cat.addEventListener('mouseover', catAndMouse);
