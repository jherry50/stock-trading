<template>
    <div class="col-sm-6 sport">
        <div class="card border-primary">
            <div class="card-header bg-info">
                <h5 class="card-title">
                    {{stock.name}} <small> (price: {{stock.price}} | Quantity: {{stock.quantity}} ) </small>
                </h5>
                
            </div>
            <div class="card-body row">
                <div class="pull-left col-9">
                    <input
                    type="number"
                    class="form-control"
                    placeholder="Quantity"
                    :class="{danger : insufficientQuantity}" 
                    v-model="quantity">
                </div>
                <div class="pull-right col-3">
                    <button 
                    class="btn btn-warning"
                    @click="sellStock"
                    :disabled="this.quantity <= 0 || insufficientQuantity ">
                        {{ insufficientQuantity ? 'less qty' : 'Sell' }}
                    </button>
                </div>

            </div>
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
.sport {
    margin-bottom: 1em;
}
.danger {
    border:1px solid rgb(255, 102, 0)
}

</style>