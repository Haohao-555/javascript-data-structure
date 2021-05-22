// 排序二叉树
	function BinaryTree() {

		// 结点
		var Node = function(key) {
			this.key = key;
			this.left = null;
			this.right = null;
		}

		// 根节点
		var root = null

		// 插入到二叉树
		var insertNode = function(node, newNode) {
			if (newNode.key < node.key) { //左子树
				if (node.left === null) { // 左孩子为空
					node.left = newNode
				} else {
					// 再次与左孩子的左孩子的值进行比较
					insertNode(node.left, newNode)
				}
			} else { //右子树
				if (node.right === null) {
					node.right = newNode
				} else {
					insertNode(node.right, newNode)
				}
			}
		};

		// 创建结点及判断该结点是否为根结点并插入到二叉树中
		this.insert = function(key) {
			var newNode = new Node(key)
			if (root === null) { // 二叉树中根节点为空
				root = newNode;
			} else {
				insertNode(root, newNode)
			}
		};

		// 中序遍历
		var inOrderTraverseNode = function(node) {
			if (node !== null) { // 判断参数（左孩子、右孩子、根结点）的值是否不为空
				//访问左子树
				inOrderTraverseNode(node.left);
				console.log(node.key)
				inOrderTraverseNode(node.right);
			}
			//如果为空，程序回溯，将结点的值输出
		}
		this.inOrderTraverse = function() {
			inOrderTraverseNode(root);
		}

		// 前序遍历
		var preOrderTraverseNode = function(node) {
			if (node !== null) { // 判断参数（左孩子、右孩子、根结点）的值是否不为空
				console.log(node.key)
				//访问左子树
				preOrderTraverseNode(node.left);
				preOrderTraverseNode(node.right);
			}
			//如果为空，程序回溯，将结点的值输出
		}
		this.preOrderTraverse = function() {
			preOrderTraverseNode(root)
		}

		//后续遍历
		var postOrderTraverseNode = function(node) {
			if (node !== null) { // 判断参数（左孩子、右孩子、根结点）的值是否不为空

				//访问左子树
				postOrderTraverseNode(node.left);
				postOrderTraverseNode(node.right);
				console.log(node.key);
			}
			//如果为空，程序回溯，将结点的值输出
		}
		this.postOrderTraverse = function() {
			postOrderTraverseNode(root)
		}

		//寻找最小值实现程序
		minNode = function(node) {
			if (node) {
				while (node && node.left !== null) {
					node = node.left
				}
				return node.key
			}
			return null
		}
		this.min = function() {
			return minNode(root)
		}

		//寻找最大值实现程序
		maxNode = function(node) {
			if (node) {
				while (node && node.right !== null) {
					node = node.right
				}
				return node.key
			}
			return null
		}
		this.max = function() {
			return maxNode(root)
		}

		//查找特定的值
		var searchNode = function(node, key) {
			if (node === null) {
				return false;
			}
			if (key < node.key) {
				return searchNode(node.left, key)
			} else if (key > node.key) {
				return searchNode(node.right, key)
			} else {
				return true;
			}
		}
		this.search = function(key) {
			return searchNode(root, key)
		}

		//找到最小值的结点
		var findMinNode = function(node) {
			if (node) {
				while (node && node.left !== null) {
					node = node.left;
				}
				return node
			}
			return null
		}

		//删除结点
		var removeNode = function(node, key) {
			if (node === null) {
				return null;
			}

			if (key < node.key) {
				node.left = removeNode(node.left, key)
				return node;
			} else if (key > node.key) {
				node.right = removeNode(node.right, key)
			} else { //相等

				//没有左右子树，直接node 赋值为 null 返回null通过程序的回溯将node.left 或 node.right 赋值为 null
				if (node.left === null && node.right === null) {
					node = null;
					return node;
				}

				//没有左子树，将 删除结点的右子树 赋值给  上层结点 的左子树或者右子树
				if (node.left === null) {
					node = node.right;
					return node;
				}

				//没有右子树，将 删除结点的左子树 赋值给  上层结点 的左子树或者右子树
				if (node.right === null) {
					node = node.left;
					return node;
				}

				//结点包含左子树和右子树

				//在该结点的右子树中查找到最小值结点
				var aux = findMinNode(node.right);
				//更新要删除结点的值为最小值
				node.key = aux.key;
				//删除最小值结点
				node.right = removeNode(node.right, aux.key);
				return node;

			}
		}
		this.remove = function(key) {
			root = removeNode(root, key)
		}
	}
