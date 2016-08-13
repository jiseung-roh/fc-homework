var body = document.body;
var main = document.querySelector('.pg-main');
var body_width = parseInt(window.getComputedStyle(body).width);
var gnb = document.querySelector('.gnb');
var main_height = parseInt(window.getComputedStyle(main).height);
var gnb_top, gnb_left;

console.log(body_width);
console.log(main_height);
console.log(gnb);

var setGnbWidth = function () {
	// body의 width가 1000px이상일 때만 이 함수는 작동한다.
	if (body_width > 1000) {
		gnb.style.width = main_height + 'px';
		gnb.style.bottom = '556px';
		gnb.style.right = body_width - 103 + 'px';
	}
};

window.onload = setGnbWidth;