<template>
  <div class="j-scroll">
    <img id="tobechanged" src="img"/>
  </div>
</template>
<script>
export default {
  name: 'j-scroll',
  props: ['id','img','left','right','top','bottom','size','time'],
  mounted() {
    var element = document.getElementById(id);
    var elementHeight = element.clientHeight;
    document.addEventListener('scroll',animate)
    function inView() {
      var windowHeight = window.innerHeight;
      var scrollY = window.scrollY || window.pageYOffset;
      var scrollPosition = scrollY + windowHeight;
      var elementPosition = element.getBoundingClientRect().top + scrollY + elementHeight;
      if (scrollPosition > elementPosition) {
        return true;
      }
      
      return false;
    }

    function animate() {
      if (inView()) {
        document.getElementById('tobechanged').style.
      }
    }
  }
}
</script>
