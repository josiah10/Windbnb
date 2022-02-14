import { createApp } from 'vue'
import {FontAwesomeIcon} from "@fortawesome/vue-fontawesome";
import {library} from "@fortawesome/fontawesome-svg-core";
import {fas} from "@fortawesome/free-solid-svg-icons";
// import SearchIcon from 'vue-material-design-icons/Search.vue';
import StarIcon from 'vue-material-design-icons/Star.vue';
import App from './App.vue'
library.add(fas);
createApp(App)
    .component('star-icon',StarIcon)
    .component('fa', FontAwesomeIcon)
    .mount('#app')
