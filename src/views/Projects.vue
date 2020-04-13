<template>
  <div>
    <h1>This is the Projects page</h1>
    <router-view></router-view>
    <app />
  </div>
</template>

<script>
import app from './Donations.vue'
export default {
  name: 'Projects',
  components: {
    app
  }
}
</script>
