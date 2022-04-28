function Graph() {
  this.vertexes = []
  this.edges = {}
  // addVertex: 添加顶点
  // addEdge： 添加边
  // initState: 初始化顶点的状态。 1.表示未被访问也未被探索。2.表示被访问但未被探索。3.表示被探索
  // bfs： 广度优先搜索
  // dfs： 深度优先搜索
  // toString： 重新toString方法，以邻接表的形式打印出来
  /**
   * 添加单个顶点
   * @param v： 顶点值
   */
  Graph.prototype.addVertex = function (v) {
    this.vertexes.push(v)
    this.edges[v] = []
  }
  /**
   * 批量添加顶点
   * @param vList： 顶点数组
   */
  Graph.prototype.addVertexes = function (vList) {
    for (var i = 0; i < vList.length; i++) {
      var v = vList[i]
      this.vertexes.push(v)
      this.edges[v] = []
    }
  }
  /**
   * 添加边
   * @param v1：顶点1
   * @param v2： 顶点2
   */
  Graph.prototype.addEdge = function (v1, v2) {
    this.edges[v1].push(v2)
    this.edges[v2].push(v1)
  }
  /**
   * initState: 初始化顶点的状态。 1.表示未被访问也未被探索。2.表示被访问但未被探索。3.表示被探索
   * @returns {{}}: 状态映射表
   */
  Graph.prototype.initState = function () {
    var stateMap = {}
    for (var i = 0; i < this.vertexes.length; i++) {
      var v = this.vertexes[i]
      stateMap[v] = 1
    }
    return stateMap
  }
  /**
   * 广度优先搜索
   * @param initV： 第一个访问的顶点
   * @param handler： 处理遍历到的顶点的回调函数
   */
  Graph.prototype.bfs = function (initV, handler) {
    var state = this.initState()
    var queue = []
    queue.push(initV)
    state[initV] = 2
    while (queue.length > 0) {
      var v = queue.shift()
      var vList = this.edges[v]
      for (var i = 0; i < vList.length; i++) {
        var e = vList[i]
        if (state[e] == 1) {
          queue.push(e)
          state[e] = 2
        }
      }
      handler(v)
      state[v] = 3
    }
  }
  /**
   * 深度优先搜索
   * @param initV： 第一个访问的顶点
   * @param handler： 处理遍历到的顶点的回调函数
   */
  Graph.prototype.dfs = function (initV, handler) {
    var state = this.initState()
    this.dfsVertex(initV,state,handler)
  }
  /**
   * 递归访问每个节点相关联的顶点
   * @param v：需要访问的顶点
   * @param state： 状态映射表
   * @param handler：处理遍历到的顶点的回调函数
   */
  Graph.prototype.dfsVertex = function (v, state, handler) {
    state[v] = 2
    handler(v)
    var vList = this.edges[v]
    for (var i = 0; i < vList.length; i++) {
      var e = vList[i]
      if (state[e] == 1) {
        this.dfsVertex(e,state,handler)
      }
    }
    state[v] = 3
  }
  /**
   * 重写toString方法，以邻接表的形式打印出来
   */
  Graph.prototype.toString = function () {
    var resultStr = ''
    for (var i = 0; i < this.vertexes.length; i++) {
      var v = this.vertexes[i]
      resultStr += v + '->'
      var vList = this.edges[v]
      for (var j = 0; j < vList.length; j++) {
        var e = vList[j]
        resultStr += e + ' '
      }
      resultStr += '\n'
    }
    return resultStr
  }
}

const graph = new Graph()
var vertexList = ['A','B','C','D','E','F','G','H','I']
graph.addVertexes(vertexList)
graph.addEdge('A','B')
graph.addEdge('A','C')
graph.addEdge('A','D')
graph.addEdge('C','D')
graph.addEdge('C','G')
graph.addEdge('D','G')
graph.addEdge('D','H')
graph.addEdge('B','E')
graph.addEdge('B','F')
graph.addEdge('E','I')
console.log(graph.toString());
graph.bfs(graph.vertexes[graph.vertexes.length - 1],function (v) {
  console.log(v);
})
console.log('----------------------------');
graph.dfs(graph.vertexes[0],function (v) {
  console.log(v);
})
console.log('----------------------------');
graph.dfs(graph.vertexes[graph.vertexes.length - 1],function (v) {
  console.log(v);
})

