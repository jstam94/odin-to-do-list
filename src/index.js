import Project from "./project.js";
import Task from "./task.js"

let data = [];


function addProject(name, description){
    data.push(new Project(name, description)) 
}

const start = (function()
    {if(!localStorage.savedData){
    defaultProjects();
    defaultTasks();
        } else data = getSaved();
    })()

function defaultProjects(){
    addProject('Project 1','I am the first example')
    addProject('Project 2','I am the second example')  
    addProject('Project 3','I am the third example')                         
}

function defaultTasks(){
    data.forEach(project => {
        project.addTask('Task 1 ', 'I am the first task', 'Test Date', 'Prio', 'bla lob law')
        project.addTask('Task 2 ', 'I am the second task', 'Test Date', 'Prio', 'bla lob law')
        project.addTask('Task 3 ', 'I am the third task', 'Test Date', 'Prio', 'bla lob law')
    });
}

function setSaved(){
    localStorage.savedData = JSON.stringify(data)
    let cleanProjects = JSON.parse(localStorage.savedData)
   

    cleanProjects.forEach(project => {
        Object.setPrototypeOf(project, Project.prototype)
    });
}

function getSaved(){
    let data = JSON.parse(localStorage.savedData)

    data.forEach(project => {
        Object.setPrototypeOf(project, Project.prototype)
        project.tasks.forEach(task => {
            Object.setPrototypeOf(task, Task.prototype)
            });
    });
    return data
}

let DOMController = (function(){
    document.querySelector('.save').addEventListener('click', () => setSaved())
    document.querySelector('.test').addEventListener('click', () => { 
        console.log('Logging Data', data)
        render();
    })

    const nav = document.querySelector('.sidebar')

    function render(){
    nav.innerHTML = ``
    data.forEach(project => {
        const li = document.createElement('li');
        li.textContent = project.name;
        nav.appendChild(li)
    });
}
    return {render}
})()