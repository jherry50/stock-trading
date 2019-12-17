<template>
  <div id="app" class="container-fluid">
    <app-header></app-header>

    <transition name="slide" mode="out-in">
       <router-view/>
    </transition>
      
  </div>
</template>
<script>
import appHeader from "@/components/Header.vue"
export default {
  components: {
    appHeader
  },
  created() {
    this.$store.dispatch('initStocks');
  }
  
}
</script>

<style lang="scss">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  padding: 2%;
  
}
.slide-enter-active{
  animation: slide-in 300ms ease-out forwards
}
.slide-leave-active{
  animation: slide-out 300ms ease-out forwards

}
@keyframes slide-in{
  from{
    transform: translateY(-30px);
    opacity: 0;
  }
  to{
    transform: translateY(0);
    opacity: 1;
  }
}

@keyframes slide-out {
  from {
    transform: translateY(0);
    opacity: 1;
  }
  to {
    transform: translateY(-30px);
    opacity: 0 ;
  }
}


</style>
