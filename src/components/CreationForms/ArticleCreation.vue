<template>
  <v-text-field label="Название"   variant="underlined"></v-text-field>
  <v-select
    chips
    label="Тема"
    :items="topics"
    multiple
    variant="underlined"
  
  />
  <QuillEditor 
    placeholder="Текст"
    :toolbar="[
      [{ 'size': ['small', false, 'large', 'huge'] }],
      ['bold', 'italic', 'underline', 'strike'],
    ]"
    v-model="article" 
   
  />
</template>

<script setup>
import { ref } from "vue-demi";

let article = ref('')

let topics = ['Спорт', 'Развлечения', 'Психология', 'Развитие']
</script>