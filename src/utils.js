export default {
  // 是否是一个元素
  isElementNode(node) {
    return node.nodeType === 1
  },
  // 将Node节点移动到文档碎片中
  nodeToFragment(node) {
    let fragment = document.createDocumentFragment()
    let firstChild
    // debugger
    while (firstChild = node.firstChild) {
      fragment.appendChild(firstChild)
    }
    return fragment
  }
}