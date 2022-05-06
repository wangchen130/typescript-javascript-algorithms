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
  /**
   * 选择排序
   */
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
    var len = this.array.length
    for (var i = 1; i < len; i++) {
      var temp = this.array[i]
      var j = i
      while (temp < this.array[j - 1] && j > 0) {
        this.array[j] = this.array[j - 1]
        j--
      }
      this.array[j] = temp
    }
  }
  ArrayList.prototype.shellSort = function () {
    var len = this.array.length
    var gap = Math.floor(len / 2)
    while (gap >= 1) {
      for(var i = gap; i < len; i++) {
        var temp = this.array[i]
        var j = i
        while (temp < this.array[j - gap] && j - gap >= 0) {
          this.array[j] = this.array[j - gap]
          j -= gap
        }
        this.array[j] = temp
      }
      gap = Math.floor(gap / 2)
    }
  }
  ArrayList.prototype.quickSort = function () {
    this.quick(0, this.array.length - 1)
  }
  /**
   * 递归调用的函数
   * @param left
   * @param right
   */
  ArrayList.prototype.quick = function (left, right) {
    if (left >= right) return
    // 获取快速排序的枢纽，该枢纽为right - 1 位置的数据
    var pivot = this.median(left, right)
    var i = left
    var j = right - 1
    while (true) {
      while (this.array[++i] < pivot) {}
      while (this.array[--j] > pivot) {}
      if (i < j) {
        this.swap(i,j)
      } else {
        break;
      }
    }
    this.swap(i, right - 1)
    // 递归调用左边
    this.quick(left, i - 1)
    // 递归调用右边
    this.quick(i + 1, right)
  }

  /**
   * 查询数组的中位数
   * @param left
   * @param right
   * @returns {*}
   */
  ArrayList.prototype.median = function (left, right) {
    var middle = Math.floor((left + right) / 2)
    if (this.array[left] > this.array[middle]) {
      this.swap(left,middle)
    }
    if (this.array[left] > this.array[right]) {
      this.swap(left, right)
    }
    if (this.array[middle] > this.array[right]) {
      this.swap(middle, right)
    }
    this.swap(middle, right - 1)
    return this.array[right - 1]
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
// console.log('========selectSort======');
// arrayList.selectSort()
// console.log('========insertSort======');
// arrayList.insertSort()
// console.log('========shellSort======');
// arrayList.shellSort()
console.log('========quickSort======');
arrayList.quickSort()
console.log(arrayList.toString());
