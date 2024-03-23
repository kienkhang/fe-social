<script setup lang="ts">
import { ref } from 'vue';
import Countdown from './components/Countdown.vue';
import HelloWorld from './components/HelloWorld.vue'
// import Example from './components/Example.vue'

const show = ref(true)
function setShow(val: boolean){
  show.value = val
}
// const [show, setShow] = useState(true)
</script>

<template>
  <HelloWorld msg="Vite + Vue" />
  <Countdown :show="show" @khanh='setShow(!show)'></Countdown>
  <!-- <Example></Example> -->
</template>

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}

</style>
