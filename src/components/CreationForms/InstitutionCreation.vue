<!-- Форма создания учреждения -->
<template>
  <v-select
    label="Какое учреждение вы хотите добавить?"
    :items="institution_types"
  />
  <v-text-field label="Название учреждения" placeholder="Детский садик 'Лопушок'"></v-text-field>
</template>

<script setup>
let institution_types = ['Детский сад', 'Курсы для дошкольников', 'Средне-образовательная школа', 
  'Гимназия', 'Лицей']

</script>