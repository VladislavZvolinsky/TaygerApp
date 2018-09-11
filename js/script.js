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
test = document.querySelectorAll('.content-news .descr p');
more = document.querySelectorAll('.content-news .descr .view');
textArr = [];
for(i=0;i<test.length;i++) {
	if(test[i].innerText.length > 1000) {
		textArr.push({
			short: test[i].innerText.substring(0,1000),
			full: test[i].innerText,
			ind: i
		})	
		test[i].innerHTML=test[i].innerText.substring(0,1000);
	}
	else {
		more[i].style.display='none';
	}
}
for(i=0;i<more.length;i++) {
	more[i].onclick = viewMore(i);
}
function viewMore(index) {
	return function() {
		event.preventDefault();
		if(!more[index].classList.contains('active')) {
			more[index].classList.add('active');
			for(i=0;i<textArr.length;i++) {
				if(textArr[i].ind == index) {
				test[index].innerHTML=textArr[i].full;
					
				}
			}

		} else {
			more[index].classList.remove('active');
			for(i=0;i<textArr.length;i++) {
				if(textArr[i].ind == index) {
				test[index].innerHTML=textArr[i].short;
					
				}
			}
		}
	}
}
// console.log(textArr[0].length)