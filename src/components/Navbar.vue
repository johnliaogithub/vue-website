<template>
  <div>
 <!--   <el-container>
      <el-header>
      hello
        <div class="my-specific-selector">
        <el-menu :default-active="activeIndex" class="el-menu-demo" mode="horizontal" @select="handleSelect" active-text-color="#ff1a1a">
          <el-menu-item index="1"><h1><router-link to="/">Sudbury Chinese</router-link></h1></el-menu-item>
          <el-menu-item index="2"><el-button type="text" @click="redirect('/home')">Home</el-button></el-menu-item>
          <el-menu-item index="3"><el-button type="text" @click="redirect('/about')">About</el-button></el-menu-item>
          <el-submenu index="4">
            <template slot="title"><el-button type="text" @click="changeShow">Donation Projects</el-button></template>
            <el-menu-item index="4-1" v-if="show"><el-button type="text" @click="redirect('/projects/covid19donations')">COVID-19</el-button></el-menu-item>
            <el-menu-item index="4-2" v-if="show"><el-button type="text" @click="redirect('/projects/poor-people-donations')">Poor people of Sudbury</el-button></el-menu-item>
          </el-submenu>
        </el-menu>
        </div>
      <el-menu>
        <el-menu-item index="index++" v-for="(value, name, index) in menuItems" :key="index">
            <button @click="redirect(index)">{{ index }}. {{ name }}: {{ value }}</button>
        </el-menu-item>
        </el-menu>
      </el-header>
      <el-main>Main</el-main>
      <el-footer>Footer</el-footer>
    </el-container> -->



<!--    <el-row>
        <el-col class="navbar" :class="{ 'navber-hidden': !showNavbar }" :span="24" style="position: fixed" id="nbar">
            <b-navbar style="padding: 1em">
                <template slot="brand">
                    <b-navbar-item tag="router-link" :to="{ path: '/' }">
                        <img
                            src="../assets/logo.png"
                            alt="Lightweight UI components for Vue.js based on Bulma"
                        >
                    </b-navbar-item>
                </template>
                <template slot="start">
                    <b-navbar-item href="#">
                        Home
                    </b-navbar-item>
                    <b-navbar-item href="#">
                        About us
                    </b-navbar-item>
                    <b-navbar-dropdown label="Donation Projects">
                        <b-navbar-item href="#">
                            COVID19
                        </b-navbar-item>
                        <b-navbar-item href="#">
                            Sudbury Food Bank
                        </b-navbar-item>
                    </b-navbar-dropdown>
                </template>
            </b-navbar>
        </el-col>
    </el-row> -->
        <div>
          <b-navbar toggleable="lg" type="dark" variant="logocolor" fixed="top">
            <b-navbar-brand href="#">
              <img src="../assets/logoscaled.png" alt="Logo" style="width: 66%" class="d-inline-block align-top">
            </b-navbar-brand>
        
            <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
        
            <b-collapse id="nav-collapse" is-nav>
              <b-navbar-nav>
                <b-nav-item href="#">Link</b-nav-item>
                <b-nav-item href="#" disabled>Disabled</b-nav-item>
                <b-nav-item-dropdown text="Lang" right>
                  <b-dropdown-item href="#">EN</b-dropdown-item>
                  <b-dropdown-item href="#">ES</b-dropdown-item>
                  <b-dropdown-item href="#">RU</b-dropdown-item>
                  <b-dropdown-item href="#">FA</b-dropdown-item>
                </b-nav-item-dropdown>
              </b-navbar-nav>
        
              <!-- Right aligned nav items -->
              <b-navbar-nav class="ml-auto">
                <b-navbar-nav>
                  <b-nav-item href="#">Chinese</b-nav-item>
                </b-navbar-nav>
              </b-navbar-nav>
            </b-collapse>
          </b-navbar>
        </div>
  </div>
</template>

<script>
  import Vue from 'vue'
  import Buefy from 'buefy'
  Vue.use(Buefy)
  export default {
    data() {
      return {
        activeIndex: '1',
        menuItems: {
          'Home': '/',
          'About': '/about'
        },
        index: 1,
        show: 'false',
        showNavbar: true,
        lastScrollPosition: 0
      };
    },
    methods: {
      handleSelect(key, keyPath) {
        console.log(key, keyPath);
      },
      redirect(index) {
        var link = this.menuItems[index-1]
        this.router.push(link)
      },
      changeShow() {
        if (this.show == 'true') {
          this.show = 'false' 
          console.log(this.show)
        }
        else if (this.show == 'false') {
          this.show = 'true'
          console.log(this.show)
        }
      },
      onScroll () {
        const currentScrollPosition = window.pageYOffset || document.documentElement.scrollTop
          if (currentScrollPosition < 0) {
            return
          }  // Stop executing this function if the difference between
          // current scroll position and last scroll position is less than some offset
          if (Math.abs(currentScrollPosition - this.lastScrollPosition) < 60) {
            return
          }
          this.showNavbar = currentScrollPosition < this.lastScrollPosition
          this.lastScrollPosition = currentScrollPosition
      }
    },
    mounted () {
      window.addEventListener('scroll', this.onScroll)
    },
    beforeDestroy () {
      window.removeEventListener('scroll', this.onScroll)
    },
  }
</script>

<style scoped>
.navbar {
  height: 60px;
  width: 100vw;
  background: hsl(200, 50%, 50%);
  position: fixed;
  box-shadow: 0 2px 15px rgba(71, 120, 120, 0.5);
  transform: translate3d(0, 0, 0);
  transition: 0.1s all ease-out;
}
.navbar.navbar--hidden {
  box-shadow: none;
  transform: translate3d(0, -100%, 0);
}
li a {
  text-decoration: none;
}
h1 {
  text-align: center;
}
a:hover {color:#303133;}   /* Mouse over link */
.nbar {
  background-color: black !important;
}
</style>
