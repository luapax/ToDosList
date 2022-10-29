const addForm = document.querySelector('.add');
const toDosList = document.querySelector('.todos');
const search = document.querySelector('.search input');

const generateTemplate = todo => {

    toDosList.insertAdjacentHTML('beforeend', `<li class= "list-group-item d-flex justify-content-between align-items-center">
<span>${todo}</span><i class="far fa-trash-alt delete"></i>
</li> `);


}


addForm.addEventListener('submit', e => {
    e.preventDefault();
    const todo = addForm.add.value.trim();
    console.log(todo);

    if (todo.length) {
        generateTemplate(todo);
        addForm.reset();

    }
    else {
        alert("please add toDo");
    }

})


// event delegation for deleting the items from the toDosList 

toDosList.addEventListener('click', e => {
    if (e.target.classList.contains('delete')) {
        e.target.parentElement.remove();
    }
})