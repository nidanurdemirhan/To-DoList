function addNewTask() {

    const taskInput = document.getElementById('taskInput').value.trim();

    if (taskInput === "") {
        alert("Please enter a task.");
        return;
    }

    const li = document.createElement('li');
    li.classList.add('taskItem');

    // Checkbox oluştur
    const checkbox = document.createElement('input');
    checkbox.type = 'checkbox';
    checkbox.classList.add('taskCheckbox');

    const taskText = document.createElement('span');
    taskText.textContent = taskInput;
    taskText.classList.add('taskText');

    checkbox.addEventListener('change', function() {
        if (checkbox.checked) {
            taskText.style.textDecoration = 'line-through';
        } else {
            taskText.style.textDecoration = 'none';
        }
    });

    const deleteButton = document.createElement('button');
    deleteButton.textContent = 'Delete';
    deleteButton.classList.add('deleteButton');

    deleteButton.addEventListener('click', function() {
        li.remove();
    });

    li.appendChild(checkbox);
    li.appendChild(taskText);
    li.appendChild(deleteButton);

    const taskList = document.getElementById('taskList');
    taskList.appendChild(li);

    document.getElementById('taskInput').value = "";
}

document.getElementById('addTaskButton').addEventListener('click', addNewTask);

document.getElementById('taskInput').addEventListener('keypress', function(event) {
    if (event.key === 'Enter') {
        addNewTask();
    }
});
