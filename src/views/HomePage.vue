<script setup>
import router from "@/router";
const routTo = (to) => {
  router.push({ path: to });
};
</script>

<template>
  <div class="home-page">
    <v-hover v-slot="{ isHovering, props }" open-delay="200">
      <v-card
        class="blog text-center"
        color="success"
        :elevation="isHovering ? 16 : 2"
        :class="{ 'on-hover': isHovering }"
        v-bind="props"
      >
        <v-img
          height="100%"
          class="d-flex justify-center align-end text-center"
          src="../assets/images/main-banner.webp"
          cover
        >
          Ответы</v-img
        >
      </v-card>
    </v-hover>
    <v-card class="article" color="attention">Статьи </v-card>
    <v-card class="post" color="success">
      <v-img
        height="100%"
        class="d-flex justify-center text-center"
        src="https://cdn.vuetifyjs.com/images/parallax/material.jpg"
        cover
      >
        Блоги</v-img
      ></v-card
    >
    <v-card class="dictionary" color="primary">Справочники </v-card>
    <v-card class="answer" color="secondary" @click="routTo('/mainForm')"
      >Найти</v-card
    >
    <v-card class="create" color="accent" @click="routTo('/mainForm')">
      Создать</v-card
    >
  </div>
</template>



<style lang="scss" scoped>
.home-page {
  padding: 10px;
  display: grid;
  height: calc(100vh - 100px);
  gap: 10px 10px;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: 1fr 1fr 1fr 1fr;
  grid-template-areas:
    "blog article article"
    "blog answer post"
    "blog create post"
    "dictionary dictionary post";

  .v-card {
    text-transform: uppercase;
    display: flex;
    justify-content: center;
    align-items: center;
  }
}
@media (max-width: 960px) {
  .home-page {
    padding: 10px;
    display: grid;
    height: calc(100vh - 100px);
    gap: 5px 5px;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 1fr 1fr 1fr 1fr 1fr 1fr;
    grid-template-areas:
      "blog article"
      "blog article"
      " answer post"
      " answer post"
      "create dictionary"
      "create dictionary";
  }
}
.blog {
  grid-area: blog;
}
.article {
  grid-area: article;
}
.answer {
  grid-area: answer;
}
.dictionary {
  grid-area: dictionary;
}
.post {
  grid-area: post;
}
.create {
  grid-area: create;
}
</style>
