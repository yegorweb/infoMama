<template>
  <v-text-field label="Название магазина"></v-text-field>
  <v-text-field label="Адрес магазина"></v-text-field>
  <v-file-input
    multiple
    accept="image/png, image/jpeg, image/bmp"
    label="Позвольте людям посмотреть на ваш магазин"
    prepend-icon="mdi-camera"
  ></v-file-input>
  <v-text-field id="tel-input" label="Телефон администратора"></v-text-field>
  <v-select
    label="Тематика магазина"
    :items="shop_types"
  />

  <v-btn @click="social_networks.push('')">Добавить соц. сеть</v-btn>
  <v-text-field 
    v-for="social_network, index in social_networks" 
    :key="index"
    v-model="social_networks[index]"
    label="Вставьте ссылку на соцсеть"
    placeholder="instagram.com/vasiliy_pupkin.228"
  />
  <v-textarea label="Описание магазина"></v-textarea>

  <v-radio-group v-model="legal">
    <template v-slot:label>
      <div>Кто вы?</div>
    </template>
    <v-radio label="ИП" value="ie"></v-radio>
    <v-radio label="Юр. лицо" value="entity"></v-radio>
</v-radio-group>
</template>

<script setup>
import phoneinput from '@/plugins/phoneinput'
import { ref } from 'vue-demi'

phoneinput.init_phone_input_mask()

let shop_types = ['Магазин игрушек', 'Магазин канцтоваров', 'Товары для спорта', 'Книжный магазин']
let social_networks = ref([])
let legal = ref('')
</script>