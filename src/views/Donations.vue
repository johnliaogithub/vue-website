<script src="https://unpkg.com/vue"></script>
<script src="https://unpkg.com/vue-paypal-checkout@2.0.0/dist/vue-paypal-checkout.min.js"></script>
<template>
  <div id="app">
    <button onclick="chosen('CAD')" id="{ select:selected = 'CAD' }">CAD</button>
    <button onclick="chosen('USD')" id="{ select:selected = 'USD' }">USD</button>
    <button onclick="chosen('CHF')" id="{ select:selected = 'CHF' }">CHF</button>
    <form action="https://www.paypal.com/cgi-bin/webscr" method="post" target="_top">
    <input type="hidden" name="cmd" value="_donations" />
    <input type="hidden" name="business" value="liaowu70@gmail.com" />
    <input type="hidden" name="currency_code" v-model="selected" />
    <input type="image" style="width: 20%;height: 20%;" src="https://raw.githubusercontent.com/stefan-niedermann/paypal-donate-button/master/paypal-donate-button.png" border="0" name="submit" title="PayPal - The safer, easier way to pay online!" alt="Donate with PayPal button" />
    <img alt="" border="0" src="https://www.paypal.com/en_CA/i/scr/pixel.gif" width="1" height="1" />
    </form>
  </div>  
</template>
<script>
export default {
  name: 'app',
  data() {
    return {
      selected: 'CAD',
      
    }
  },
  methods: {
    chosen: function (param) {
      selected = param
    }
  }
  
}
</script> 
<style>
#select {
  background-color: lightgrey;
}
button {
  border: none;
  background-color: grey;
  color: black;
}
</style>
