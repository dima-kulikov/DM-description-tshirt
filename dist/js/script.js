

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
	const { target } = e;

  console.log(target);
  
  if (target.classList.contains('circle')) {
    target.classList.toggle('circle-open');
  } else {
    items.forEach(item => {
      item.classList.remove('circle-open')
    });
  }
});






