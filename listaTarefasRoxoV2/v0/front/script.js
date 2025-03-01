document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById("task-form");
    const taskInput = document.getElementById("task-input");
    const taskList = document.getElementById("task-list");
    let tasks = JSON.parse(localStorage.getItem(`task`)) ||[];
    function renderTasks() {
        taskList.innerHTML = ``;
        tasks.forEach((task, index) => {
            const li = document.createElement("li");
            li.innerHTML = `
            <span>${task}</span>
            <div>
                <button class="edit-btn" onclick="editTask(${index})">Editar</button>
                <button class="delete-btn" onClick="deleteTask(${index})">Remover</button>
            </div>
            `;
            taskList.appendChild(li);
        });
        saveTasks();
    }
});
