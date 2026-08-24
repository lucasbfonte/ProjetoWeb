let taskInput = document.getElementById("taskInput");
let addTaskButton = document.getElementById("addTaskButton");
let taskList = document.getElementById("taskList");
let subjectInput = document.getElementById("subjectInput");
let addSubjectButton = document.getElementById("addSubjectButton");
let subjectList = document.getElementById("subjectList");
let subjects = [];
let subjectSelect = document.getElementById("subjectSelect");

function addSubject() {

    if (subjectInput.value.trim() !== "") {
        let subjectAdd = document.createElement("li");
        let subjectName = subjectInput.value;
        subjectAdd.textContent = subjectInput.value;
        subjectList.appendChild(subjectAdd);
        subjects.push(subjectName);
        subjectInput.value = "";

        let subjectOption = document.createElement("option");
        subjectOption.textContent = subjectName;
        subjectSelect.appendChild(subjectOption);

        let removeSubjectButton = document.createElement("button");
        removeSubjectButton.textContent = " Remover";
        subjectAdd.appendChild(removeSubjectButton);
        removeSubjectButton.addEventListener("click", function() {
            subjectList.removeChild(subjectAdd);
            subjects = subjects.filter(s => s !== subjectName);
            subjectSelect.removeChild(subjectOption); 
        });
    }
}
addSubjectButton.addEventListener("click", addSubject);
subjectInput.addEventListener("keydown", function(event) {
    if (event.key === "Enter") {
        addSubject();
    }
});

function addTask() {
    if (taskInput.value.trim() !== "" && subjectSelect.value !== "") {
        let taskAdd = document.createElement("li");
        let selectedSubject = subjectSelect.value;
        taskAdd.textContent = taskInput.value + " - " + selectedSubject;
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
    }
}

addTaskButton.addEventListener("click", addTask);
taskInput.addEventListener("keydown", function(event) {
    if (event.key === "Enter") {
        addTask();
    }
});

    

