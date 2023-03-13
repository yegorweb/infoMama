<script setup>
import { computed, ref } from "vue-demi";
import topics_list from '@/fakeDB/topics'

let props = defineProps({
  title: String, 
  topics: Array,
  text: String
})

let v_title = ref('')
let v_topics = ref([])
let v_text = ref('')

let emit = defineEmits(['update:title', 'update:topics', 'update:text'])
</script>

<template>
  <v-text-field :model-value="title" label="Название" variant="underlined"></v-text-field>
  <v-select chips label="Тема" :model-value="topics" :items="topics_list" multiple variant="underlined" />
  <QuillEditor
    v-model="v_text"
    @change="emit('update:title', v_text)"
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

