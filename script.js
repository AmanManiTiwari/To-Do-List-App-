document.addEventListener('DOMContentLoaded', function() {
    const taskInput = document.getElementById('taskInput');
    const addTaskBtn = document.getElementById('addTaskBtn');
    const taskList = document.getElementById('taskList');
  
    // Add Task
    addTaskBtn.addEventListener('click', function() {
      const taskText = taskInput.value.trim();
      if (taskText === '') return;
  
      // Create task element
      const taskItem = document.createElement('li');
      taskItem.innerHTML = `
        <span>${taskText}</span>
        <div>
          <button class="completeBtn">Complete</button>
          <button class="deleteBtn">Delete</button>
        </div>
      `;
      taskList.appendChild(taskItem);
      taskInput.value = '';
  
      // Complete Task
      taskItem.querySelector('.completeBtn').addEventListener('click', function() {
        taskItem.classList.toggle('completed');
      });
  
      // Delete Task
      taskItem.querySelector('.deleteBtn').addEventListener('click', function() {
        taskList.removeChild(taskItem);
      });
    });
  });
  