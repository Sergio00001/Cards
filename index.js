const slides = document.querySelectorAll('.slide')
const body = document.querySelector('body')
const slideSpring = document.querySelector('.slide_spring')
const slideWinter = document.querySelector('.slide_winter')
const slideSummer = document.querySelector('.slide_summer')
const slideAutumn = document.querySelector('.slide_autumn')
const text = document.querySelector('h3')


slideAutumn.addEventListener('click', () => {

    clearActiveClasses()

    slideAutumn.classList.add('active')
    body.classList.add('autumn')

})


slideSpring.addEventListener('click', () => {

    clearActiveClasses()

    slideSpring.classList.add('active')
    body.classList.add('spring')

})


slideWinter.addEventListener('click', () => {

    clearActiveClasses()

    slideWinter.classList.add('active')
    body.classList.add('winter')

})


slideSummer.addEventListener('click', () => {

    clearActiveClasses()

    slideSummer.classList.add('active')
    body.classList.add('summer')

})


function clearActiveClasses() {
    slides.forEach((slide) => { slide.classList.remove('active') })

    body.classList.remove('winter')
    body.classList.remove('autumn')
    body.classList.remove('summer')
    body.classList.remove('spring')
}