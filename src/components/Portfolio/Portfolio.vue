<template>
    <div class="row">
        <div v-if="!stockPresent"> There is no item in your portfolio </div>
        <app-stock v-for="stock in stocks" :stock="stock" :key="stock.id" ></app-stock>
    </div>
</template>

<script>
import {mapGetters} from 'vuex'
import Stock from './Stock.vue'

export default {
    methods: {
        stockPresent(){
        
            return this.stocks;
        }

    },
    computed: {
      ...mapGetters ({
          stocks: 'stockPortfolio'
      })
    },
    components: {
        appStock: Stock
    }
    
}
</script>