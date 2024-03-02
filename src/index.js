import Project from "./project.js";





let test = new Project('test', 'test')
console.log(test)
test.removeTask()
console.log(test.tasks)
console.log(test.tasks)
test.addTask('1',2,3,4,5,null)
console.log(test.tasks)