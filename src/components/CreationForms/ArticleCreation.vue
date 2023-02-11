<script setup>
import { ref } from "vue-demi";

let article = ref("");

let topics = ["Спорт", "Развлечения", "Психология", "Развитие"];
</script>
<template>
  <v-text-field label="Название" variant="underlined"></v-text-field>
  <v-select chips label="Тема" :items="topics" multiple variant="underlined" />
  <QuillEditor
    v-model="article"
    placeholder="Текст"
    :toolbar="[
      [{ size: ['small', false, 'large', 'huge'] }],
      ['bold', 'italic', 'underline', 'strike'],
    ]"
  />

  <div class="w-100 d-flex justify-center ma-4">
    <v-btn to="/mainForm" color="accent">Создать</v-btn>
  </div>
</template>

