let tasks = JSON.parse(localStorage.getItem("tasks")) || [];

const taskInput = document.getElementById("task");
const addTaskBtn = document.getElementById("addTaskBtn");
const taskList = document.getElementById("taskList");
const emptyMessage = document.getElementById("emptyMessage");

addTaskBtn.addEventListener("click", function () {

    const task = taskInput.value.trim();

    if (task === "") {
        alert("Please enter a task.");
        return;
    }

    tasks.push(task);

    localStorage.setItem("tasks", JSON.stringify(tasks));

    displayTasks();

    taskInput.value = "";
});

function displayTasks() {

    taskList.innerHTML = "";

    if (tasks.length === 0) {
        emptyMessage.style.display = "block";
    } else {
        emptyMessage.style.display = "none";
    }

    for (let i = 0; i < tasks.length; i++) {

        const card = document.createElement("div");

        card.innerText = tasks[i];
        card.className = "card p-2 mb-2";

        const delBtn = document.createElement("button");
        delBtn.innerText = "Delete";
        delBtn.className = "btn btn-danger btn-sm mt-2";

        delBtn.addEventListener("click", function () {
            tasks.splice(i, 1);

            localStorage.setItem("tasks", JSON.stringify(tasks));

            displayTasks();
        });

        card.appendChild(delBtn);
        taskList.appendChild(card);
    }
}


displayTasks();