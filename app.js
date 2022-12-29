// variables
const showHidden = document.querySelector('.show-hidden button');
showHidden.setAttribute('id', 'showHiddenID');
showHidden.classList.add('showHiddenClass');
console.log(showHidden);

const hiddenItSelf = document.querySelector('.show-hidden div');
hiddenItSelf.classList.add('hiddenItSelf-class');
hiddenItSelf.setAttribute('id', 'hiddenItSelfID');
console.log(hiddenItSelf);

const closeX = document.querySelector('.show-hidden div p span');
closeX.classList.add('closeX-class');
console.log(closeX)


const container = document.querySelector('.show-hidden');

// using variables
showHidden.addEventListener('click', function () {
	hiddenItSelf.style.display = 'block';
	container.style.backgroundColor = 'rgba(225, 0, 0, 2)'; //assumed problem area
})

closeX.addEventListener('click', function () {
	hiddenItSelf.style.display = 'none';
	container.style.backgroundColor = 'rgba(225, 0, 0, 2)'; //assumed problem area
})

window.addEventListener('click', function(e) {
	console.dir(e.target);
	if (e.target === container) {
		hiddenItSelf.style.display = 'none';
		container.style.backgroundColor = 'rgba(225, 0, 0, 2)'; //assumed problem area
	}
})