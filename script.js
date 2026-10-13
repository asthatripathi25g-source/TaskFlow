const form = document.getElementById("taskForm");
const input = document.getElementById("taskInput");
const list = document.getElementById("taskList");

form.addEventListener("submit", function(event) {
  event.preventDefault();

  const task = input.value.trim();
  if (task === "") return;

  const item = document.createElement("li");
  const text = document.createElement("span");
  text.textContent = task + " ";

  const complete = document.createElement("button");
  complete.textContent = "Complete";
  complete.onclick = function() {
    text.style.textDecoration = "line-through";
  };

  const remove = document.createElement("button");
  remove.textContent = "Delete";
  remove.onclick = function() {
    item.remove();
  };

  item.append(text, complete, remove);
  list.appendChild(item);
  input.value = "";
});

