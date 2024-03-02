import data from './data.js'



let DOMController = (function(){
    document.querySelector('.save').addEventListener('click', () => data.save())
    document.querySelector('.test').addEventListener('click', () => { 
        render()
    })

    const nav = document.querySelector('.sidebar')

    function render(){  
        let projectIndex = 0;
        nav.innerHTML = ``
        data.get().forEach(project => {
        const li = document.createElement('li');
        li.setAttribute('data-index', projectIndex)
        projectIndex ++;
        li.textContent = project.name;
        li.addEventListener('click', () =>{
        data.selectProject(li.getAttribute('data-index'))
        console.log('Logging Current', data.getSelected())
        })
        nav.appendChild(li)

    });
}
    return {render}
})()