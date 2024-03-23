<template>
  <div class="max-w-3xl mx-auto">
    <Count></Count>
    <Binding></Binding>
    <ConditionalRender></ConditionalRender>
    <ListRendering></ListRendering>
  </div>
</template>

<script setup lang="ts">
import Count from "./Count.vue";
import Binding from "./Binding.vue";
import ConditionalRender from "./ConditionalRender.vue";
import ListRendering from "./ListRendering.vue";
</script>

<style scoped></style>
