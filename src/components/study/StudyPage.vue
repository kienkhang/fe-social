<template lang="pug">
//- <div class="max-w-3xl mx-auto">
//-   <Count></Count>
//-   <Binding></Binding>
//-   <ConditionalRender></ConditionalRender>
//-   <ListRendering></ListRendering>
//- </div>
div.max-w-3xl.mx-auto
  Count
  Binding
  ConditionalRender
  ListRendering
  Countdown(:show='show' @khanh='toggleShow' ref='countDownRef')
  button(@click='usingHamBenTrong') Using HambenTrong

  //- 
  .border.border-b.border-black
  // v-model giữa các component
  // Cách 1
  //- ComponentVModel(:count='num' @update:count='(val) => num = val')
  // Cách 2
  ComponentVModel(v-model='num')
  // Cách 3
  //- ComponentVModel(:count='num' @update:count='updateCount')
  // --------- Slot ------------
  SlotComponent#naruto.bg-purple-100
    template(#slot-header)
      | Header
    template(#slot-body)
      | Body
    template(#slot-footer)
      | Footer

  GraphqlDemo
</template>

<script setup lang="ts">
import { ref, watch } from "vue";

import Count from "./Count.vue";
import Binding from "./Binding.vue";
import ConditionalRender from "./ConditionalRender.vue";
import ListRendering from "./ListRendering.vue";

import Countdown from "../Countdown.vue";

import ComponentVModel from "./ComponentVModel.vue";
import SlotComponent from "./SlotComponent.vue";
import GraphqlDemo from "./GraphqlDemo.vue";

// Giao tiếp giữa StudyPage và Countdown
const show = ref(false);

const countDownRef = ref(null);

function toggleShow() {
  show.value = !show.value;
}

function usingHamBenTrong() {
  (countDownRef.value as any)?.hamBenTrong();
}

// ComponentVModel

const num = ref(0);

const updateCount = (val: number) => {
  num.value = val;
};

watch(num, () => {
  console.log({ num: num.value });
});
</script>

<style scoped></style>
