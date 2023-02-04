const background = document.querySelector('.bg')
const text = document.querySelector('.text')

function scale(number,inMin,inMax,outMin,outMax){
    return(number-inMin)*(outMax-outMin)/(inMax-inMin)+outMin
}

let loading = 0

let time1 = setInterval(() => {
    loading++
    if(loading > 99) {
        background.style.visibility = 'hidden';
        text.style.visibility = 'hidden';
        clearInterval(time1)
}
    text.innerHTML = `${loading}%`
    text.style.opacity = scale(loading,0,100,1,0)
    background.style.filter = `blur(${scale(120 - loading,0,100,30,0)}px)`
    background.style.opacity = scale(loading * 2 - 100,0,100,1,0)
},40)