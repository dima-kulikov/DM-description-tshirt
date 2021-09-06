

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
const container = document.querySelector('.description')
const open = document.querySelector('.circle-open')


document.addEventListener('click', function(e) {
	const items = document.querySelectorAll('.circle');
	const target = e.target;
  Array.from(items).forEach(item => {
  	item.classList.remove('circle-open')
  });
  target.classList.add('circle-open');
});



function openDescription () {
    console.log(this);
    this.classList.toggle('circle-open');


//   document.onclick = function(e){
//    if ( this.classList != 'circle-open' ) {
//       container.style.display = 'none';
//       }     
// };


};

circleEvent.forEach(el => {
    el.addEventListener('click', openDescription);
})
    
//----

// const material = document.querySelector('.section-size')

