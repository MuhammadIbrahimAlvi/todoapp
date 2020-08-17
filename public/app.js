var list = document.getElementById("ulId");

function addItem() {
    var todo_item = document.getElementById('field');
    // list
    var li = document.createElement("li");
    var textLi = document.createTextNode(todo_item.value);
    li.appendChild(textLi);
    list.appendChild(li);
    // delete button
    var delBtn = document.createElement("button");
    var delText = document.createTextNode("Delete");
    delBtn.appendChild(delText);
    li.appendChild(delBtn);
    list.appendChild(li)
    delBtn.setAttribute("class", "add");
    delBtn.setAttribute("onclick", "delItem(this)");

    // Edit Buttton
    var editBtn = document.createElement("button");
    var editText = document.createTextNode("Edit");
    editBtn.appendChild(editText);
    li.appendChild(editBtn);
    list.appendChild(li);

    editBtn.setAttribute("class", "add");
    editBtn.setAttribute("onclick", "editItem(this)");
    todo_item.value = "";
}

function delItem(e) {
    e.parentNode.remove();
}

function editItem(e) {
    var val = prompt("Enter Updated Task You Want To assign in Todo List", e.parentNode.firstChild.nodeValue);
    e.parentNode.firstChild.nodeValue = val;
}

function disAll() {

    list.innerHTML = "";
}