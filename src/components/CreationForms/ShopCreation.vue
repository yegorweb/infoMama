<template>
  <v-row class="justify-center">
    <v-col cols="8">
      <h2 class="text-center">Создание магазина</h2>
      <v-row>
        <v-col lg="6">
          <v-text-field variant="underlined" label="Название магазина"></v-text-field>
        </v-col>
        <v-col lg="6">
          <v-text-field variant="underlined" label="Адрес магазина"></v-text-field>
        </v-col>
      </v-row>
      <v-row>
        <v-col lg="6">
          <v-file-input
            variant="underlined"
            multiple
            accept="image/png, image/jpeg, image/bmp"
            label="Фотографии"
            prepend-icon="mdi-camera"
          ></v-file-input>
        </v-col>
        <v-col lg="6">
          <v-text-field variant="underlined" id="tel-input" label="Телефон администратора"></v-text-field>
        </v-col>
      </v-row>
      <v-row>
        <v-col lg="6">
          <v-select
            variant="underlined"
            label="Тематика магазина"
            :items="shop_types"
          />
          <v-radio-group v-model="legal">
            <template v-slot:label>
              <div>Кто вы?</div>
            </template>
        
            <v-radio label="ИП" value="ie"></v-radio>
            <v-radio label="Юр. лицо" value="entity"></v-radio>
          </v-radio-group>          
        </v-col>
        <v-col lg="6">
          <v-textarea variant="underlined" label="Описание магазина"></v-textarea>          
        </v-col>
      </v-row>
      <v-row>
        <v-col lg="6">
          <!-- <v-text-field variant="underlined" 
            v-for="social_network, index in social_networks" 
            :key="index"
            v-model="social_networks[index]"
            label="Вставьте ссылку на соцсеть"
            append-inner-icon="mdi-clear"
            @click:append-inner="social_networks = social_networks.slice(index, index)"
            placeholder="instagram.com/vasiliy_pupkin.228"
          /> -->
        </v-col>
        <v-col lg="6">
        </v-col>
      </v-row>
    </v-col>
  </v-row>
    

</template>

<script setup>
import phoneinput from '@/plugins/phoneinput'
import { ref } from 'vue-demi'

phoneinput.init_phone_input_mask()

let shop_types = ['Магазин игрушек', 'Магазин канцтоваров', 'Товары для спорта', 'Книжный магазин']
let social_networks = ref([])
let legal = ref('')
</script>