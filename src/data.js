import Project from "./project.js";
import Task from "./task.js"


let data = (function data(){
    let data = [];
    const get = () => data;

    let selectedProject = null;
    const getSelected = () => selectedProject;

    function selectProject(index){
        if (!data[index]) return;
        selectedProject = index;
    }

    
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
    
    function save(){
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
    
    return { get, addProject, save, selectProject, getSelected }
    })()

export default data;