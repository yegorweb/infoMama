<script setup>
import router from "@/router";
import { onMounted, ref } from "vue-demi";
import BackButton from "@/components/BackButton.vue";
import PostCreation from "@/components/CreationForms/PostCreation.vue";
import ArticleCreation from "@/components/CreationForms/ArticleCreation.vue";
import InstitutionCreation from "@/components/CreationForms/InstitutionCreation.vue";
import ShopCreation from "@/components/CreationForms/ShopCreation.vue";
import QuestionCreation from "@/components/CreationForms/QuestionCreation.vue";

/** Выбранный вариант */
let selected_item = ref("");

/** Варианты для создания чего-либо */
let items = ["", "Пост", "Статью", "Учреждение", "Магазин", "Вопрос"];

// ==== Посты ====
let post_title = ref("");
let post_text = ref("");
let post_images; // TODO: допилить

// ==== Статьи ====
let article_title = ref("");
let article_topics = ref([]);
let article_text = ref("");

window.onkeyup = () => console.log(article_title.value)

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
        <Transition name="bounce">
          <div v-if="selected_item">
            <PostCreation v-if="selected_item == 'Пост'" />
            <ArticleCreation v-model:title="article_title" v-model:topics="article_topics" v-model:text="article_text" v-if="selected_item == 'Статью'" />
            <InstitutionCreation v-if="selected_item == 'Учреждение'" />
            <ShopCreation v-if="selected_item == 'Магазин'" />
            <QuestionCreation v-if="selected_item == 'Вопрос'" />
          </div>
        </Transition>
      </v-col>
    </v-row>
  </v-container>

  <img src="@/assets/images/form_left.webp" class="decor decor_left d-none d-sm-block" alt="" />
  <img src="@/assets/images/form_right.webp" class="decor decor_right d-none d-sm-block" alt="" />
</template>


<style lang="scss" scoped>
.decor {
  position: fixed;
  z-index: 0;
  bottom: 40px;
  width: 25vw;

  &_left {
    left: 0;
  }
  &_right {
    right: 0;
  }
}
</style>
