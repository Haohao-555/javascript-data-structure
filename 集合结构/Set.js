function Set() {
	// 属性
	this.items = {}
	
	// 先集合添加一个新的项
	Set.prototype.add = function(value) {
		// 判断当前集合中已经包含该元素
		if (this.has(value)) {
			return false;
		}
		this.items[value] = value;
		return true;
	}
	
	// 从集合中移除一个值
	Set.prototype.remove = function(value) {
		// 判断当前集合中已经包含该元素
		if (!this.has(value)) {
			return false;
		}
		delete this.items[value]
		return true;
	}
	
	// 如果值在集合中，返回 true 反之 false
	Set.prototype.has = function(value) {
		return this.items.hasOwnProperty(value);
	}
	
	// 移除集合中的所有项
	Set.prototype.clear = function() {
		this.items = {};
	}
	
	// 返回集合所包含元素的数量
	Set.prototype.size = function() {
		return Object.keys(this.items).length;
	}
	
	// 返回一个包含结合中所有值的数组
	Set.prototype.values = function() {
		return Object.keys(this.items)
	}
	
	// 并集
	Set.prototype.union = function(otherSet) {
		let unionSet = new Set();
		
		// 将集合A 的所有元素添加到新的集合中
		let values = this.values();
		for (let i = 0; i < values.length; i++) {
			unionSet.add(values[i]); 
		}
		
		values = otherSet.values();
		for (let i = 0; i < values.length; i++) {
			unionSet.add(values[i]); 
		}
		
		return unionSet;
	}
	
	// 交集
	Set.prototype.intersection = function(otherSet) {
		let intersectionSet = new Set();
		
		let values = this.values();
		for (let i = 0; i < values.length; i++) {
			let item = values[i];
			if(otherSet.has(item)) {
				intersectionSet.add(item);
			}
		}
		
		return intersectionSet;
	}
	
	// 差集
	Set.prototype.difference = function(otherSet) {
		let differentSet = new Set();
		let values = this.values();
		for (let i =0; i< values.length; i++) {
			let item = values[i];
			if (!otherSet.has(item)) {
				differentSet.add(item); 
			}
		}
		return differentSet;
	}
	
	// 子集
	Set.prototype.subset = function(otherSet) {
		let  = new Set();
		let values = this.values();
		for (let i =0; i< values.length; i++) {
			let item = values[i];
			if (!otherSet.has(item)) {
				return false;
			}
		}
		return true;
	}
}