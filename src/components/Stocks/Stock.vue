<template>
        <div class=" col-sm-6 sstock">
            <div class="card border-primary">
                <div class="card-header bg-success">
                    <h5 class="card-title">
                        {{stock.name}} <small> (price: {{stock.price}}) </small>
                    </h5>
                    
                </div>
                <div class="card-body row">
                    <div class="pull-left col-9">
                        <input
                        type="number"
                        class="form-control"
                        placeholder="Quantity"
                        v-model="quantity">
                    </div>
                    <div class="pull-right col-3">
                        <button 
                        class="btn btn-primary"
                        @click="buyStockOrder"
                        :disabled="this.quantity <= 0 || insufficientFunds ">
                            {{ insufficientFunds ? 'low funds' : 'buy'}}
                        </button>
                    </div>

                </div>
            </div>
        </div> 
    
    
</template>
<script>
export default {
    props: ['stock'],
    
    data() {
        return { 
            quantity:0        
        }
    },
    computed: {
        funds() {
            return this.$store.getters.funds;
        },
        insufficientFunds() {
            return this.quantity * this.stock.price > this.funds ;
        }
    },
    methods: {
        buyStockOrder() {
            const order = {
                stockId: this.stock.id,
                stockPrice: this.stock.price,
                quantity: this.quantity
            };
            console.log(order)
            this.$store.dispatch('buyStock', order)
            this.quantity = 0

        },
    }
    
}
</script>
<style scoped>
.sstock {
    margin-bottom: 1em;
}

</style>