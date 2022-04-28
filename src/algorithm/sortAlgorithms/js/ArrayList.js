function ArrayList() {
  this.array = []
  // insert(item): 插入元素
  // insertList(itemList): 批量插入元素
  // swap(m,n): 交换m位置和n位置的两个元素
  // bubbleSort(): 冒泡排序
  // selectSort(): 选择排序
  // insertSort(): 插入排序
  // shellSort(): 希尔排序
  // quickSort(): 快速排序
  // toString(): 重写toString方法
  /**
   * insert(item): 插入元素
   * @param item: 需要插入的元素
   */
  ArrayList.prototype.insert = function (item) {
    this.array.push(item)
  }
  /**
   * insertList(itemList): 批量插入元素
   * @param itemList： 元素数组
   */
  ArrayList.prototype.insertList = function (itemList) {
    for (var i = 0; i < itemList.length; i++) {
      var item = itemList[i]
      this.array.push(item)
    }
  }
  /**
   * swap(m,n): 交换m位置和n位置的两个元素
   * @param m
   * @param n
   */
  ArrayList.prototype.swap = function (m, n) {
    var temp = this.array[m]
    this.array[m] = this.array[n]
    this.array[n] = temp
  }
  /**
   * 冒泡排序
   */
  ArrayList.prototype.bubbleSort = function () {
    var len = this.array.length
    for (var i = len - 1; i >= 0 ; i--) {
      for (var j = 0; j < i; j++) {
        if (this.array[j] > this.array[j + 1]) {
          this.swap(j,j + 1)
        }
      }
    }
  }
  ArrayList.prototype.selectSort = function () {
    var len = this.array.length
    for (var i = 0; i < len; i++) {
      var min = i
      for (var j = min + 1; j < len; j++) {
        if (this.array[j] < this.array[min]) {
          min = j
        }
      }
      this.swap(min,i)
    }
  }
  ArrayList.prototype.insertSort = function () {

  }
  /**
   * 重写toString方法
   * @returns {string}
   */
  ArrayList.prototype.toString = function () {
    return this.array.join('-')
  }
}
var arrayList = new ArrayList()
arrayList.insertList([100,1,50,40,90,80,20,10,30,70,60])
console.log(arrayList.toString());
// console.log('========bubbleSort======');
// arrayList.bubbleSort()
// console.log(arrayList.toString());
console.log('========selectSort======');
arrayList.selectSort()
console.log(arrayList.toString());
