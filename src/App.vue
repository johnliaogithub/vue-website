<template >
  <div id="app" >
    <nprogress-container>hellohellooisjlfjiowefklq;ldj</nprogress-container>
    <!-- <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </div> -->
    <!--    <Pay /> -->
    <div id="content" style="padding-top: 100px;">
      <Navbar style="z-index: 100;background-color: blue;" id="nava"/>
      <Carousel style="max-width: 70%;margin-left: 15%;" />
      <button @click="darkThemeSwitch()">Switch Theme</button>
      <router-view style="max-width: 70%;margin-left: 15%;" />
      <div style="max-width: 70%;margin-left: 15%;" id="lorem">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed dolor justo, dictum in elit vel, interdum tincidunt tortor. Donec ut felis dui. Nulla ut lacus varius, aliquam tortor sed, mollis nulla. Phasellus eros metus, condimentum vel magna eu, pretium posuere dolor. Donec tristique, sapien vel ultrices ultricies, tellus massa auctor massa, et aliquet ipsum arcu et neque. Nam quis ante pellentesque lectus viverra consectetur et non augue. Integer a quam et tortor luctus rutrum ac ut quam. In hac habitasse platea dictumst. Praesent aliquam sapien lectus, eu malesuada sem ullamcorper ut. Proin pharetra justo risus, sed viverra eros efficitur ac. Integer eu vulputate sapien, vel rhoncus nunc. Nullam elementum maximus fringilla. Morbi imperdiet arcu ac suscipit maximus. Nam ut convallis ex, id sagittis ex. Sed vitae tempus orci.
          <br>        
          Aenean sit amet vestibulum elit. Aenean fringilla nisi vitae enim rhoncus, a suscipit ipsum tristique. Maecenas lobortis arcu eget ligula molestie, non feugiat quam varius. Nam lobortis ultricies vestibulum. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Quisque lobortis ornare mi, non accumsan tellus efficitur tempor. Cras quis molestie ante. Vivamus eu aliquet odio. Curabitur scelerisque, ante sit amet tincidunt posuere, nisl sapien ullamcorper eros, sit amet sodales tellus erat sed dui.
          <br> 
          Integer ac diam nec nisi convallis ultricies ac sollicitudin purus. Fusce quis libero a diam blandit consequat. Suspendisse nunc velit, bibendum non fermentum ut, faucibus nec diam. Pellentesque lacinia pretium quam. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin eu risus ut eros tincidunt eleifend nec non ex. In vel tincidunt ligula. Phasellus et enim et magna convallis cursus vitae eu orci. Etiam placerat laoreet sapien et pharetra. Aliquam vitae est efficitur, condimentum eros ac, lobortis eros. Pellentesque eget nulla vel ex interdum rhoncus. Curabitur condimentum lectus ac iaculis varius. Praesent mi nibh, fringilla et sodales a, blandit fringilla ante.
          <br> 
          Praesent magna orci, dignissim sit amet gravida vitae, molestie vel quam. Ut a ex non mi tincidunt dignissim. Pellentesque ut erat sollicitudin sem viverra consectetur. In pretium libero id dictum laoreet. Duis et neque vel nibh vestibulum hendrerit. Donec sit amet quam eu nisl vestibulum tincidunt eget eu justo. Interdum et malesuada fames ac ante ipsum primis in faucibus. Vestibulum at rhoncus magna, sed tristique ex. Vestibulum eget elit lobortis, euismod turpis vel, interdum massa. Curabitur at dictum sapien. Fusce dapibus nec eros ac posuere. Pellentesque maximus mauris tortor, vel lobortis magna pretium nec. Nulla condimentum volutpat diam, non porta quam posuere eget. Donec sollicitudin mattis dolor id tempor.
          <br> 
          Cras non sapien eu elit imperdiet aliquam a quis lectus. Sed vestibulum lectus dui, euismod tempus nulla luctus sit amet. Nam ultricies elementum elit, non elementum odio. Vestibulum posuere viverra tellus a ultrices. Mauris est enim, tristique nec venenatis nec, dignissim vel arcu. Morbi suscipit pulvinar pharetra. Praesent fringilla blandit scelerisque. Proin eu sodales nisi. Ut semper tellus vel sem sodales aliquam. Aenean sed ex varius, iaculis mi et, blandit justo. Sed sollicitudin, nisi et iaculis luctus, arcu odio feugiat mi, eget consequat libero lorem non elit. Mauris ut elit quis odio bibendum vehicula. Fusce nisi elit, egestas nec convallis id, pharetra eget odio. Morbi pellentesque arcu eget maximus eleifend. 
          <br>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. In lobortis justo sit amet orci viverra, vitae volutpat arcu eleifend. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Integer sed vestibulum neque. Quisque vel ultrices tellus. Vestibulum facilisis magna nunc, maximus pretium arcu molestie eget. Praesent ultricies quis dui ut porttitor. Donec in porta sem. Sed semper consequat sodales. Nulla eu semper massa, et egestas elit. Donec sit amet sollicitudin arcu.
          <br>
          Fusce accumsan consectetur aliquam. Phasellus ultrices mauris sit amet auctor gravida. Fusce porttitor dui eu nunc feugiat pharetra. Praesent at metus sodales, vulputate orci ut, pulvinar diam. Sed molestie, nunc in pellentesque mattis, nulla mi auctor risus, quis bibendum mi elit eget nunc. Vivamus ac mauris quis leo mattis consequat in nec urna. Proin finibus velit eget augue gravida, non tristique augue accumsan. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Cras tristique bibendum velit ac lacinia. Sed accumsan justo mi, in pulvinar est pulvinar congue.
          <br>
          Nulla vitae eros non enim faucibus pellentesque. Integer accumsan quam mollis, fermentum turpis ac, tempus sapien. Curabitur sed tempor mi. Proin bibendum augue nec justo tincidunt interdum. Vivamus vel semper erat. Ut consequat varius augue, eget aliquet eros sodales eget. Morbi elit ligula, elementum ut urna quis, mattis viverra odio. Mauris sit amet arcu lacus. Nulla a risus sed tellus tempor euismod in et leo. Integer blandit tincidunt blandit.
          <br>
          Fusce vel tortor quis massa mollis finibus. Pellentesque elit odio, varius eu rutrum et, pulvinar vel velit. Duis vel diam consequat, pellentesque tortor quis, sollicitudin dui. Etiam semper, velit rutrum malesuada semper, nisl magna fringilla mauris, sit amet tempor ante sapien nec justo. Duis elementum lacus eget pharetra tincidunt. Phasellus dictum a tortor ut dapibus. Morbi volutpat magna sed ullamcorper faucibus.
          <br>
          Phasellus pretium posuere commodo. Sed mauris leo, pellentesque at volutpat eu, porta mattis nunc. Fusce lorem velit, fermentum quis dictum eget, varius blandit libero. Aliquam ipsum velit, finibus vel sodales non, mollis et nisl. Morbi porta sed urna a aliquam. Proin convallis sit amet erat non dictum. Nullam ullamcorper risus vestibulum, gravida lorem et, semper ligula. Phasellus suscipit hendrerit tortor, at laoreet purus scelerisque eu. Duis egestas risus nulla, nec ullamcorper tellus porttitor et. Suspendisse bibendum mattis leo, et mattis risus condimentum eget. Nullam a massa id orci tincidunt imperdiet non nec sapien. Aenean ut elit malesuada nisi eleifend molestie porta in ante.
          <br>
          Phasellus ultrices ullamcorper dolor nec facilisis. Maecenas at augue quis nunc vestibulum convallis. Nullam a dictum nunc, eu fermentum enim. Donec ultrices purus metus, non ornare nisl feugiat non. Fusce ac felis eu dolor elementum tincidunt. Aliquam sed laoreet est. Vestibulum non malesuada ipsum.
          <br>
          Curabitur faucibus lacus ante, in egestas nisl convallis eget. Nunc convallis, risus nec finibus porta, risus nisi blandit nunc, ac ullamcorper magna erat a mauris. Morbi rutrum scelerisque odio pharetra ornare. Suspendisse potenti. Duis ut vestibulum nulla. Sed pellentesque mi ut nibh luctus, tempus euismod libero posuere. Sed tempor commodo nunc sed posuere. Praesent commodo ut magna at convallis. Fusce arcu est, feugiat et faucibus non, porta id libero. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; In faucibus congue urna eget consectetur. Nullam porta leo sed lectus sodales, et ultrices nunc tincidunt. Proin convallis iaculis odio malesuada volutpat.
          <br>
          Donec ultricies est lectus, eget venenatis erat facilisis ornare. In vitae tortor rutrum purus vulputate tincidunt in nec risus. Sed ultrices eget lorem vitae vestibulum. Suspendisse vel dictum erat, id imperdiet nulla. Vivamus ultrices consectetur quam a vulputate. Aenean eu libero felis. Nullam at purus vitae velit consectetur faucibus. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Aliquam id erat ut risus sollicitudin tempor. Mauris velit dolor, consectetur vitae bibendum vitae, maximus id felis. Quisque nec justo orci.
          <br>
          Etiam semper lacus et cursus eleifend. Pellentesque vitae bibendum ex, eget varius erat. Vivamus eu velit et tortor ultricies malesuada vitae id enim. Phasellus feugiat mi sed rutrum sollicitudin. Pellentesque aliquet odio ut molestie tempus. Aliquam dui odio, placerat in ultrices vitae, dapibus non orci. Maecenas a sagittis mauris. Suspendisse laoreet lorem ultricies augue pellentesque, nec ullamcorper lorem sollicitudin.
          <br>
          Proin viverra est quis lorem vulputate pulvinar. Quisque laoreet libero accumsan finibus congue. Donec a lorem feugiat, finibus elit nec, interdum velit. Suspendisse potenti. Nunc malesuada nulla ut facilisis condimentum. Sed sed sem sit amet est facilisis consequat. Nunc massa justo, varius sed mi in, fermentum molestie nulla. Aenean ac tellus enim. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed tellus purus, sollicitudin a maximus et, porttitor a nisl. Proin semper porta dui, nec vestibulum arcu fermentum mollis. Ut egestas, urna sed pharetra dictum, nibh erat tempor enim, nec lacinia elit dolor eget est. Ut ac varius erat. 
          <br>
          Hello
      </div>
    </div>
    <Footer style="z-index: 0;padding: 0px;width: 144% !important;margin-left: -22% !important;"/>
  </div>
