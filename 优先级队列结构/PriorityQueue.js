function PriorityQueue() {
	
	// 元素包含两部分 element 数据 priority 优先级
	function QueueElement(element, priority) {
		this.element = element;
		this.priority = priority;
	}
	
	// 封装属性
	this.items = [];
	
	// 实现插入方法
	PriorityQueue.prototype.enqueue = function(element, priority) {
		// 创建 QueueElement 对象
		const queueElement = new queueElement(element, priority)
		
		// 判断队列是否为空
		if (this.items.length == 0) {
			// 为空 直接将数据插入到数组中
			this.items.push(queueElement)
		} else {
			let added = false;
			for (let i = 0; i < this.items.length; i++) {
				// 数字越小，优先级越高。
				if(queueElement.priority < this.items[i].priority) {
					// 在数组的第 i 位插入数据
					this.items.splice(i, 0, queueElement);
					added = true;
					break;
				}
			}
			
			if(!added) {
				// 优先级在数组中最低直接插入
				this.items.push(queueElement)
			}
		}
	}
	// 其他方法跟队列的一致
}
const priorityQueue = new PriorityQueue()

priorityQueue.enqueue(12, 10);