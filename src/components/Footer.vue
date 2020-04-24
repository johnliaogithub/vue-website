<template>
  <div class="footer">
    <footer id="footer" class="bg-scblue">
      <div id="topf" style="height: 50px;"></div>
      <div id="innerf">
        Author: John and Rosemary Liao<br />
        Contact: <a href="mailto:johnliao5@gmail.com">johnliao5@gmail.com</a> or <a href="mailto:liaorosemary@gmail.com">liaorosemary@gmail.com</a> if you have questions<br />
        <a href="#nava">Back to top <img style="height: 10px;width: 10px;" src="https://cdn0.iconfinder.com/data/icons/arrows-11/100/arrow-1-512.png"></a><br />
      </div>
      <div class="fb-share-button" data-href="http://localhost:8080/projects/poorpeopledonations" data-layout="button" data-size="large"><a target="_blank" href="https://www.facebook.com/sharer/sharer.php?u=http%3A%2F%2Flocalhost%3A8080%2Fprojects%2Fpoorpeopledonations&amp;src=sdkpreparse" class="fb-xfbml-parse-ignore">Share</a></div>
    </footer>
  </div>
</template>
<script>
export default {
  name: 'Footer',
};
</script>
<style>
#innerf {
  margin-top: auto;
  margin-left: auto;
  margin-bottom: auto;
  margin-right: auto;
  height: auto;
}
#topf {
}
#origfooter {
  color: white;
  left: 0px;
  bottom: 0px;
  width: 100%;
  overflow: auto;
}
#origfooter {
  color: white;
  left: 0px;
  bottom: 0px;
  width: 100%;
  overflow: auto;
  background-color: grey;
  background-image: linear-gradient(lightgrey, black);
}
</style>
