
export default function linebuilder(task, key){
    console.log(`bread`);
    console.log(task[key]);
    console.log({task, key});
    let element = document.createElement('div')
    
    let name = document.createElement('h3')
    name.textContent = key
    element.appendChild(name)

    let value = document.createElement('p')
    value.textContent =  task[key]
    element.appendChild(value)
    return element;
}

