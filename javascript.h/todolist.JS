var Form = document.getElementById("myForm");
var Input = document.getElementByID("myInput");
var Item = document.getElementById("myItem");

Form.addEventListener("submit",
    function(event){
       event.PreventDefault()
       createItem(Input.value)
 }

)

function createItem(inputItem){
    var Item = `<li> ${inputItem}
    <button onclick="deleteElement(this)>Delete</button> </li>`
    Item.insertAdjacent("beforeend", Item)
    Input.value = ""
    Input.focus()

}

function deleteElement(ElementToDelete){
    ElementToDelete.parentElement.remove()
}