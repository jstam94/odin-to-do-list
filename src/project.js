import Task from './task.js'

export default class Project{


    constructor(name, description){
        this.name = name;
        this.description = description
        this._tasks = [];
}
    addTask(title, description, dueDate, priorty, notes){
        const task = new Task (title, description, dueDate, priorty, notes);
        this._tasks.push(task);
    }

    removeTask(task){
        console.log(this.tasks)
    }
    
    get tasks(){
        return this._tasks;
    }
}