/*
  栈，它是一种受限的限制的线性表， 后进先出。
  允许在表的一端进行插入和删除运算，这一端称为栈顶，另外一端称为栈底。
*/


function Stack() {
	//栈属性
	this.items = [];

	// 入栈
	Stack.prototype.push = function(element) {
		// 在数组的尾部压入元素
		return this.items.push(element);
	}

	// 出栈
	Stack.prototype.pop = function() {
		// 从数组尾部删除元素，并返回栈顶元素
		return this.items.pop();
	}

	// 查看栈顶元素
	Stack.prototype.peek = function() {
		// 从数组尾部查看元素
		return this.items[this.items.length - 1];
	}

	// 判断栈是否为空
	Stack.prototype.isEmty = function() {
		// 判断数组是否为空
		return this.items.length === 0;
	}

	// 查看栈长度
	Stack.prototype.size = function() {
		// 查看数组长度
		return this.items.length;
	}

	// toString 方法
	Stack.prototype.toString = function() {
		let resultString = '';
		// 遍历数组
		for (let i = 0; i < this.items.length; i++) {
			resultString += this.items[i] + ''
		}
		return resultString
	}
}