</template>

<script>
//import Pay from './components/Pay.vue'
import Navbar from './components/Navbar.vue'
import Footer from './components/Footer.vue'
import Carousel from './components/Carousel.vue'
import NprogressContainer from 'vue-nprogress/src/NprogressContainer'
export default ({
  name: 'App',
  data: function () {
    return {
      page: this.$route.path,
    };
  },
  components: {
      Navbar,
      Footer,
      Carousel,
      NprogressContainer,
//    Pay
  },
  methods: {
    _addDarkTheme() {
      let darkThemeLinkEl = document.createElement("link");
      darkThemeLinkEl.setAttribute("rel", "stylesheet");
      darkThemeLinkEl.setAttribute("href", "/css/darktheme.css");
      darkThemeLinkEl.setAttribute("id", "dark-theme-style");
      let docHead = document.querySelector("head");
      docHead.append(darkThemeLinkEl);
    },
    _removeDarkTheme() {
      let darkThemeLinkEl = document.querySelector("#dark-theme-style");
      let parentNode = darkThemeLinkEl.parentNode;
      parentNode.removeChild(darkThemeLinkEl);
    },
    darkThemeSwitch() {
      let darkThemeLinkEl = document.querySelector("#dark-theme-style");
      if (!darkThemeLinkEl) {
        this._addDarkTheme()
      } else {
        this._removeDarkTheme()
      }
    } 
  } 
})
</script>

<style lang="scss">
@import "../scss/custom.scss";
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
