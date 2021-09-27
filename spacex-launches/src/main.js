import './plugins/bootstrap-vue'
import '@babel/polyfill'
import 'mutationobserver-shim'
import './plugins/bootstrap-vue'
import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

createApp(App).use(router).mount('#app')

import ApolloClient from 'apollo-boost'

const apolloClient = new ApolloClient({
  // You should use an absolute URL here
  uri: 'https://api.spacex.land/graphql/'
})
