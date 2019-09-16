import { type } from "os"

function update(key,data) {
  console.log(key+':数据更新了:'+data)
}
let obj = {
  name: 'mi',
  age: 30
}
function observer(data) {
  if(typeof data !== 'object') {
    return data
  }

  for(let key in data) {
    defineReactive(data, key, data[key])
  }
}

function defineReactive(obj, key, value) {
  observer(value) // 如果是对象，继续增加getter与setter方法 （深度监听）
  Object.defineProperty(obj, key, {
    get() {
      console.log('读取了：'+key)
      return value
    },
    set(newValue) {
      if(newValue !== value) {
        observer(newValue) // 如果赋的值也是引用数据，需要继续增加geter,setter方法 （深度监听）
        value =  newValue
        update(key,newValue)
      }
    }
  })
}
export default observer