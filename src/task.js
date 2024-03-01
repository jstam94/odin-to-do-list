export default class Task {
    constructor(title, description, dueDate, priorty, notes){
        this.title = title;
        this.description = description;
        this.dueDate = dueDate;
        this.priorty = priorty;
        this.notes = notes;
        this.isComplete = false;
        this.inProgess = false;
    }
}