<template>
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
  <router-link class="navbar-brand" to="/"> STOCK TRADE</router-link>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>

  <div class="collapse navbar-collapse" id="navbarSupportedContent">
    <ul class="navbar-nav nav mr-auto">
        <router-link class="nav-link" to="/portfolio" activeClass="active" tag="li" > <span class="sr-only">(current)</span> Portfolio</router-link>
        <router-link class="nav-link" to="/stocks" activeClass="active" tag="li" > Stocks </router-link>
    </ul>
    <ul class="nav navbar-nav navbar-right">  
      <li class="nav-item dropdown">
        <router-link class="nav-link dropdown-toggle" to="" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          Save & Load
        </router-link>
        <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
          <router-link class="dropdown-item" to="/"  tag="li">Save Data</router-link>
          <router-link class="dropdown-item" to="/"  tag="li">Load Data</router-link>
        </ul>
      </li>
      <li class="nav-item">
        <a 
        class="nav-link"  
        activeClass="active"
        @click="endDay">

         End Day 

        </a>
      </li>
      <li class="nav-item navbar-text ml-4">
        <strong>Funds: {{funds | currency}} </strong>
      </li>
    </ul>
    
  </div>
</nav>
</template>

<script>
import {mapActions} from 'vuex'

export default {
  computed: {
    funds() {
      return this.$store.getters.funds 
    }
  },
  methods: {
    ...mapActions([
      'randomizeStocks'
    ]),
    endDay() {
      this.randomizeStocks();
    }
  }
}
</script>

<style scoped>
 .navbar{
     margin-bottom: 50px;
 }
 .nav-link{
   cursor: pointer;
 }
</style>