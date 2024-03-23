<template lang="pug">
.container
  .custom-class(:class='[attrs.class, "text-green-500"]') Custom class
  header.text-red-500
    slot(name="slot-header")
  main.text-orange-500
    slot(name="slot-body")
  footer.text-yellow-500
    slot(name="slot-footer")

</template>

<script setup lang="ts">
import { useAttrs } from 'vue';


// Turn off behivior code
defineOptions({
  inheritAttrs: false
})
// using new position
const attrs = useAttrs()
</script>

<style scoped></style>
