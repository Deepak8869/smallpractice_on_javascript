let write = document.getElementById("write");
let todolist = document.getElementById("todo-list");

write.addEventListener("keyup" , function(e){
  if(e.key == "Enter") {
   addtodo(this.value);
    this.value = ''
  }
})

function addtodo(val){
  let list = document.createElement("li");


  list.innerHTML = `${val}`;
  todolist.appendChild(list);
}