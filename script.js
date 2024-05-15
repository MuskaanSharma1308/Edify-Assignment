document.addEventListener("DOMContentLoaded", function() {
    const taskInput = document.getElementById("taskInput");
    const addTaskBtn = document.getElementById("addTaskBtn");
    const showIncompleteBtn = document.getElementById("showIncompleteBtn");
    const deleteBtn = document.getElementById("deleteBtn");
    const taskList = document.getElementById("taskList");

    addTaskBtn.addEventListener("click", function() {
        const taskText = taskInput.value.trim();
        if (taskText !== "") {
            addTask(taskText);
            taskInput.value = "";
        }
    });

    function addTask(taskText) {
        const taskItem = document.createElement("li");
        taskItem.className = "task";
        taskItem.innerHTML = `
            <span>${taskText}</span>
            <button class="completeBtn">Complete</button>
            <button class="deleteBtn">Delete</button>
        `;
        taskList.appendChild(taskItem);

        const completeBtn = taskItem.querySelector(".completeBtn");
        completeBtn.addEventListener("click", function() {
            taskItem.classList.toggle("completed");
            if (taskItem.classList.contains("completed")) {
                alert("Task marked as completed!");
            }
        });

        const deleteBtn = taskItem.querySelector(".deleteBtn");
        deleteBtn.addEventListener("click", function() {
            taskItem.remove();
        });
    }

    showIncompleteBtn.addEventListener("click", function() {
        const incompleteTasks = document.querySelectorAll(".task:not(.completed)");
        incompleteTasks.forEach(task => task.style.display = "block");
        const completedTasks = document.querySelectorAll(".completed");
        completedTasks.forEach(task => task.style.display = "none");
    });

    deleteBtn.addEventListener("click", function() {
        const tasks = document.querySelectorAll(".task");
        tasks.forEach(task => task.remove());
    });
});


