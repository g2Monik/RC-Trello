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
//boton X
function close() {
    mainBoard.classList.remove("visible");
    mainBoard.classList.add("invisible");
    addList.classList.remove("invisible");
    addList.classList.add("visible");
};
//el preventDefault evitara funciones predeterminadas
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
        // Este sera nuestro boton de añadir tarjeta
        var newInput = document.createElement("button");
        aNewBoard.appendChild(newInput);
				newInput.innerHTML = "Añadir una tarjeta.";
        newInput.setAttribute("id", "newButton");
				newInput.addEventListener("click", createItem);
    }
};

//creamos en nuevo textarea para las tarjetas
function createItem() {
    event.preventDefault();
    document.getElementById("newButton").classList.add("invisible");

    var board = document.getElementsByClassName("newBoard")[0];
    var textArea = document.createElement("textarea");
    board.appendChild(textArea);

    // boton para tarjetas
    var textAddButton = document.createTextNode("Añadir");
    var newButto = document.createElement("button");
    newButto.appendChild(textAddButton);
    board.appendChild(newButto);
    newButto.classList.add("newButton");
};
