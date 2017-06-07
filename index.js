const personForm = document.querySelector('#personForm')
 var list1 = document.getElementById('demo');
 function renderListItem(fieldName, value) {
        const li = document.createElement('li')
        li.textContent = `${fieldName}: ${value}`
        return li
}
function deleteCheckBox() {
    var ul = document.getElementById('demo');
    var li = ul.children;
    for (var i=0; i < li.length; i++) {
        while(li[i] && li[i].children[0].checked) {
            document.querySelector('h1').textContent = "Removed: " + li[i].textContent
            ul.removeChild(li[i]);
        }
    }
}
function handleSubmit(ev) {

    ev.preventDefault()
    const f = ev.target
    if(f.list.value == "" || f.list.value == " ") {
        document.querySelector('h1').textContent = "Enter something :/"
        return
    }
    const list = f.list.value
    document.querySelector('h1').textContent = "Added: " + list;
    //var firstname = document.getElementById('list').value;
    var entry = document.createElement('li')
    var checkbox = document.createElement("input")
    checkbox.type = "checkbox";
    entry.appendChild(document.createTextNode(list))
    entry.appendChild(checkbox);
    //list1.appendChild(entry)
    list1.insertBefore(entry, list1.childNodes[0])
    f.list.value = ""

}
personForm.addEventListener('submit', handleSubmit)