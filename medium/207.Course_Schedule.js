/**
 * @param {number} numCourses
 * @param {number[][]} prerequisites
 * @return {boolean}
 */
var canFinish = function (numCourses, prerequisites) {
    // 邻接表 记录这门课被哪些课依赖
    const graph = new Map();
    // 入度表 记录上这门课前需要上哪些课,依赖了多少课
    const inDegree = new Map();
  
    // 初始化邻接表和入度表
    for (const [course, dependency] of prerequisites) {
      graph.set(dependency, [])
      graph.set(course, [])
      inDegree.set(course, 0);
      inDegree.set(dependency, 0);
    }
  
    // 计算出邻接表和入度表
    for (const [course, dependency] of prerequisites) {
      graph.get(dependency).push(course);
      inDegree.set(course, inDegree.get(course) + 1);
    }
  
    // BFS从inDegree为0的开始
    const queue = [];
    for (const [course, count] of inDegree.entries()) {
      if (count === 0) queue.push(course);
    }
  
  
    while (queue.length > 0) {
      const course = queue.shift();
      // 依赖了当前课的其他课可以减少1个依赖了
      graph.get(course).forEach((item) => {
        inDegree.set(item, inDegree.get(item) - 1);
        if (inDegree.get(item) === 0) {
          queue.push(item)
        }
      })
    }
    // 入度表中所有课程的前置课程都能上完，意味着入度表中的课程都可以上完
    // [].every((num)=>num===0)也为true
    return [...inDegree.values()].every((num)=>num===0);
  }