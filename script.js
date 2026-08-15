let input = document.getElementById("taskInput");
let addButton = document.getElementById("addButton");
let removeButton = document.getElementById("removeButton");
let taskList = document.getElementById("taskList");


addButton.addEventListener("click", function() {
    let taskAdd = document.createElement("li");
    taskAdd.textContent = input.value;
    taskList.appendChild(taskAdd);
    input.value = "";   
});

removeButton.addEventListener("click", function() {
    let taskRemove = taskList.lastElementChild;
    if (taskRemove) {
        taskList.removeChild(taskRemove);
    }
});
