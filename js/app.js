// Variables a usar
var addList = document.getElementById("addList");
var mainBoard = document.getElementById("mainBoard");
var boards = document.getElementById("boards");
var buttonAdd = document.getElementById("add");
var buttonClose = document.getElementById("close");
var items = document.getElementById("files");

// Funciones para convertir a formulario
function change() {
	addList.addEventListener("click", formAppears);
}

function formAppears() {
    addList.classList.add("invisible");
    mainBoard.classList.remove("invisible");
    mainBoard.classList.add("visible");
    addList.classList.remove("visible");
    buttonAdd.addEventListener("click", NewList);
    buttonClose.addEventListener("click", close);
};


function close() {
    mainBoard.classList.remove("visible");
    mainBoard.classList.add("invisible");
    addList.classList.remove("invisible");
    addList.classList.add("visible");
};

function NewList() {
    event.preventDefault();
    var titleBoard = document.getElementById("titleList").value;
    document.getElementById("titleList").value = "";

    if (titleBoard !== "") {
        //crearemos el nuevo tablero y ocultaremos el anterior
        var aNewBoard = document.createElement("form");
        var containerTitle = document.createElement("h3");
        var textTitle = document.createTextNode(titleBoard);
        containerTitle.appendChild(textTitle);
        aNewBoard.appendChild(containerTitle);
        boards.insertBefore(aNewBoard, mainBoard);
        aNewBoard.classList.add("newBoard");
        mainBoard.classList.remove("visible");
        mainBoard.classList.add("invisible");


        // Este sera nuestra Seccion añadir tarjeta
        var newInput = document.createElement("input");
        aNewBoard.appendChild(newInput);
        newInput.setAttribute("placeholder", "Añadir una tarjeta...");
        newInput.setAttribute("id", "new-input");
        newInput.addEventListener("click", createItem);
    }
 };
