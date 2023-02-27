window.onload = () => {
	const menu = document.querySelector('.menu')
	const menuHeight = menu.offsetHeight - parseInt(getComputedStyle(menu)['paddingTop']) - parseInt(getComputedStyle(menu)['paddingBottom'])
	menu.style.height = '0'

	// 文件全部加载后开始渲染
	text.animate([{ opacity: 1, easing: 'ease-in' }, { opacity: 0, easing: 'ease-out' }],1000); 
	text.style.opacity = 0;
	background.classList.add('backgroundz');

	// 滚动到顶部
	window.scrollTo (0, 0);

	// 弹出问候框
	hello();

	// 渲染动画
	let shell = document.getElementById('shell');
	shell.animate([{ transform: 'translateX(-100px)' }, { transform: 'translateX(0px)', offset: 0.3 }],1000); 
	shell.classList.add('shell-show');

	let p_1 = document.getElementById('p_1');
	p_1.classList.add('out_2');

	let Haku = document.getElementById('Haku');
	Haku.animate([{ opacity: 0, easing: 'ease-out' }, { opacity: 1, easing: 'ease-in' }],1000); 
	Haku.style.opacity = 1;

	let percent = document.getElementById('percent');
	percent.animate([{ opacity: 0, easing: 'ease-out' }, { opacity: 1, easing: 'ease-in' }],1000); 
	percent.classList.remove('text_3-o');

	let foot = document.getElementById('foot');
	foot.animate([{ opacity: 0, easing: 'ease-out' }, { opacity: 1, easing: 'ease-in' }],1000); 
	foot.classList.remove('foot-o');

	let time3 = setInterval(() => {
		let p_2 = document.getElementById('p_2');
		p_2.classList.add('out_2');
	   	clearInterval(time3);
	},100)
	let time4 = setInterval(() => {
		let player = document.getElementById('player');
		player.classList.add('out_2');
	 	  clearInterval(time4);
	},300)




	openMenu = e => {
		e.preventDefault()

		// 防止菜单超出界面
		var h = document.body.clientHeight - 180;
		var w = document.body.clientWidth - 170;

		if(e.clientX>w){
				menu.style.left = `${w}px`
		} else {
				menu.style.left = `${e.clientX}px`
		}

		if(e.clientY>h){
				menu.style.top = `${e.pageY - 175}px`
		} else {
				menu.style.top = `${e.pageY + 5}px`
		}

		menu.classList.add('is-active')
		menu.style.height = `${menuHeight}px`

		return false
	}

	closeMenu = () => {
		menu.style.height = '0'
		menu.classList.remove('is-active')
	}
	window.onclick = () => closeMenu()
	window.onscroll = () => closeMenu()
}

	// 跳转主要核心函数
	const goAnchorPoint = (elemId) => {
		let anchorHeight = document.getElementById(elemId).offsetTop
		if (document.documentElement.scrollTop) {
			document.documentElement.scrollTop = anchorHeight
		} else if (document.body.scrollTop) {
			document.body.scrollTop = anchorHeight
		} else {
			//这个else指以上两种值均为0的状态，有一者是恒为0的，另一者可能因为回到顶部等操作被置为0，便会出现这种状况
			document.documentElement.scrollTop = anchorHeight
			document.body.scrollTop = anchorHeight
		}
	}
	const smoothScroll = (element) => {
		document.querySelector(element).scrollIntoView({
			behavior: 'smooth' // 取值用平滑滚动
		});
	}

// 打印日志.
var seconds = 1000
var minutes = seconds * 60
var hours = minutes * 60
var days = hours * 24
var years = days * 365
var today = new Date()
var todayYear = today.getFullYear()
var todayMonth = today.getMonth()
var todayDate = today.getDate()
var todayHour = today.getHours()
var todayMinute = today.getMinutes()
var todaySecond = today.getSeconds()
var t1 = Date.UTC(2023,1,3,11,23,35)
var t2 = Date.UTC(todayYear,todayMonth,todayDate,todayHour,todayMinute,todaySecond)
var diff = t2-t1
var diffYears = Math.floor(diff/years)
var diffDays = Math.floor((diff/days)-diffYears*365)
console.log(
	'\n%cHaku-Dragon %c|%c Version beta.0.10.23.2.26\n%c欢迎来到 %c白龙巜丶%c的个人主页!' + '\n\n%c已上线: %c' + (diffYears*365+diffDays) + ' %c天.\n',
	'color: rgba(196, 169, 139, 0.8)',
	'color: rgba(196, 169, 139, 0.4)',
	'color: rgba(196, 169, 139, 0.8)',
	'color: rgba(100, 102, 102, 0.8)',
	'color: rgba(113, 199, 173, 0.8)',
	'color: rgba(100, 102, 102, 0.8)',
	'color: rgba(100, 102, 102, 0.8)',
	'color: rgba(244, 183, 188, 0.9)',
	'color: rgba(100, 102, 102, 0.8)',
);








//Other functions

function fun_0(){
	document.execCommand("Copy");	
};

function fun_1(){
	location.reload();
};

function fun_2(){
	smoothScroll('#p1')
};

function fun_3(){
	var modal = document.querySelector("#modal-2");
	modal.classList.remove("md-show");
};
