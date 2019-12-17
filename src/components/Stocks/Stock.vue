<template>
        <!-- second column -->
    <div class="col-lg-6 bg-light sstock">
        <div>
            <h5 class="card-title">
                    {{stock.name}} <small> (price: {{stock.price}}) </small>
                </h5>
        </div><hr>
        <div>
            <input
                type="number"
                class="form-control"
                placeholder="Quantity"
                v-model="quantity">
        </div>
        <div>
           <button 
                class="btn btn-success"
                @click="buyStockOrder"
                :disabled="this.quantity <= 0 || insufficientFunds ">
                    {{ insufficientFunds ? 'low funds' : 'buy'}}
            </button> 
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
.sstock{
    border: 1px solid rgb(211, 210, 210);
    padding: 1em;
    margin: 2em;
    max-width: 700px;
    display: inline-block;
    box-shadow: 5px 5px 15px 8px rgb(223, 223, 223);
}
.sstock button {
    margin-top: 1em;
    width: 5em;
}

</style>