//-----------------------
const circleEvent = document.querySelectorAll('.circle');
const container = document.querySelector('.description');
const open = document.querySelector('.circle-open');
const blockPoint = document.querySelector('.block-point');

const isTouch = () => {
  return !!('ontouchstart' in window || (navigator.msMaxTouchPoints > 0) || navigator.maxTouchPoints)
}

const handler = (e) => {
  const items = document.querySelectorAll('.circle');
	const { target, type } = e;
 
  if (target.classList.contains('circle')) {
    items.forEach(item => {
      if (!item.isEqualNode(target)) item.classList.remove('circle-open')
    });
    if(type === 'click') {
      target.classList.toggle('circle-open');
    } else if(type === 'mouseleave') {
      target.classList.remove('circle-open');
    } else {
      target.classList.add('circle-open');
    }
  } else {
    items.forEach(item => {
      item.classList.remove('circle-open')
    });
  }
}

if (isTouch()) {
  document.addEventListener('click', handler);
} else {
  circleEvent.forEach(item => {
    item.addEventListener('mouseenter', handler);
    item.addEventListener('mouseleave', handler);
  })
}

const pp = () =>{
  circleEvent[0].classList.add('circle-open');
  // alert('374723')
  // blockPoint.preventDefault();
};

blockPoint.addEventListener('mouseleave', pp);
// document.getElementById("client").reset();