import App from './App.vue'
import { createApp } from 'vue'
import { registerPlugins } from '@/plugins'

// Текстовый редактор для статей
import { QuillEditor } from '@vueup/vue-quill'
import '@vueup/vue-quill/dist/vue-quill.snow.css'

const app = createApp(App)
registerPlugins(app)

app
.component('QuillEditor', QuillEditor)
.mount('#app')
