const textElement = document.getElementById('text-animation');
const text = 'XI RPL 1';
let index = 0;

function typeWriter() {
	if (index < text.length) {
		textElement.innerHTML += text.charAt(index);
		index++;
		setTimeout(typeWriter, 150);
	}
}
typeWriter();