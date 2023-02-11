window.onload = () => {
    const menu = document.querySelector('.menu')
    const menuHeight = menu.offsetHeight - parseInt(getComputedStyle(menu)['paddingTop']) - parseInt(getComputedStyle(menu)['paddingBottom'])
    menu.style.height = '0'

    // 全部元素加载完成后淡入主体部分
    let main = document.getElementById('main');
    main.classList.add('fade-in');
    let player = document.getElementById('player');
    player.classList.add('fade-in');

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
