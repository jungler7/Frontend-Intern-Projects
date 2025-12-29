const taskList = document.getElementById("taskList");

function addTask() {
  const input = document.getElementById("taskInput");
  const taskText = input.value.trim();
  if (taskText === "") return;

  const li = document.createElement("li");
  li.textContent = taskText;

  li.onclick = function () {
    li.style.textDecoration = "line-through";
  };

  taskList.appendChild(li);
  saveTasks();
  input.value = "";
}

function saveTasks() {
  localStorage.setItem("tasks", taskList.innerHTML);
}

function loadTasks() {
  taskList.innerHTML = localStorage.getItem("tasks") || "";
}

loadTasks();
