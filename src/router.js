import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from './views/Home.vue';
import Playlist from './views/Playlist.vue';


Vue.use(VueRouter);

const routes = [
    { path: '/', component: Home},
    { path: '/:playlistId', component: Playlist, props: true }
];

export default new VueRouter({
    mode: 'history',
    routes
})