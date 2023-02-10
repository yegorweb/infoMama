<script setup>
import router from "@/router";
import { ref } from "vue-demi";
import BackButton from "./BackButton.vue";
import PostCreation from "@/components/CreationForms/PostCreation.vue";
import ArticleCreation from "@/components/CreationForms/ArticleCreation.vue";
import InstitutionCreation from "./CreationForms/InstitutionCreation.vue";
import ShopCreation from "./CreationForms/ShopCreation.vue";

/** Выбранный вариант */
let selected_item = ref("");

/** Варианты для создания чего-либо */
let items = ["","Пост", "Статью", "Учреждение", "Магазин", "Вопрос"];



// ==== Посты ====
let post_title = ref("");
let post_text = ref("");
let post_images; // FUTURE: допилить

// ==== Статьи ====
let article_title = ref("");
let article_topics = ref([]);
let article_text = ref("");

// ==== Учреждения ====
let institution_type = ref("");
let institution_name = ref("");
</script>

<!-- Форма создания всего -->
<template>
  <v-container class="mt-24">
    <BackButton text="назад" />
    <v-row class="justify-center">
      <v-col xs="12" sm="10" md="8">
        <h3 class="text-center text-uppercase">Создай</h3>

        <v-select
          hide-details
          label="Что создать?"
          v-model="selected_item"
          :items="items"
          variant="underlined"
		  class="mb-4"
        />

        <PostCreation v-if="selected_item == 'Пост'" />
        <ArticleCreation v-if="selected_item == 'Статью'" />
        <InstitutionCreation v-if="selected_item == 'Учреждение'" />
        <ShopCreation v-if="selected_item == 'Магазин'" />
      </v-col>
    </v-row>
  </v-container>
</template>


<style lang="scss" scoped>
</style>
