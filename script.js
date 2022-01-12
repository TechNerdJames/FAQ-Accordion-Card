const question = document.querySelectorAll('.accordion-question');

question.forEach((button) => {
	button.addEventListener('click', (e) => {
		button.classList.toggle('open');
		button.nextElementSibling.classList.toggle('open');
		// if (button.classList.contains('open')) {
		// 	button.classList.remove('open');
		// 	button.nextElementSibling.classList.remove('open');
		// } else {
		// 	button.classList.toggle('open');
		// 	button.nextElementSibling.classList.toggle('open');
		// }
	});
});

// What I want to say now is if another button is clicked... close the opened class and add that class to the active button

// What I want to say is if the button is clicked, activate open toggle, if clicked again close toggle/window

// function toggle() {
// 	question.classList.toggle('open');
// }
