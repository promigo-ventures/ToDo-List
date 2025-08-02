const addTodo = document.querySelector('.add')
const list = document.querySelector('.todos')
const search = document.querySelector('.search input')

const generateTemplate = todo =>{
  const html = `
  <li class="list-group-item d-flex justify-content-between align-items-center text-light">
        <span>${todo}</span>
        <i class="far fa-trash-alt delete"></i>
      </li>
  `
  list.innerHTML += html;
}
addTodo.addEventListener('submit', event=>{
  event.preventDefault();
  const todo = addTodo.add.value.trim();
  if(todo.length){
    generateTemplate(todo)
  }
  addTodo.reset();
})

//Delete event
list.addEventListener('click', event=>{
  event.preventDefault();
  if(event.target.classList.contains('delete')){
    event.target.parentElement.remove();
  }
})

//keyup event

const filteredTodos = term =>{
  Array.from(list.children)
  .filter((todo)=>!todo.textContent.toLowerCase().includes(term))
  .forEach((todo)=>todo.classList.add('filtered'))
  Array.from(list.children)
  .filter((todo)=>todo.textContent.toLowerCase().includes(term))
  .forEach((todo)=>todo.classList.remove('filtered'))
}
search.addEventListener('keyup', ()=>{
  const term = search.value.toLowerCase().trim();
  filteredTodos(term);
})