<template lang="pug">
div.text-center
  h2.text-2xl.font-bold.text-green-500 Ở đây có demo graphql

  h3.font-bold.text-lg.text-blue-600 Danh sách Films (getAllFilms)
    .p-3.border.border-black.rounded-lg(v-for='f in films' :key='f.id')
      .font-bold
        | Id: 
        span.font-normal  {{ f.id }}
      .font-bold
        | Title: 
        span.font-normal  {{ f.title }}
      .font-bold
        | Director: 
        span.font-normal  {{ f.director }}
      .font-bold
        | Created: 
        span.font-normal  {{ f.created }}
  
  h3.mt-4.font-bold.text-lg.text-gray-900 Film có số hiệu ("ZmlsbXM6MQ==")
    .p-3.border.border-black.rounded-lg(v-if='specialFilm')
      .font-bold
        | Id: 
        span.font-normal  {{ specialFilm.id }}
      .font-bold
        | Director: 
        span.font-normal  {{ specialFilm.director }}
      .font-bold
        | Edited: 
        span.font-normal  {{ specialFilm.edited }}
      .font-bold
        | Created: 
        span.font-normal  {{ specialFilm.created }}

</template>

<script setup lang="ts">
// Import api
import { onMounted, ref } from "vue";
import { getAllFilms, getFilm } from "@/apis/starwar";

const films = ref<any>([]);

const specialFilm = ref();
onMounted(async () => {
  // Document for endpoint api
  // https://studio.apollographql.com/public/star-wars-swapi/variant/current/home
  // GET ALL FILM
  const resp = await getAllFilms();
  films.value = resp.allFilms.films;
  // GET SPECIAL FILM
  const fResp = await getFilm({ id: "ZmlsbXM6MQ==" });
  specialFilm.value = fResp.film;
});
</script>

<style scoped></style>
