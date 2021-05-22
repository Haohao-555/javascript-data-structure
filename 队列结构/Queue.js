// 队列封装
function Queue() {
	// 属性
	this.items = [];
	 
	// 入队
	Queue.prototype.enqueue = function(element) {
		// 在数组的尾部添加元素
		return this.items.push(element);
	}
	
	// 出队
	Queue.prototype.inqueue = function() {
		// 从数组中删除队头元素，并返回队头元素
		return this.items.shift();
	}
	
	// 查看队头元素
	Queue.prototype.front = function() {
		// 从数组中查看数组第一个元素
		return this.items[0];
	}
	
	// 判断队列是否为空
	Queue.prototype.isEmpty = function() {
		// 判断数组是否为空
		return this.items.length === 0;
	}
	
	//查看队列长度
	Queue.prototype.size = function() {
		// 查看数组长度
		return this.items.length;
	}
	
	// toString 方法
	Queue.prototype.toString = function() {
		let resultString = '';
		// 遍历数组
		for (let i = 0; i < this.items.length; i++) {
			resultString += this.items[i] + ''
		}
		return resultString
	}
}