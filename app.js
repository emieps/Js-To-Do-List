// Add btn
const addTodoBtn = document.querySelector("#add-todo-btn");
const listTodoItems = document.querySelector('#todo-list');
const form = document.querySelector('#todo-form');
const formItemInput = document.querySelector('#todo-create');
const formItemCategoryBusiness = document.querySelector('#business');
const formItemCategoryPersonal = document.querySelector('#personal');

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

const createContent = (todoContent) => {
    // Content
    // to do content div 
    const todoContentDiv = createDiv("todo-content")
    // to do contetn div input 
    const todoContentInput = document.createElement("input");
    todoContentInput.setAttribute("type", "text");
    todoContentInput.setAttribute("class", "todo-content");
    todoContentInput.setAttribute("value", todoContent);
    todoContentInput.readOnly = true;
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

const createItem = (todoContent, todoCategory) => {
    const toDoItemDiv = createDiv("todo-item");
    const todoItemCategoryChecBox = createToDoCheckbox(todoCategory);
    // content 
    const todoContentInput = createContent(todoContent);
    const todoContentButtons = createToDoButtons();
    toDoItemDiv.appendChild(todoItemCategoryChecBox)
    toDoItemDiv.appendChild(todoContentInput)
    toDoItemDiv.appendChild(todoContentButtons)
    return toDoItemDiv

}


addTodoBtn.addEventListener("click", (e) => {
    e.preventDefault();
    if (formItemCategoryBusiness.checked == true) {
        const item = createItem(formItemInput.value, formItemCategoryBusiness.value)
        listTodoItems.appendChild(item)
    } else {
        const item = createItem(formItemInput.value, formItemCategoryPersonal.value)
        listTodoItems.appendChild(item)
    }
    form.reset()

})


listTodoItems.addEventListener('click', (e) => {
    let target = e.target;
    // Delete
    if (target.nodeName == 'BUTTON' & target.className == "delete") {
        targetParent = target.parentNode.parentNode
        targetParent.remove()
    }

    if (target.nodeName == 'BUTTON' & target.className == "edit") {
        const targetInput = target.parentNode.parentNode.childNodes[1].childNodes[0]
        if (targetInput.readOnly == true) {
            targetInput.readOnly = false
            targetInput.style.opacity = 0.50;
            target.style.backgroundColor = '#3A82EE';
        } else {
            targetInput.readOnly = true
            targetInput.style.opacity = 1;
            target.style.backgroundColor = '#EA40A4';
        }

    }

    if (target.type == 'checkbox') {

        targetInput = target.parentNode.parentNode.childNodes[1].childNodes[0]
        targetInput.classList.toggle('checked')
        target.parentNode.parentNode.classList.toggle('itemchecked')
    }


})






