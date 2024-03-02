import Project from "./project.js";

const projects = [];

function addProject(name, description){
    projects.push(new Project(name, description)) 
}




defaultProjects();
defaultTasks();


function defaultProjects(){
    addProject('Project 1','I am the first example')
    addProject('Project 2','I am the second example')  
    addProject('Project 3','I am the third example')                         
}

function defaultTasks(){
    projects.forEach(project => {
        project.addTask('Task 1 ', 'I am the first task', 'Test Date', 'Prio', 'bla lob law')
        project.addTask('Task 2 ', 'I am the second task', 'Test Date', 'Prio', 'bla lob law')
        project.addTask('Task 3 ', 'I am the third task', 'Test Date', 'Prio', 'bla lob law')
    });
}



console.log(projects)
