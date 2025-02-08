class Graph{  
    constructor(){
       this.adjacencyList = {}
    }
    addVertex(vertex){
        if(!this.adjacencyList[vertex])
         this.adjacencyList[vertex] = new Set()
    }   
    addEdge(vertex1 , vertex2){
        if(!this.adjacencyList[vertex1]){
            this.adjacencyList[vertex1]
        }
        if(!this.adjacencyList[vertex2]){
            this.adjacencyList[vertex2]
        }
        this.adjacencyList[vertex1].add(vertex2)
        this.adjacencyList[vertex2].add(vertex1)
    }
    display(){
        for(let vertex in this.adjacencyList){
            console.log(vertex +'-->'+ [...this.adjacencyList[vertex]]);
        }
    }
    hasEdge(vertex1,vertex2){
        return(
            this.adjacencyList[vertex1].has(vertex2) && this.adjacencyList[vertex2].has(vertex1)
        )
    }
    removeEdge(vertex1 , vertex2){
        this.adjacencyList[vertex1].delete(vertex2)
        this.adjacencyList[vertex2].delete(vertex1)
    }
    removeVertex(vertex){
        if(!this.adjacencyList[vertex]){
            return
        }
        for(let adjacentVertex of this.adjacencyList[vertex]){
            this.removeEdge(vertex , adjacentVertex)
        }
        delete this.adjacencyList[vertex]
    }
     depthFirstRecursive(vertex){
         const result = []
         const visted  = {}
         const adjacencyList = this.adjacencyList;
        (function dfs(vertex) {
            if(!vertex)  return null
            visted[vertex] = true
            result.push(vertex)
            adjacencyList[vertex].forEach(neighbour=>{
                if(!visted[neighbour]){
                    return dfs(neighbour)
                }
            })
         })(vertex)
         console.log(result);
     }
     breadthFirstRecursion(vertex){
             const queue = [vertex]
             const result = []
             const visted = {}
             let currentvertex;
             visted[vertex] = true

             while(queue.length){
                 currentvertex = queue.shift()
                 result.push(currentvertex)

                 this.adjacencyList[currentvertex].forEach(neighbour =>{
                    if(!visted[neighbour]){
                        visted[neighbour] = true
                        queue.push(neighbour)
                    }
                 })
             }
             console.log(result);
     }
}

let graph = new Graph()
graph.addVertex('a')
graph.addVertex('b')
graph.addVertex('c')
graph.addVertex('d')
graph.addVertex('e')
graph.addVertex('f')


graph.addEdge('a','b')
graph.addEdge('a','c')
graph.addEdge('b','d')
graph.addEdge('c','e')
graph.addEdge('d','e')
graph.addEdge('d','f')
graph.addEdge('e','f')

// console.log(graph.hasEdge('a','g'));
// graph.removeEdge('a','b')
// graph.removeVertex('b')
graph.depthFirstRecursive('a')
// graph.breadthFirstRecursion('a')
// graph.display()






class Graph {
    constructor() {
      this.adjustancyList = {};
    }
  
    addVertex(vertex) {
      if (!this.adjustancyList[vertex]) this.adjustancyList[vertex] = [];
    }
  
    addEdge(v1, v2) {
      this.adjustancyList[v1].push(v2);
      this.adjustancyList[v2].push(v1);
    }
  
    display() {
      for (let vertex in this.adjustancyList) {
        console.log(vertex, "-->", [...this.adjustancyList[vertex]]);
      }
    }
  
    removeEdge(v1, v2) {
      this.adjustancyList[v1] = this.adjustancyList[v1].filter(
        (val) => val !== v2
      );
      this.adjustancyList[v2] = this.adjustancyList[v2].filter(
        (val) => val !== v1
      );
    }
  
    removeVertex(vertex) {
      while (this.adjustancyList[vertex].length) {
        let cur = this.adjustancyList[vertex].pop();
        this.removeEdge(vertex, cur);
      }
      delete this.adjustancyList[vertex];
    }
  
    DFS(v) {
      let result = [];
      let visted = {};
      let adjustancyList = this.adjustancyList;
      (function dfs(vertex) {
        visted[vertex] = true;
        result.push(vertex);
        adjustancyList[vertex].forEach((neighbour) => {
          if (!visted[neighbour]) {
            dfs(neighbour);
          }
        });
      })(v);
      console.log(result);
    }
  
    BFS(v) {
      const queue = [v];
      const result = [];
      const visted = {};
      let currentvertex;
      visted[v] = true;
      while (queue.length) {
        currentvertex = queue.shift();
        result.push(currentvertex);
        this.adjustancyList[currentvertex].forEach((neighbour) => {
          if (!visted[neighbour]) {
            queue.push(neighbour);
            visted[neighbour] = true;
          }
        });
      }
      console.log(result);
      
    }
  }
  
  const graph = new Graph();
  graph.addVertex("a");
  graph.addVertex("b");
  graph.addVertex("c");
  graph.addVertex("d");
  
  graph.addEdge("a", "b");
  graph.addEdge("b", "c");
  graph.addEdge("c", "d");
  graph.addEdge("d", "a");
  
  graph.BFS("a");
  // console.log("////////////");
  // graph.removeVertex("a");
  // graph.display();
      

  function isCyclicUndirected(graph) {
    const visited = new Set();
  
    function dfs(v, parent) {
      visited.add(v);
  
      for (const neighbor of graph[v]) {
        if (!visited.has(neighbor)) {
          if (dfs(neighbor, v)) return true;
        } else if (neighbor !== parent) {
          return true;
        }
      }
  
      return false;
    }
  
    for (const vertex in graph) {
      if (!visited.has(vertex)) {
        if (dfs(vertex, null)) return true;
      }
    }
  
    return false;
  }
  
  const graphUndirected = {
    0: [1, 2],
    1: [0, 2],
    2: [0, 1, 3],
    3: [2]
  };
  
  console.log(isCyclicUndirected(graphUndirected)); // Output: true