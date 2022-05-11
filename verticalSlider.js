const sliderContainer = document.querySelector(".slider-container")
const slideRight = document.querySelector(".rigth-side")
const slideLeft = document.querySelector(".left-side")
const upButton = document.querySelector(".up-button")
const downButton = document.querySelector(".down-button")
const slidesLength = slideRight.querySelectorAll("div").length

let activeSlideTndex = 0
slideLeft.style.top = `-${(slidesLength - 1)*100}vh`
upButton.addEventListener('click', () => changeSlide('up'))
downButton.addEventListener('click', () => changeSlide('down'))

const changeSlide = (direction) => {
    const sliderHeight = sliderContainer.clientHeight
    if(direction === 'up'){
        activeSlideTndex++
        if(activeSlideTndex > slidesLength -1){
            activeSlideTndex = 0
        }
    }else if(direction === 'down'){
        activeSlideTndex--
        if(activeSlideTndex < 0){
            activeSlideTndex = slidesLength -1
        }
    }
    slideRight.style.transform = `translateY(-${activeSlideTndex * sliderHeight}px)`    
    slideLeft.style.transform = `translateY(-${activeSlideTndex * sliderHeight}px)`
}