<<<<<<< HEAD
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
=======
<<<<<<< HEAD
// import $ from 'jquery'
// import {fn} from './test1'
// console.log($)
import './assets/scss/style.scss'
import { $m } from './message'
if (false) {
  import(/*webpackChunkName: 'test1'*/'./test1').then(res => {
    res()
  })
  .catch(err => {

  })
=======
import observer from './mvvm'
import './assets/css/style.sass'
import './assets/css/index.css'
import './assets/font/iconfont.css'
import logo from './assets/images/logo.png'
import { type } from 'os'
import { kMaxLength } from 'buffer'
// import './assets/css/style.sass'
let arr = [1,1,1,1,23,2,32,58,8,8,9,9,5,6,5,8,2,3,7,8,52,9,5,65,5458,585,59,58,545,55]
let res = '' // new Set(arr)
let obj = {
  name: 'weaps',
  car: {
    color: 'red',
    brand: 'Mazda'
  }
>>>>>>> 1eabe9f0e5ebb9b29f22258f6bba7571f478d13e
}

window.event = {
  _arr: [],
  on(name, fn) {
    this._arr.push({
      name,
      fn
    })
  },
  emit(name, ...args) {
    // debugger
    if (!name || typeof name !== 'string') {
      const msg = name ? `派发事件名称必须是String类型，当前类型为: ${name}` : `派发事件名称不能为空，当前类型为: ${name}`
      throw new Error (msg)
    }
    this._arr.forEach(item => {
      // console.log(item, name)
      if (item.name == name) {
        item.fn && item.fn(...args)
      }
      // if(item && item.name === name) {}
    })
  }
}
<<<<<<< HEAD
=======
// obj.age = 30
console.log(obj.age, 'hhhh')
console.log()
let dom = document.getElementsByTagName('body')[0]
// console.log(res)
console.log(Object.assign(obj, obj2))
let img = document.createElement('img')
img.src = logo
dom.appendChild(img)
>>>>>>> 1eabe9f0e5ebb9b29f22258f6bba7571f478d13e

window.event.on('test1', function(e) {
  console.log('test1', e)
})
window.event.on('test2', function(e) {
  console.log('test2', e)
})



class children {
  
}

class Observer {
  constructor(name) {
    this.name = name
    let a1 = 'a1'
    name()
  }
  updated() {
    console.log(this.name)
  }
}


window.o = new Observer(() => {
  console.log(this, 'xxx', window)
})
console.log(o)

var obj = {
  a: {}
}
<<<<<<< HEAD
var aaa = Object.create(obj)
aaa.a1 = 'a'
aaa.b1 = 'b'
aaa.c1 = 'c'
console.log(aaa)
Object.keys(aaa).forEach(item => console.log(item))
for (const key in aaa) {
  console.log(key, aaa[key])
}

const confirm = document.querySelector('#confirm')
confirm.addEventListener('click', () => {
  $m.confirm({
    title: 'this is title',
    text: 'text',
    cancel: 'cancel',
    confirm: 'confirm',
    callback: (err) => {
      console.log(err)
    }
  })
})
const message = document.querySelector('#message')
message.addEventListener('click', () => {
  $m.confirm({
    title: 'this is title',
    text: 'text',
    cancel: 'cancel',
    confirm: 'confirm',
    callback: (err) => {
      console.log(err)
    }
  })
})
=======
let handle = ['push']
handle.forEach(item => {
  proto[item] = function() {
    debugger
    Array.prototype[item].apply(this, arguments)
  }
});
arr.push('a')
console.log(arr)

const test = () => {
  console.log('arrow function')
}
test()

console.log(arr.find(item => item === 3), 'find')
>>>>>>> 1eabe9f0e5ebb9b29f22258f6bba7571f478d13e
>>>>>>> 885424a33545291d2ee6d35405dd0bd4f1ff67c7
