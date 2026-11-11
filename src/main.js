import './assets/styles/main.css';
import { createApp } from 'vue';
import { createPinia } from 'pinia';
import App from './App.vue';
import router from './router';
import { VueQueryPlugin } from '@tanstack/vue-query';
import { initDriveSync, setActiveProject } from './lib/drive/driveSync.js';

const app = createApp(App);

const pinia = createPinia();

app.use(pinia).use(router).use(VueQueryPlugin);

// Google Drive sync: resume a previous sign-in, and never pull over the
// project that is open in an editor.
router.afterEach((to) => setActiveProject(to.params.id));
initDriveSync();

app.mount('#app');
