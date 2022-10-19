// Add btn
const addTodoBtn = document.querySelector("#add-todo-btn");
// // Div cibtaiber of items 
// listTodoItems = document.querySelector('#todo-list')

const listTodoItems = document.querySelector('#todo-list')

const TodoItemsContainer = {
    listTodoItems: document.querySelector('#todo-list')

}


const createDiv = (classNameDiv) => {
    const todoItemDiv = document.createElement("div");
    todoItemDiv.setAttribute("class", classNameDiv);
    return todoItemDiv

}

const createToDoCheckbox = (classNameCategory) => {

    // label
    const todoItemLabel = document.createElement("label");
    // Input checkbox 
    const todoItemInput = document.createElement("input");
    todoItemInput.setAttribute("type", "checkbox");
    todoItemInput.setAttribute("class", `checkbox-round ${classNameCategory}`);
    // label 
    todoItemLabel.appendChild(todoItemInput);
    return todoItemLabel

}



const createContent = () => {
    // Content
    // to do content div 
    const todoContentDiv = createDiv("todo-content")
    // to do contetn div input 
    const todoContentInput = document.createElement("input");
    todoContentInput.setAttribute("type", "text");
    todoContentInput.setAttribute("class", "todo-content");
    todoContentInput.setAttribute("value", "Make video");
    todoContentDiv.appendChild(todoContentInput)
    return todoContentDiv

}


const createButton = (textNode, classButton) => {
    // Tnb todo item btns 
    // Puedo convertirlo en funcion para diferentes 
    const textnodeButton = document.createTextNode(textNode);
    // btn of btn class 
    // edit btn 
    const button = document.createElement("button");
    button.setAttribute("class", classButton);
    button.appendChild(textnodeButton);
    return button


}


const createToDoButtons = () => {
    // Tbnh to do item 
    const todoBtnDiv = createDiv("actions");
    // edit btn 
    const todoBtnEdit = createButton("EDIT", "edit");
    const todoBtnDelete = createButton("DELETE", "delete");
    todoBtnDiv.appendChild(todoBtnEdit)
    todoBtnDiv.appendChild(todoBtnDelete)
    return todoBtnDiv
}

const createItem = () => {
    const toDoItemDiv = createDiv("todo-item");
    const todoItemCategoryChecBox = createToDoCheckbox("business");
    const todoContentInput = createContent();
    const todoContentButtons = createToDoButtons();
    toDoItemDiv.appendChild(todoItemCategoryChecBox)
    toDoItemDiv.appendChild(todoContentInput)
    toDoItemDiv.appendChild(todoContentButtons)
    return  toDoItemDiv

}



addTodoBtn.addEventListener("click", (e) => {
    e.preventDefault();
    const item = createItem()
    listTodoItems.appendChild(item )
})

