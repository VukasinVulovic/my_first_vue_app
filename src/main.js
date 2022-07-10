import { createApp } from 'vue'
import App from './App.vue'

import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { faAngleUp, faAngleDown, faCrown } from '@fortawesome/free-solid-svg-icons';
library.add(faAngleUp, faAngleDown, faCrown);

createApp(App)
.component('font-awesome-icon', FontAwesomeIcon)
.mount('#app')