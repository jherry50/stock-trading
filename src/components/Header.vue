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
          <li class="dropdown-item nav-link"   tag="li" @click= "saveData">Save Data</li>
          <li class="dropdown-item nav-link"  tag="li" @click = "loadData">Load Data</li>
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
import {mapActions} from 'vuex';
import axios from 'axios';

export default {
  computed: {
    funds() {
      return this.$store.getters.funds 
    }
  },
  methods: {
    ...mapActions({
      randomizeStocks:'randomizeStocks',
      fetchData : 'loadData'
    }),
    endDay() {
      this.randomizeStocks();
    },
    saveData(){
      const data = {
        funds: this.$store.getters.funds,
        stockPortfolio: this.$store.getters.stockPortfolio,
        stocks: this.$store.getters.stocks
      };
      axios.put('data.json', data)

    },
    loadData(){
      this.fetchData();
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