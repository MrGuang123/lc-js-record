const mockData = {
  value: 1,
  left: {
    value: 2,
    left: {
      value: 4,
      left: {
        value: 6
      }
    },
    right: { value: 5 }
  },
  right: {
    value: 3
  }
}

// 树结构天然使用递归比较简单
// 时间复杂度为O(n) n为节点数量，遍历中每个节点只会被访问一次
// 空间复杂度为O(n) n栈的深度，最差为一条链表
var inorderTraversal = function (root) {
  const res = [];

  const inorder = (root) => {
    if (!root) {
      return;
    }
    inorder(root.left);
    res.push(root.value);
    inorder(root.right);
  }
  inorder(root);

  return res;
};

// 使用循环的原理实际上为手动维护一个栈，后面再实现