import observer from './mvvm'
import './assets/css/style.sass'
import './assets/css/index.css'
import './assets/font/iconfont.css'
import logo from './assets/images/logo.png'
import { type } from 'os'
import { kMaxLength } from 'buffer'
// import './assets/css/style.sass'
let arr = [1,1,1,1,23,2,32,58,8,8,9,9,5,6,5,8,2,3,7,8,52,9,5,65,5458,585,59,58,545,55]
let res = new Set(arr)
let obj = {
  name: 'weaps',
  car: {
    color: 'red',
    brand: 'Mazda'
  }
}
let obj2 = {
  _res: '',
  get age() {
    return this._res || 0
  },
  set age(value) {
    return this._res = value
  }
}
// obj.age = 30
console.log(obj.age, 'hhhh')
console.log()
let dom = document.getElementsByTagName('body')[0]
console.log(res)
console.log(Object.assign(obj, obj2))
let img = document.createElement('img')
img.src = logo
dom.appendChild(img)

function deepClone(data,hash=new WeakMap()) {
  if(data == null) return data
  if(data instanceof RegExp) return new RegExp(data)
  if(data instanceof Date) return new Date(data)
  if(typeof data != 'object') return data
  let obj = data.constructor()
  if(hash.get(data)) {
    return hash.get(data)
  }
  hash.set(data, obj)
  for(let key in data) {
    obj[key] = deepClone(data[key], hash)
  }
  return obj
}
let o = {}
o.x = o
console.log(deepClone(o))
observer(obj)
// obj.car.color = 'white'
obj.car.brand = {China: 'changan', Japan: 'Mazda'}
obj.car.brand.China = 'yiqi'

let proto = Object.create(Array.prototype)
proto.push = function() {
  alert('sssss')
}
let handle = ['push']
handle.forEach(item => {
  proto[item] = function() {
    debugger
    Array.prototype[item].apply(this, arguments)
  }
});
arr.push('a')
console.log(arr)