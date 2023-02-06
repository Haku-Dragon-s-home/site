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






//Other functions

 function fun_0(){
	document.execCommand("Copy");	
};
 function fun_1(){
	location.reload();
};
