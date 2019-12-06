<template>
    <div class="row">
        <!-- <div v-if="!this.stocks"> There is no item in your portfolio </div> -->
        <app-stock v-for="stock in stocks" :stock="stock" :key="stock.id" ></app-stock>
    </div>
</template>

<script>
import {mapGetters} from 'vuex'
import Stock from './Stock.vue'

export default {
    
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