import stocks from '../../data/stocks';

const state = {
    stocks: [],
};

const mutations = {
    'SET_STOCKS' (state, stocks) {
        state.stocks = stocks;
    },
    'RND_STOCKS' (state) {
        state.stocks.forEach(stock => {
            stock.price = Math.round(stock.price * (1 + Math.random() - 0.5));
        });
    },
    'BUY_STOCK'(state, {stockId, quantity, stockPrice}){
        const record = state.stocks.find(element => element.id == stockId);
        if (record) {
            record.quantity += quantity 
        } else {
            state.stocks.push({
                id: stockId,
                quantity: quantity
                
            });
        }
        state.funds -= stockPrice * quantity;
        },

};

const actions = { 
    buyStock: ({commit}, order) => {
        commit('BUY_STOCK', order);
    },
    initStocks: ({commit}) => {
        commit('SET_STOCKS', stocks);
    },
    randomizeStocks: ({commit}) => {
        commit('RND_STOCKS');
    }

};

const getters = {
    stocks: state => {
        return state.stocks;
    }
};

export default {
    state,
    mutations,
    actions,
    getters
}