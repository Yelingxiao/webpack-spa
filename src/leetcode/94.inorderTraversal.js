/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
const list = [1, null, 2, 3]
// 构造一个节点
function Node (value) {
  this.value = value
}
function insertNode (tree, value) {
  let node = tree
  let key = null
  while (node.value !== value) {
    key = value < node.value ? 'left' : 'right'
    if (!node[key]) {
      node[key] = new Node(value)
      break
    }
    node = node[key]
  }
  return tree
}

const array = [1, null, 2, 3]
const tree = array.reduce((t, v) => t ? insertNode(t, v) : new Node(v), null)

const inorderTraversal = function (root) {
  const result = []
  const stack = []
  while (stack.length || root) {
    if (root) {
      stack.push(root)
      root = root.left
    } else {
      root = stack.pop()
      result.push(root.val)
      root = root.right
    }
  }
  return result
}

