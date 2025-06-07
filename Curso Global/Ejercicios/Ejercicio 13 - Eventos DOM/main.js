const addTaskButton = document.querySelector('#submit')
const cancelButton = document.querySelector('#cancel')
const taskContainer = document.querySelector('#container')
const changeBg = document.querySelector('#changeBg')
let taskText = document.querySelector('#addTask');



addTaskButton.addEventListener('click', function(){
    event.preventDefault()

    let task = document.createElement('li');
    let cancelTask = document.createElement('button');
    cancelTask.innerText = "Cancelar";
    
    if(taskText.value == "") {} else {
        taskContainer.appendChild(task)
        taskContainer.appendChild(cancelTask)
        task.innerText = taskText.value
    }



        task.addEventListener('mouseover', function() {
            task.style.color ='rgb(255, 0, 0)';
        })
        task.addEventListener('mouseout', function(){
            task.style.color = 'black'
        })
        cancelTask.addEventListener('click', function(){
            task.remove() 
            cancelTask.remove()})
    
    taskText.value = ""
})
cancelButton.addEventListener('click', function(){
    event.preventDefault()
    taskText.value = ""
})
changeBg.addEventListener('click', ()=> document.body.classList.toggle('green'))
