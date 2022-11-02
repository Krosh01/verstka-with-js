let arrowleft = document.querySelector('.arrow_left')
let arrowright = document.querySelector('.arrow_right')
let left=document.querySelector('.scroll-images2')
let right=document.querySelector('.scroll-images2')
let button = document.querySelector('.button')

button.addEventListener('click', (e) => {
    e.preventDefault()
    location.href = 'https://myeldesign.com/'
})
function scrolll(){
    let left=document.querySelector('.scroll-images')
    left.scrollBy(350,0)
}
function scrollr(){
    let right=document.querySelector('.scroll-images')
    right.scrollBy(-350,0)
}
function scrollll(){
    arrowleft.addEventListener('click', (e) => {
        left.scrollBy(350,0)
    })
}
function scrollrr(){
    arrowright.addEventListener('.click',(e) =>{
        right.scrollBy(-350,0)
    })
}








