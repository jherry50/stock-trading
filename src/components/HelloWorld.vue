<template>
  <div>
    <div class="row hello flex justify-content-center">
      <div class="col-md-6 text-white">
      <h1>Trade or View your Portfolio</h1>
      <br>
      <h6>You may Save & Load your Data</h6>
      <h6>Click on 'End Day' to begin a New Day!</h6>
      <br>
      <router-link class="btn btn-success" tag="button" to="./stocks">Get Started</router-link>
      </div>
      <div class="col-md-6 text-center sec2 text-light">
        <h1>Your Funds</h1>
        <br>
        <h2>
          {{ funds | currency }}
        </h2>
      </div>
    <hr> 
  </div>
  </div>
  
  
</template>

<script>
export default {
  computed: {
    funds() {
      return this.$store.getters.funds
    }
  }
  
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.hello{
  height: 600px;
  background-image: url('../assets/stocks.jpg');
  background-repeat: no-repeat;
  padding:150px 100px;

}
.hello div {
  height: 300px;
}
.sec2 {
  background-color: rgba(119, 16, 16, 0.27);
  
}
.sec2 h2:hover {
  font-size: 40px;
}
</style>
