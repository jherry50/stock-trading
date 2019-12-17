<template>
    <!-- second column -->
    <div class="col-lg-6 bg-light port">
        <div>
            <h5 class="card-title">
                    {{stock.name}} <small> (price: {{stock.price}} | Quantity: {{stock.quantity}} ) </small>
                </h5>
        </div><hr>
        <div>
            <input
                    type="number"
                    class="form-control"
                    placeholder="Quantity"
                    :class="{danger : insufficientQuantity}" 
                    v-model="quantity">
        </div>
        <div>
            <button 
                    class="btn btn-warning"
                    @click="sellStock"
                    :disabled="this.quantity <= 0 || insufficientQuantity ">
                        {{ insufficientQuantity ? 'less qty' : 'Sell' }}
            </button> 
        </div>
    </div>
    
</template>
<script>
import {mapActions} from 'vuex';

export default {
    props: ['stock'],
    
    data() {
        return { 
            quantity: 0
        }
    },
    computed: {
        insufficientQuantity(){
            return this.quantity*1 > this.stock.quantity
        }
    },
    methods: {
        ...mapActions({
            sellStockOrder : 'sellStock'
    }),
        sellStock() {
            const order = {
                stockId: this.stock.id,
                stockPrice: this.stock.price,
                quantity: this.quantity
            };
            this.sellStockOrder(order);
            this.quantity = 0;
        }
    }
    
}
</script>
<style scoped>
.port{
    border: 1px solid rgb(211, 210, 210);
    padding: 1em;
    margin: 2em;
    max-width: 700px;
    display: inline-block;
    box-shadow: 5px 5px 15px 8px rgb(223, 223, 223);
}
.port button {
    margin-top: 1em;
    width: 5em;
}

.danger {
    border:1px solid rgb(255, 102, 0)
}

</style>