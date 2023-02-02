<template>
  <v-text-field label="Название статьи"></v-text-field>
  <v-select
    chips
    label="Выберите тематику статьи"
    :items="topics"
    multiple
  />
  <QuillEditor 
    placeholder="Напишите здесь всё, что вырывается из глубин души"
    :toolbar="[
      [{ 'size': ['small', false, 'large', 'huge'] }],
      ['bold', 'italic', 'underline', 'strike', 'image'],
    ]"
    v-model="article" 
    style="min-height: 30vh;"
  />
</template>

<script setup>
import { ref } from "vue-demi";

let article = ref('')

let topics = ['Спорт', 'Развлечения', 'Психология', 'Развитие']
</script>