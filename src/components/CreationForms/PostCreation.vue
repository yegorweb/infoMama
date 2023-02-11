<template>
  <v-text-field label="Название" variant="underlined"></v-text-field>
  <v-textarea auto-grow label="Текст" variant="underlined"></v-textarea>
  <v-file-input
    multiple
    accept="image/png, image/jpeg, image/bmp"
    label="Вы можете прикрепить фото"
    prepend-icon="mdi-camera"
    variant="underlined"
  ></v-file-input>
  <div class="w-100 d-flex justify-center ma-4">
    <v-btn to="/mainForm" color="accent">Создать</v-btn>
  </div>
</template>
