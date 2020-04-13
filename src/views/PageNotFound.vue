<template>
<div>
<h1 class="alert">page not found(404)</h1>
<p>the page <i>"{{ link }}"</i> does not exist anymore or at all</p>
</div>
</template>
<script>
export default {
  name: 'pagenotfound',
  computed: {
    link: function() {
      return this.$route.path
    }
  }
}
</script>
<style>
</style>
