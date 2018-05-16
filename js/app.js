// Variables a usar
var addList = document.getElementById("addList");
var mainBoard = document.getElementById("mainBoard");

// Funciones para convertir a formulario
function change() {
	addList.addEventListener("click", formAppears);
}

function formAppears() {
	addList.classList.add("invisible");
	mainBoard.classList.remove("invisible");
}
