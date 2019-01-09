import Vue from 'vue';
import App from './App';

new Vue({
  el: '#app',
  render: h => h(App)
})
console.log(123)
module.hot.accept()