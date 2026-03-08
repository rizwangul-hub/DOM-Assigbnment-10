// DOM-Assignment-7
// Submitted by Rizwan Ullah
// Mini Project (Complete CRUD Todo App)
// All Task
const todoInput = document.getElementById("todoInput");
const addBtn = document.getElementById("addBtn");
const todoList = document.getElementById("todoList");
const clearBtn = document.getElementById("clearBtn");

let todos = JSON.parse(localStorage.getItem("todos")) || [];

function renderTodos() {
  todoList.innerHTML = "";

  todos.forEach((todo, index) => {
    const li = document.createElement("li");
    li.innerText = todo.text;

    if (todo.completed) li.classList.add("completed");

    li.addEventListener("dblclick", () => {
      todos[index].completed = !todos[index].completed;
      updateLocalStorage();
      renderTodos();
    });

    const delBtn = document.createElement("button");
    delBtn.innerText = "Delete";
    delBtn.addEventListener("click", () => {
      todos.splice(index, 1);
      updateLocalStorage();
      renderTodos();
    });

    li.appendChild(delBtn);
    todoList.appendChild(li);
  });
}

function updateLocalStorage() {
  localStorage.setItem("todos", JSON.stringify(todos));
}

addBtn.addEventListener("click", () => {
  const text = todoInput.value.trim();
  if (text !== "") {
    todos.push({ text: text, completed: false });
    updateLocalStorage();
    renderTodos();
    todoInput.value = "";
  } else {
    alert("Todo cannot be empty!");
  }
});

clearBtn.addEventListener("click", () => {
  todos = [];
  updateLocalStorage();
  renderTodos();
});
renderTodos();
// ...................................................................
// DOM-Assignment-10 is End///