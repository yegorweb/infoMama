<template>
  <v-app>
    <!-- Header -->
    <v-app-bar>
      <v-app-bar-title>ИнфоМама</v-app-bar-title>
      <v-icon
        @click="navigationDrawerIsOpen = !navigationDrawerIsOpen" 
        icon="mdi-menu" 
        color="black"
      ></v-icon>      
    </v-app-bar>
    
    <!-- Панель навигации -->
    <v-navigation-drawer
      v-model="navigationDrawerIsOpen"
      location="right"
      temporary
    >
      <v-list>
        <v-list-item v-for="button, index in nav_buttons" :key="index"><router-link class="nav-list-item-link" :to="button.route">{{ button.title }}</router-link></v-list-item>
      </v-list>
    </v-navigation-drawer>

    <!-- Pages -->
    <v-main>
      <router-view></router-view>
    </v-main>
  </v-app>
</template>
  
<script setup>
import { ref } from "vue-demi";
import MainForm from '@/components/MainForm.vue'

let navigationDrawerIsOpen = ref(false)

let nav_buttons = [
  {
    route: '/',
    title: 'Главная'
  },
  {
    route: '/blog',
    title: 'Блог'
  },
  {
    route: '/education',
    title: 'Образование'
  },
  {
    route: '/medicine',
    title: 'Медицина'
  },
  {
    route: '/leisure',
    title: 'Досуг'
  },
  {
    route: '/support',
    title: 'Помощь'
  },
  {
    route: '/beauty',
    title: 'Красота'
  },
  {
    route: '/job',
    title: 'Работа'
  },
  {
    route: '/fleaMarket',
    title: 'Барахолка'
  },
  {
    route: '/delivery',
    title: 'Доставка продуктов'
  },
  {
    route: '/aboutUs',
    title: 'О нас'
  }
]
</script>

<style lang="scss" scoped>
.nav-list-item-link {
  text-decoration: none;
  color: #000000;
}
</style>
