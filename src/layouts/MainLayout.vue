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
        <v-list-item><router-link class="nav-list-item-link" to="/">Главная</router-link></v-list-item>
        <v-list-item><router-link class="nav-list-item-link" to="/blog">Блог</router-link></v-list-item>
        <v-list-item><router-link class="nav-list-item-link" to="/education">Образование</router-link></v-list-item>
        <v-list-item><router-link class="nav-list-item-link" to="/medicine">Медицина</router-link></v-list-item>
        <v-list-item><router-link class="nav-list-item-link" to="/leisure">Досуг</router-link></v-list-item>
        <v-list-item><router-link class="nav-list-item-link" to="/support">Помощь</router-link></v-list-item>
        <v-list-item><router-link class="nav-list-item-link" to="/beauty">Красота</router-link></v-list-item>
        <v-list-item><router-link class="nav-list-item-link" to="/job">Работа</router-link></v-list-item>
        <v-list-item><router-link class="nav-list-item-link" to="/fleaMarket">Барахолка</router-link></v-list-item>
        <v-list-item><router-link class="nav-list-item-link" to="/delivery">Доставка продуктов</router-link></v-list-item>
        <v-list-item><router-link class="nav-list-item-link" to="/aboutUs">О нас</router-link></v-list-item>
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

let navigationDrawerIsOpen = ref(false)
</script>

<style lang="scss" scoped>
.nav-list-item-link {
  text-decoration: none;
  color: #000000;
}
</style>
