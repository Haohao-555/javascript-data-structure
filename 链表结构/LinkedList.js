function LinkedList() {
	//内部类： 节点类
	function Node(data){
		this.data = data;
		this.next = null;
	}
	
	//属性
	this.head = null;
	this.length = 0;
	
	// 向列表尾部添加一个新的项
	LinkedList.prototype.append = function(data) {
		const newNode = new Node(data);
		// 判断是否为第一个节点
		if (this.length == 0) {
	        // 将头部指向第一结点
			this.head = newNode;
		} else {
			 // 在链表中找到最后一个结点插入节点
			 let current = this.head
			 while (current.next) { // 下一个结点不为空
				 current = current.next
			 }
			 // 最后节点的 next 指向新的节点
			 current.next = newNode;
		}
		// 更新链表长度
		this.length += 1;
	}
	
	// 向列表的特定位置插入一个新的项
	LinkedList.prototype.insert = function(position, data) {
		// 对 position 进行越界判断
		if (position < 0 || position > this.length) return false;
		
		// 创建 newNode
		const newNode = new Node(data);
		
		// 判断插入的位置是否是第一个位置
		if (position == 0) {
			newNode.next = head; 
			this.head = newNode;
		} else {
		   // 找到指定位置
		   let index = 0;
		   let current = this.head;
		   // 前一个节点
		   let previous = null;
		   while (index++ < position) {
			   previous = current;
			   current = current.next;
		   }
		   newNode.next = current;
		   previous.next = newNode;
		}
		// 更新长度
		this.length += 1
		return true;
	}
	
	// 获取对应位置的元素
	LinkedList.prototype.get = function(position) {
		// 对 position 进行越界判断
		if (position < 0 || position >= this.length) return null;
		let current = this.head
		let index = 0;
		while (index++ < position) {
			current = current.next;
		}
		return current.data;
	}
	
	// 返回元素在列表中的索引，如果列表中没有该元素则返回 -1
	LinkedList.prototype.indexOf = function(data) {
		let current = this.head;
		let index = 0;
		while(current) {
			if (current.data === data) {
				return index;
			}
			index += 1;
			current = current.next;
		}
		return -1;
	}
	
	// 修改某个位置的元素
	LinkedList.prototype.update = function(position, newData) {
		// 对 position 进行越界判断
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
	LinkedList.prototype.removeAt = function(position) {
		// 对 position 进行越界判断
		if (position < 0 || position >= this.length) return null;
		let current = this.head;
		
		// 判断是否删除第一个节点
		if (position === 0) {
			this.head = this.head.next;
		} else {
			let index = 0;
			let previous = null;
			while (index++ < position) {
				previous = current;
				current = current.next;
			}
			// 前者指向后者的后者
			previous.next = current.next;
			
			// 更新长度
			this.length -= 1;
			
			return current.data;
		}
	}
	
	// 从列表中移除一项
	LinkedList.prototype.remove = function(data) {
		// 根据 data 获取位置
		let position = this.indexOf(data);
		//根据位置信息，删除节点
		return this.removeAt(position);	
	}
	
	// 如果链表中不包含任何元素，返回 true
	LinkedList.prototype.isEmpty = function() {
		return this.length === 0;
	}
	
	// 返回链表包含的元素个数
	LinkedList.prototype.size = function() {
		return this.length;
	}
	
	// toString 方法
	LinkedList.prototype.toString = function() {
		let listString = '';
		let current = this.head;
		
		//循环获取节点
		while (current) {
			listString += current.data + " ";
			current = current.next;
		}
		return listString;
	}
}