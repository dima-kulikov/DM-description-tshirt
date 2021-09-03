

//-----------------------
// const circleEvent = document.querySelectorAll('.circle');


// function headerClick () {
//     console.log(this);
//     console.log(this.parentElement);
//     this.parentElement.classList.toggle('circle-open');
//     this.preventDefault()
// };
// circleEvent.forEach(el => {
//     el.addEventListener('click', headerClick);
// })
    
//------

//-----------------------
const circleEvent = document.querySelectorAll('.circle');

function openDescription () {
    console.log(this);
    console.log(this.element);
    this.classList.toggle('circle-open');
    this.preventDefault()
};
circleEvent.forEach(el => {
    el.addEventListener('click', openDescription);
})
    
//----



