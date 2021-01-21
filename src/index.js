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