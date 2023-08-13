document.addEventListener("DOMContentLoaded", function () {
    const taskInput = document.getElementById("taskInput");
    const addButton = document.getElementById("addButton");
    const deleteAllButton = document.getElementById("deleteAllButton");
    const taskList = document.getElementById("taskList");

    // Resto del código JavaScript

    deleteAllButton.addEventListener("click", function () {
        const confirmDelete = confirm("¿Estás seguro de que deseas eliminar todas las tareas?");
        if (confirmDelete) {
            removeAllTasks();
        }
    });

    function removeAllTasks() {
        while (taskList.firstChild) {
            taskList.removeChild(taskList.firstChild);
        }
        localStorage.removeItem("tasks");
    }

    // Resto del código JavaScript
});





document.addEventListener("DOMContentLoaded", function () {
    const taskInput = document.getElementById("taskInput");
    const addButton = document.getElementById("addButton");
    const taskList = document.getElementById("taskList");

    // Cargar tareas almacenadas al iniciar la aplicación
    const storedTasks = JSON.parse(localStorage.getItem("tasks")) || [];
    renderTasks(storedTasks);

    addButton.addEventListener("click", function () {
        const taskText = taskInput.value.trim();
        if (taskText !== "") {
            createTaskElement(taskText);
            taskInput.value = "";
        }
    });

    taskList.addEventListener("click", function (event) {
        if (event.target.classList.contains("deleteButton")) {
            const taskElement = event.target.parentElement;
            const taskText = taskElement.querySelector("span").innerText;
            taskElement.remove();
            removeTaskFromStorage(taskText);
        }
    });

    function createTaskElement(taskText) {
        const listItem = document.createElement("li");
        listItem.innerHTML = `
            <input type="checkbox" class="checkmark">
            <span>${taskText}</span>
            <button class="deleteButton">Eliminar</button>
        `;
        taskList.appendChild(listItem);
        saveTaskToStorage(taskText);
    }

    function renderTasks(tasks) {
        tasks.forEach(task => {
            createTaskElement(task);
        });
    }

    function saveTaskToStorage(taskText) {
        const storedTasks = JSON.parse(localStorage.getItem("tasks")) || [];
        storedTasks.push(taskText);
        localStorage.setItem("tasks", JSON.stringify(storedTasks));
    }

    function removeTaskFromStorage(taskText) {
        const storedTasks = JSON.parse(localStorage.getItem("tasks")) || [];
        const updatedTasks = storedTasks.filter(task => task !== taskText);
        localStorage.setItem("tasks", JSON.stringify(updatedTasks));
    }
});

