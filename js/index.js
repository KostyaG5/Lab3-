import Vue from 'vue'
import VueRouter from 'vue-router'; //!!!
import ListComponent from './components/ListComponent.vue';
import SearchComponent from './components/SearchComponent.vue';
import UserComponent from './components/UserComponent.vue'; //!!!

/*
let app = new Vue({
    el: '.container',
    components: {
        'list-component': ListComponent,
		'search-component': SearchComponent,
    },
});
*/

Vue.use(VueRouter);

const routes = [
    {
		path: '/',
		name: 'MainComponent', //!!!for back-push
        components: {
			ListComponent: ListComponent,
			SearchComponent: SearchComponent,
        },
    },
    {path: '/user/:id', name: 'UserComponent', component: UserComponent}, //:id - :to="{name: 'EditComponent', params: {id: card.id}}"
]

const router = new VueRouter({ routes })

const app = new Vue({ router }).$mount('.container')
