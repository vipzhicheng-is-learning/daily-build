import { createApp } from 'vue'
import App from './App.vue'

import {initHighlighter} from './highlighter'


initHighlighter().then(() => {
  createApp(App).mount('#app')
})