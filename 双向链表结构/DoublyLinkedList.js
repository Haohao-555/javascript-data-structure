function DoublyLinkedList() {
	// 属性
	this.head = null;
	this.tail = null;
	this.length = 0;

	//内部类
	function Node(data) {
		this.data = data;
		this.prev = null;
		this.next = null;
	}

	// 向列表尾部添加一个新的项
	DoublyLinkedList.prototype.append = function(data) {
		const newNode = new Node(data);

		// 判断是否添加的是第一个结点
		if (this.length === 0) {
			this.head = newNode;
		} else {
			// 找到链表的最后一个结点
			let current = this.head;
			while (current.next) {
				current = current.next;
			}
			// 最后一个结点指向下一个结点
			current.next = newNode;
			// 新的结点指向上一个结点
			newNode.prev = current;
		}
		// 更新指向最后一个结点
		this.tail = newNode;
		// 更新长度
		this.length += 1;
	}

	// 向列表的特定位置插入一个新的项
	DoublyLinkedList.prototype.insert = function(position, data) {
		// 越界判断
		if (position < 0 || position > this.length) return false;
        const newNode = new Node(data);
		// 判断原来链表是否为空
		if (this.length == 0) {
			this.head = newNode;
			this.tail = newNode;
		} else {
			// 判断 position 是否为 0
			if (position == 0) {
				this.head.prev = newNode;
				newNode.next = this.head;
				this.head = newNode;
			} else if (position == this.length) {
				newNode.prev = this.tail;
				this.tail.next = newNode;
				this.tail = newNode;
			} else {
				let current = this.head;
				let index = 0;
				while (index++ < position) {
					current = current.next;
				}
				newNode.next = current;
				newNode.prev = current.prev;
				current.prev.next = newNode;
				current.prev = newNode;
			}
			this.length += 1;
			return true;
		}
	}

	// 获取对应位置的元素
	DoublyLinkedList.prototype.get = function(position) {
		// 越界判断
		if (position < 0 || position >= this.length) return false;
		let current = this.head;
		let index = 0;
		while (index++ < position) {
			current = current.next;
		}
		return current.data;
	}

	// 返回元素在列表中的索引，如果列表中没有该元素则返回 -1
	DoublyLinkedList.prototype.indexOf = function(data) {
		let current = this.head;
		let index = 0;
		while (current) {
			if (current.data == data) {
				return index;
			}
			current = current.next;
			index += 1;
		}
		return -1;
	}

	// 修改某个位置的元素
	DoublyLinkedList.prototype.update = function(position, newData) {
		// 越界判断
		if (position < 0 || position >= this.length) return false;
		let current = this.head;
		let index = 0;
		while (index++ < position) {
			current = current.next;
		}
		current.data = newData;
		return true;
	}

	// 从列表的特定位置移除一项
	DoublyLinkedList.prototype.removeAt = function(position) {
		// 越界判断
		if (position < 0 || position >= this.length) return null;
		let current = this.head;
		if (this.length == 1) {
			// 只存在一个结点
			this.head = null;
			this.tail = null;
		} else {
			// postion 为 0
			if (position == 0) {
				this.head.next.prev = null;
				this.head = this.head.next;
			} else if (position == this.length - 1) {
				// postion 为 this.length
				current = this.tail;
				this.tail.prev.next = null;
				this.tail = this.tail.prev;
			} else {
				// postion 为 任意值
				let index = 0;
				while (index++ < position) {
					current = current.next;
				}
				current.prev.next = current.next;
				current.next.prev = current.prev;
			}
		}
		this.length -= 1;
		return current.data;
	}

	// 从列表移除一项
	DoublyLinkedList.prototype.remove = function(data) {
		let postion = this.indexOf(data);
		return this.removeAt(postion);
	}

	// 如果链表中不包含任何元素，返回 true
	DoublyLinkedList.prototype.isEmpty = function() {
		return this.length == 0;
	}

	// 返回链表包含的元素个数
	DoublyLinkedList.prototype.size = function() {
		return this.length;
	}
	
	// 获取链表的第一个元素
	DoublyLinkedList.prototype.getHead = function() {
		return this.head.data;
	}
	
	// 获取链表的最后一个元素
	DoublyLinkedList.prototype.getTail = function() {
		return this.tail.data;
	}

	// toString 方法
	DoublyLinkedList.prototype.toString = function() {
		this.forwordString();
	}

	// 返回正向遍历的节点字符串形式
	DoublyLinkedList.prototype.forwordString = function() {
		let current = this.head;
		let resultString = "";
		while (current) {
			resultString += current.data + " ";
			current = current.next;
		}
		return resultString;
	}

	// 返回反向遍历的节点字符串形式
	DoublyLinkedList.prototype.backwordString = function() {
		let current = this.tail;
		let resultString = "";
		while (current) {
			resultString += current.data + " ";
			current = current.prev;
		}
		return resultString;
	}
}
