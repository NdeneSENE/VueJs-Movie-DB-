import Vue from 'vue';
import Router from 'vue-router';
import MoviesList from './components/MoviesList.vue';
import MovieDetail from '@/components/MovieDetail';

Vue.use(Router);
export default new Router({
    mode: 'history',
    routes : [
        {
            path: '/',
            name: 'Movies List',
            component: MoviesList
        },
        {
            path: '/movie/:id',
            name: 'Movie Details',
            component: MovieDetail
        }
    ]
})