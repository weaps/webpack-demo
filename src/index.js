import './assets/font/iconfont.css'
import './assets/css/index.css'
import logo from './assets/images/logo.png'
// import './assets/css/style.sass'
let arr = [1,1,1,1,23,2,32,58,8,8,9,9,5,6,5,8,2,3,7,8,52,9,5,65,5458,585,59,58,545,55]
let res = new Set(arr)
let obj = {
  name: 'weaps'
}
let obj2 = {
  age: 28
}
let dom = document.getElementsByTagName('p')[0]
console.log(res)
console.log(Object.assign(obj, obj2))
let img = document.createElement('img')
img.src = logo
dom.appendChild(img)
