import { createApp } from 'vue'
// import SearchIcon from 'vue-material-design-icons/Search.vue';
import StarIcon from 'vue-material-design-icons/Star.vue';
import App from './App.vue'

createApp(App)
    .component('star-icon',StarIcon)
    // .component('search-icon',SearchIcon)
    .mount('#app')
