<template>
  <v-text-field label="Название поста"></v-text-field>
  <v-textarea auto-grow label="Чем вы хотите поделиться?"></v-textarea>
  <v-file-input
    multiple
    accept="image/png, image/jpeg, image/bmp"
    label="Вы можете прикрепить фото"
    prepend-icon="mdi-camera"
  ></v-file-input>
</template>
