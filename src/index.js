import data from './data.js'
import lineBuilder from './linebuilder.js'


let DOMController = (function(){
    const nav = document.querySelector('.sidebar')
    const tasklist = document.querySelector('.tasks')
    

    document.querySelector('.save').addEventListener('click', () => data.save())
    document.querySelector('.test').addEventListener('click', () => { 
        renderTasks()
    })

    
    function render(){  
        renderProjects()
}
    function renderProjects(){
        let i = 0;
        nav.innerHTML = ``
        data.get().forEach(project => {
        const li = document.createElement('li');
        li.setAttribute('data-index', i)
        i ++;
        li.textContent = project.name;
        li.addEventListener('click', () =>{
        data.selectProject(li.getAttribute('data-index'))
        renderTasks();
        })
        nav.appendChild(li)

    });
    }

    function renderTasks(){
        tasklist.innerHTML = ``
        const tasks = data.get()[data.getSelected()].tasks
        let i = 0
        tasks.forEach(task => {
            const div = document.createElement('div');
            div.className = 'task'
            div.setAttribute('data-index', i)

            let title = document.createElement('h2')
            title.className = 'task-title';
            title.textContent = task.title
            div.appendChild(title)

            div.appendChild(lineBuilder(task, `description`))
            div.appendChild(lineBuilder(task, `dueDate`))
            div.appendChild(lineBuilder(task, `priority`))
            div.appendChild(lineBuilder(task, `isComplete`))
            div.appendChild(lineBuilder(task, `inProgress`))

            // let description = document.createElement('div')
            // description.className = 'task-prop';
            // title.textContent = task.title
            // div.appendChild(title)

            // let dueDate = document.createElement('h2')
            // title.className = 'task-title';
            // title.textContent = task.title
            // div.appendChild(title)

            // let priorty = document.createElement('h2')
            // title.className = 'task-title';
            // title.textContent = task.title
            // div.appendChild(title)

            // let notes = document.createElement('h2')
            // title.className = 'task-title';
            // title.textContent = task.title
            // div.appendChild(title)

            tasklist.appendChild(div)
            i++
        });
        


    }

    render()
    return {render}
})()

