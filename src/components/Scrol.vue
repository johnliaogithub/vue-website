<template>
<div class="scroll">
  <p><strong>Scroll down to the box to trigger the animation!</strong></p>

  <div id="box"></div>
</div>
</template>
<script>
export default {
  name: 'Scroll'
}
// get the element to animate
var element = document.getElementById('box');
var elementHeight = element.clientHeight;

// listen for scroll event and call animate function
document.addEventListener('scroll', animat);

// check if element is in view
function inView() {
  // get window height
  var windowHeight = window.innerHeight;
  // get number of pixels that the document is scrolled
  var scrollY = window.scrollY || window.pageYOffset;
  
  // get current scroll position (distance from the top of the page to the bottom of the current viewport)
  var scrollPosition = scrollY + windowHeight;
  // get element position (distance from the top of the page to the bottom of the element)
  var elementPosition = element.getBoundingClientRect().top + scrollY + elementHeight;
  
  // is scroll position greater than element position? (is element in view?)
  if (scrollPosition > elementPosition) {
    return true;
  }
  
  return false;
}

// animate element when it is in view
function animat() {
  // is element in view?
  if (inView()) {
      // element is in view, add class to element
      element.classList.add('animate');
  }
}

</script>
<style>
html, body {
  font-family: Roboto, sans-serif;
}

p {
  text-align: center;
  position: absolute;
  left: 0;
  top: 50%;
  width: 100%;
  transform: translateY(-50%);
  font-size: 1.3em;
}

#box {
  height: 200px;
  width: 200px;
  background-color: cornflowerblue;
  margin: 1000px auto 100px;
}

.animate {
  animation: animate .3s ease-in-out forwards;
}

@keyframes animate {
  from {
    background-color: cornflowerblue;
    border-radius: 0;
  }
  to {
    background-color: green;
    border-radius: 100px;
  }
}
</style>
