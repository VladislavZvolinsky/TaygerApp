if(document.querySelector('.login-main')) {
	document.querySelector('.login-main .submit').onclick = function() {
		window.location = 'main.html';
	}
}

if(document.querySelector('.popup-choose-report')) {
	document.querySelector('.general-blocks .reports').onclick = function() {
		event.preventDefault();
		document.querySelector('.popup-choose-report').classList.add('active');
		document.querySelector('.popupBg').classList.add('active');
	}
	document.querySelector('.popupBg').onclick = function() {
		document.querySelector('.popup-choose-report').classList.remove('active');
		document.querySelector('.popupBg').classList.remove('active');
	}
}