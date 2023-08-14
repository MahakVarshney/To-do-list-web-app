const taskInput = document.getElementById('taskInput');
const addButton = document.getElementById('addButton');
const taskList = document.getElementById('taskList');
const completeList = document.getElementById('completeList');

addButton.addEventListener('click', () => {
    const taskText = taskInput.value.trim();
    if (taskText !== '') {
        const taskItem = document.createElement('li');
        taskItem.innerHTML = `
            <span>${taskText}</span>
            <button class="remove-button">Remove</button>
            <button class="complete-button">Complete</button>
        `;

        const removeButton = taskItem.querySelector('.remove-button');
        removeButton.addEventListener('click', () => {
            taskList.removeChild(taskItem);
        });

        const completeButton = taskItem.querySelector('.complete-button');
        completeButton.addEventListener('click', () => {
            taskList.removeChild(taskItem);
            completeList.appendChild(taskItem);
        });

        taskList.appendChild(taskItem);
        taskInput.value = '';
    }
});
