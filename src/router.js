import { createRouter, createWebHistory } from 'vue-router';
import Home from './views/Home.vue';
import About from './views/About.vue';
import NotFound from './views/NotFound.vue';
import Welfare from './views/Welfare.vue';
import Kit from './views/Kit.vue';

const routes = [
    { path: '/', name: 'Home', component: Home },
    { path: '/about', name: 'About', component: About },
    { path: '/welfare', name: 'Welfare', component: Welfare },
    { path: '/kit', name: 'Kit', component: Kit },
    { path: '/:pathMatch(.*)*', name: 'NotFound', component: NotFound },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;