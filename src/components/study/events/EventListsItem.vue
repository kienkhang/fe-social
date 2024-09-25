<template lang="pug">
router-link.block.border.rounded-lg.mx-auto.p-3.max-w-96.w-full(:to='{ name:"events-id-index", params: { id: event.id } }')
  img(:src='`https://picsum.photos/${randomNumber(200, 300)}/${randomNumber(200, 300)}`' v-if='url' loading="lazy")
  h2.font-bold.text-xl {{ event.name }}
  h3 {{ event.date }}
</template>

<script setup lang="ts">
import http from "@/apis/http";
import { onMounted, ref } from "vue";

const props = defineProps<{
  event: {
    id: string;
    name: string;
    date: string;
  };
}>();

function randomNumber(min: number, max: number) {
  /**
   * Hàm này trả về một số nguyên ngẫu nhiên nằm trong khoảng từ min đến max.
   *
   * @param {number} min Giới hạn dưới của khoảng.
   * @param {number} max Giới hạn trên của khoảng.
   * @returns {number} Một số nguyên ngẫu nhiên nằm trong khoảng từ min đến max.
   */
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

const url = ref("");

async function fetchImage() {
  try {
    const res = await http.client.get(
      `https://picsum.photos/${randomNumber(200, 300)}/${randomNumber(
        200,
        300
      )}`
    );
    url.value = res.data;
  } catch (error) {
    throw error;
  }
}
onMounted(() => {
  fetchImage();
});
</script>

<style scoped></style>
