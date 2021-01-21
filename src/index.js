import Compiler from './compiler'
class Vue {
  constructor(options) {
    this.el = options.el
    this.data = options.data
    if (this.el) {
      new Compiler(this)
    }
  }
}

new Vue({
  el: '#app',
  data: {
    name:'weaps',
    age: 18,
    sex: 'male',
    dsc: '描述'
  }
})