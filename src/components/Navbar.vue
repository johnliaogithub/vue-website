<template>
  <div>
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
            <b-navbar-brand href="/">
              <img src="../assets/logoscaled.png" alt="Logo" style="width: 66%" class="d-inline-block align-top">
            </b-navbar-brand>
        
            <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
        
            <b-collapse id="nav-collapse" is-nav>
              <b-navbar-nav>
                <b-nav-item href="/">Home</b-nav-item>
                <b-nav-item href="/about">About</b-nav-item>
                <b-nav-item-dropdown text="Projects" right>
                  <b-dropdown-item href="/projects/covid19donations">COVID19</b-dropdown-item>
                  <b-dropdown-item href="/projects/poorpeopledonations">Canned food drive</b-dropdown-item>
                </b-nav-item-dropdown>
             </b-navbar-nav>
        
              <!-- Right aligned nav items -->
              <b-navbar-nav class="ml-auto">
                <b-nav-item href="#">Link2</b-nav-item>
              </b-navbar-nav>
            </b-collapse>
          </b-navbar>
        </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
      };
    },
    methods: {
    },
    mounted () {
    },
  }
</script>

<style scoped>
</style>
