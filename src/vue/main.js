import { Button } from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import App from './drag/App.vue'
Vue.use(Button)

new Vue({
  el: '#app',
  render: h => h(App),
})
