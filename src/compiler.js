import utils from './utils'
class Compiler {
  constructor(options) {
    // 判断当前传的el是否是元素，如果不是就获取一下
    this.el = utils.isElementNode(options.el) ? options.el : document.querySelector(options.el)
    this.data = options.data
    // 将获取的dom节点移动到文档碎片中
    let fragment = utils.nodeToFragment(this.el)
    
    // 模板编译
    this.compile(fragment)
    
  }
  compile(node) {
    let childNodes = node.childNodes
    [Array.from(childNodes)].forEach(child => {
      // 将元素节点与文本节点分离开
      if (utils.isElementNode(child)) {
        
      } else {
        console.log(child);
      }
      
    })
  }
}

export default Compiler