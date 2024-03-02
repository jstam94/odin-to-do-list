import data from './data.js'



let DOMController = (function(){
    document.querySelector('.save').addEventListener('click', () => data.save())
    document.querySelector('.test').addEventListener('click', () => { 
        console.log('Logging Data', data.get())
        render();
    })

    const nav = document.querySelector('.sidebar')

    function render(){  
        nav.innerHTML = ``
        data.get().forEach(project => {
        const li = document.createElement('li');
        li.textContent = project.name;
        nav.appendChild(li)
    });
}
    return {render}
})()