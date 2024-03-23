<template>
<div>
  <h3>Count down component</h3>
  <h2 style="color:blueviolet"> {{ show ? 'TRUE' : 'FALSE' }}</h2>
  <button @click='toggle()'>Toggle</button>
</div>
</template>

<script setup lang="ts">
import { ref } from 'vue';

// export default function Countdown(props : { count?: number}) {}
// interface Props {
//   count?: number
// }
const props = defineProps<{
  show?: boolean
  // setShow: (val: boolean)=> void
}>()

const emit = defineEmits<{
  (e:'khanh'):void
}>()

function toggle(){
  // props.setShow(!props.show)
  emit('khanh')
}
</script>

<style scoped></style>
