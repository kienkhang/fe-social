<template>
  <div>
    <form action="#" class="form" @submit.prevent="onSubmit">
      <div>
        <label for="name">Name</label>
        <input type="text" name="name" id="name" v-model='name'>
      </div>

      <div>
        <label for="age">Age</label>
        <input type="number" name="age" id="age" v-model="age">
      </div>
      <button type="submit">Submit</button>
    </form>
    <h5>Count: {{ count }}</h5>
    <button @click='name = "Hello World"'>Change</button>
  </div>
</template>

<script setup>
import { ref, computed, watch, onMounted, onBeforeMount } from "vue";

const count = ref(0)

const name = ref('Khang')
const age = ref(18)

function onSubmit(){
  console.log({ name:name.value , age:age.value})
}

</script>

<style scoped>
.chan {
  color: white;
  background: gray;
}
.le {
  background: salmon;
}
</style>
