let taskInput = document.getElementById("taskInput");
let addTaskButton = document.getElementById("addTaskButton");
let taskList = document.getElementById("taskList");
let subjectInput = document.getElementById("subjectInput");
let addSubjectButton = document.getElementById("addSubjectButton");
let subjectList = document.getElementById("subjectList");
let subjects = [];
let subjectSelect = document.getElementById("subjectSelect");
let tasks = [];


// MATÉRIAS:


function addSubject() { // Função para adicionar uma nova matéria

    if (subjectInput.value.trim() !== "") {

        let subjectName = subjectInput.value;
    
        subjects.push(subjectName);
        localStorage.setItem("subjects", JSON.stringify(subjects));
        subjectInput.value = "";
        createSubject(subjectName);
    }
}

function createSubject(subjectName) { // Função para criar a matéria na lista e no select

    let subjectAdd = document.createElement("li");
    let subjectText = document.createElement("span");
    subjectText.textContent = subjectName;
    subjectAdd.appendChild(subjectText);
    subjectList.appendChild(subjectAdd);

    let subjectOption = document.createElement("option");
    subjectOption.textContent = subjectName;
    subjectSelect.appendChild(subjectOption);

    let removeSubjectButton = document.createElement("button");
    removeSubjectButton.classList.add("removeButton");
    removeSubjectButton.textContent = " Remover";
    subjectAdd.appendChild(removeSubjectButton);
    removeSubjectButton.addEventListener("click", function() {
        subjectList.removeChild(subjectAdd);
        subjects = subjects.filter(s => s !== subjectName);
        localStorage.setItem("subjects", JSON.stringify(subjects));
        subjectSelect.removeChild(subjectOption); 
        });
 }

let savedSubjects = localStorage.getItem("subjects");
if (savedSubjects) {
    subjects = JSON.parse(savedSubjects);
    subjects.forEach(function(subject) {
        createSubject(subject);
    });
}

addSubjectButton.addEventListener("click", addSubject);
subjectInput.addEventListener("keydown", function(event) {
    if (event.key === "Enter") {
        addSubject();
    }
});


// TAREFAS:



function addTask() {
    if (taskInput.value.trim() !== "" && subjectSelect.value !== "") {

        let selectedSubject = subjectSelect.value;

        let task = {
            name: taskInput.value,
            subject: selectedSubject,
            completed: false
        };
        tasks.push(task);
        localStorage.setItem("tasks", JSON.stringify(tasks));
        createTask(task);
        taskInput.value = "";  

    }
}




function createTask(task) {
    let taskAdd = document.createElement("li");
    let taskText = document.createElement("span");
    taskText.textContent = task.name + " - " + task.subject;
    taskAdd.appendChild(taskText);
    taskList.appendChild(taskAdd);

    let completeButton = document.createElement("button");
    completeButton.classList.add("completeButton");
    completeButton.textContent = "";
    taskAdd.appendChild(completeButton);
    completeButton.addEventListener("click", function() {
        if (!task.completed){
            completeButton.textContent = "✓";
            completeButton.style.color = "green";
            taskText.style.textDecoration = "line-through";
            task.completed = true;
        } else {
            completeButton.textContent = "";
            completeButton.style.color = "black";
            taskText.style.textDecoration = "none";
            task.completed = false;
        }
       localStorage.setItem("tasks", JSON.stringify(tasks));
    });

    completeButton.addEventListener("mouseover", function() {
        if (!task.completed){
            completeButton.textContent = "✓";
            completeButton.style.color = "green";
            completeButton.style.borderColor = "green";
        } else {
            completeButton.textContent = "✗"; 
            completeButton.style.color = "red";
            completeButton.style.borderColor = "red";
        }
    });

    completeButton.addEventListener("mouseout", function() { 
        if (!task.completed){
            completeButton.textContent = "";
            completeButton.style.borderColor = "#30363d";
        } else {
            completeButton.textContent = "✓";
            completeButton.style.color = "green";
            completeButton.style.borderColor = "#30363d";
        }
    });

    if (task.completed) {
    completeButton.textContent = "✓";
    completeButton.style.color = "green";
    taskText.style.textDecoration = "line-through";
    }

    let removeTaskButton = document.createElement("button");
    removeTaskButton.classList.add("removeButton");
    removeTaskButton.textContent = " Remover";
    taskAdd.appendChild(removeTaskButton);
    removeTaskButton.addEventListener("click", function() {
        taskList.removeChild(taskAdd);
        tasks = tasks.filter(t => t !== task);
        localStorage.setItem("tasks", JSON.stringify(tasks));
    });
}



let savedTasks = localStorage.getItem("tasks");
    if (savedTasks) {
        tasks = JSON.parse(savedTasks);
        tasks.forEach(function(task) {
            createTask(task);
        });
    }



addTaskButton.addEventListener("click", addTask);
taskInput.addEventListener("keydown", function(event) {
    if (event.key === "Enter") {
        addTask();
    }
});


