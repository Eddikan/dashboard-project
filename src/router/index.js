// src/router/index.js
import Vue from 'vue';
import Router from 'vue-router';
import Home from '../views/HomePage.vue'; // Assume this is the default page
import Reports from '../views/ReportsPage.vue';

Vue.use(Router);

const routes = [
  { path: '/', component: Home },
  { path: '/reports',name:"Reports", component: Reports },
];

const router = new Router({
  mode: 'history', // or 'hash'
  routes,
});

export default router;