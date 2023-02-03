window.onload = () => {
    const menu = document.querySelector('.menu')
    const menuHeight = menu.offsetHeight - parseInt(getComputedStyle(menu)['paddingTop']) - parseInt(getComputedStyle(menu)['paddingBottom'])
    menu.style.height = '0'

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
}



function siteTime(){
	window.setTimeout("siteTime()", 1000);
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
	var diffHours = Math.floor((diff-(diffYears*365+diffDays)*days)/hours)
	var diffMinutes = Math.floor((diff-(diffYears*365+diffDays)*days-diffHours*hours)/minutes)
	var diffSeconds = Math.floor((diff-(diffYears*365+diffDays)*days-diffHours*hours-diffMinutes*minutes)/seconds)
	document.getElementById("sitetime").innerHTML='<span class="text_7">已上线: <span class="text_6">' + (diffYears*365+diffDays) + '</span> 天 - <span class="text_6">' + diffHours + '</span> 小时 - <span class="text_6">' + diffMinutes + '</span> 分 - <span class="text_6">' + diffSeconds + '</span> 秒</span>'
}
siteTime()








//Other functions

 function fun_0(){
	document.execCommand("Copy");	
};
 function fun_1(){
	location.reload();
};
