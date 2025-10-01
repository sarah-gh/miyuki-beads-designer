import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '../views/HomeView.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue'),
    },
    {
      path: '/sweetalert-demo',
      name: 'sweetalert-demo',
      component: () => import('../components/SweetAlertDemo.vue'),
    },
    {
      path: '/weaving-grid',
      name: 'weaving-grid',
      component: () => import('../views/WeavingGrid.vue'),
    },
    {
      path: '/beadwork-pattern',
      name: 'beadwork-pattern',
      component: () => import('../views/BeadworkPattern.vue'),
    },
    {
      path: '/peyote-grid',
      name: 'peyote-grid',
      component: () => import('../views/PeyoteGrid.vue'),
    },
  ],
});

export default router;
