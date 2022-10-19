// Add btn
const addTodoBtn = document.querySelector("#add-todo-btn");
// // Div cibtaiber of items 
// listTodoItems = document.querySelector('#todo-list')

const listTodoItems = document.querySelector('#todo-list')

const TodoItemsContainer = {
    listTodoItems: document.querySelector('#todo-list')

}


function createToDoDiv(classNameDiv ) {
    const todoItemDiv = document.createElement("div");
    todoItemDiv.setAttribute("class", classNameDiv);
    return todoItemDiv

}

function createToDoCheckbox(classNameDiv, classNameCategory ) {

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

// ;
// // Input checkbox 
// const todoItemInput = document.createElement("input");
// todoItemInput.setAttribute("type", "checkbox");
// todoItemInput.setAttribute("class", "checkbox-round personal");

addTodoBtn.addEventListener("click", (e) => {
    
    e.preventDefault();
    listTodoItems.appendChild(addDiv("todo-item", "business"));
})



// addTodoBtn.addEventListener("click", (e) => {
//     e.preventDefault();
//     // Category checkbox 
//     // Todo item div 
//     const todoItemDiv = document.createElement("div");
//     todoItemDiv.setAttribute("class", "todo-item");
//     // label
//     const todoItemLabel = document.createElement("label");
//     // Input checkbox 
//     const todoItemInput = document.createElement("input");
//     todoItemInput.setAttribute("type", "checkbox");
//     todoItemInput.setAttribute("class", "checkbox-round personal");
//     // Content
//     // to do content div 
//     const todoContentDiv = document.createElement("div");
//     todoContentDiv.setAttribute("class", "todo-content");
//     // to do contetn div input 
//     const todoContentInput = document.createElement("input");
//     todoContentInput.setAttribute("type", "text");
//     todoContentInput.setAttribute("class", "todo-content");
//     todoContentInput.setAttribute("value", "Make video");

//     // Tnb todo item btns 
//     // Puedo convertirlo en funcion para diferentes 
//     const textnodeDelete = document.createTextNode("DELETE");
//     const textnodeEdit = document.createTextNode("EDIT");
//     // Tbnh to do item 
//     const todoBtnDiv = document.createElement("div");
//     todoBtnDiv.setAttribute("class", "actions");
//     // btn of btn class 
//     // edit btn 
//     const todoBtnEdit = document.createElement("button");
//     todoBtnEdit.setAttribute("class", "edit");
//     todoBtnEdit.appendChild(textnodeEdit);
//     // deleter btn 
//     const todoBtnDelete = document.createElement("button");
//     todoBtnDelete.setAttribute("class", "delete");
//     todoBtnDelete.appendChild(textnodeDelete);



//     // label 
//     todoItemLabel.appendChild(todoItemInput);
//     todoItemDiv.appendChild(todoItemLabel);
//     // content 
//     todoContentDiv.appendChild(todoContentInput);
//     todoItemDiv.appendChild(todoContentDiv);
//     // btn
//     todoBtnDiv.appendChild(todoBtnEdit);
//     todoBtnDiv.appendChild(todoBtnDelete);
//     todoItemDiv.appendChild(todoBtnDiv);




//     // list div add contetn div 
//     TodoItemsContainer.listTodoItems.appendChild(todoItemDiv);
//     console.log("me estas tocnado")
// })



/*

            <div class="list" id="todo-list">
                <!-- div to contains todo items -->
                <div class="todo-item">
                    <!-- Implicit label -->
                    <label >
                        <!-- Input checkbox to be able to strikethrought the to do item -->
                        <input type="checkbox"  class="checkbox-round personal" name="" id="">
                        <!-- <span class="bussinesss"></span> -->
                    </label>

                    <div class="todo-content">
                        <input type="text" class="todo-content" value="Make video" readonly>
                    </div>
                    <div class="actions">
                        <button class="edit">EDIT</button>
                        <button class="delete">DELETE</button>
                    </div>

                </div>
                </div>

*/