
// 非常粗糙的实现
var menu = document.querySelector('.menu');
var header = document.querySelector('.header');
var body = document.querySelector('.body');
var navs = document.querySelector('.navs');
var dd = navs.querySelectorAll('dd');

menu.onclick = function () {
	//classList给标签添加类，或者一群类
	//toggle()这个属性意思是，如果标签有该类，删除，如果没有，添加
	header.classList.toggle('collapse');
	body.classList.toggle('collapse');
	navs.classList.toggle('collapse');

	// if(!this.classList.contains('collapsed')) {
	// 	for(var i=0; i<dd.length; i++) {
	// 		dd[i].style.transitionDuration = (i + 1) * 0.15 + 's';
	// 		dd[i].style.transitionProperty = 'all';
	// 		dd[i].style.transitionDelay = '0.2s';
	// 		dd[i].style.transitionTimingFunction = 'ease-out';
	// 		dd[i].style.transform = 'translate(0)';
	// 	}
	// } else {
	// 	for(var i=dd.length - 1; i>=0; i--) {
	// 		dd[i].style.transitionDuration = (dd.length - i + 1) * 0.05 + 's';
	// 		dd[i].style.transitionProperty = 'all';
	// 		dd[i].style.transitionDelay = '';
	// 		dd[i].style.transitionTimingFunction = 'ease-out';
	// 		dd[i].style.transform = 'translate(-100%)';
	// 	}
	// }

	// this.classList.toggle('collapsed');
}