import Vue from 'vue'
import Vuex from "vuex"
import App from './App.vue'
import VueResource from 'vue-resource'
import VuePaginate from 'vue-paginate'
import VueRouter from 'vue-router'
import PostDetail from './pages/Post.vue'
import Blog from './pages/Blog.vue'
import Portfolio from './pages/Portfolio.vue'
import Landing from './pages/Landing.vue'

// ENABLE USE 3RD PARTY PLUGINS
Vue.use(Vuex);
Vue.use(VueResource);
Vue.use(VuePaginate);
Vue.use(VueRouter);

// ENABLE SINGLE PAGE APP ROUTING
const routes = [
  { path: '/', component: Landing },
  { path: '/portfolio', component: Portfolio },
	{ path: '/blog', component: Blog },
	{ path: '/blog/post/:id', component: PostDetail }
];

const router = new VueRouter({
  mode: 'history',
  routes
})

const store = new Vuex.Store({
  state: {
    posts: [],
    commments: []
  },
  mutations: {
    increment (state) {
      state.count++
    }
  }
})

// INIT APP
new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})
