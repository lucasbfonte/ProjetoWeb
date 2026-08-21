let taskInput = document.getElementById("taskInput");
let addTaskButton = document.getElementById("addTaskButton");
let taskList = document.getElementById("taskList");
let subjectInput = document.getElementById("subjectInput");
let addSubjectButton = document.getElementById("addSubjectButton");
let subjectList = document.getElementById("subjectList");

addSubjectButton.addEventListener("click", function() {
    let subjectAdd = document.createElement("li");
    subjectAdd.textContent = subjectInput.value;
    subjectList.appendChild(subjectAdd);
    subjectInput.value = "";

    let removeSubjectButton = document.createElement("button");
    removeSubjectButton.textContent = " Remover";
    subjectAdd.appendChild(removeSubjectButton);
    removeSubjectButton.addEventListener("click", function() {
        subjectList.removeChild(subjectAdd);
    });
});

addTaskButton.addEventListener("click", function() {
    let taskAdd = document.createElement("li");
    taskAdd.textContent = taskInput.value;
    taskList.appendChild(taskAdd);
    taskInput.value = "";  

    let completeButton = document.createElement("button");
    completeButton.textContent = "";
    taskAdd.appendChild(completeButton);
    let isComp = false;
    completeButton.addEventListener("click", function() {
        if (!isComp){
            completeButton.textContent = "✓";
            completeButton.style.color = "green";
            taskAdd.style.textDecoration = "line-through";
            isComp = true;
        } else {
            completeButton.textContent = "";
            completeButton.style.color = "black";
            taskAdd.style.textDecoration = "none";
            isComp = false;
        }
    });
    completeButton.addEventListener("mouseover", function() {
        if (!isComp){
            completeButton.textContent = "✓";
            completeButton.style.color = "green";
        } else {
            completeButton.textContent = "✗"; 
            completeButton.style.color = "red";
        }
    });
    completeButton.addEventListener("mouseout", function() { 
        if (!isComp){
            completeButton.textContent = "";
        } else {
            completeButton.textContent = "✓";
            completeButton.style.color = "green";
        }
    });

    
    let removeTaskButton = document.createElement("button");
    removeTaskButton.textContent = " Remover";
    taskAdd.appendChild(removeTaskButton);
    removeTaskButton.addEventListener("click", function() {
        taskList.removeChild(taskAdd);
    });
});

    

