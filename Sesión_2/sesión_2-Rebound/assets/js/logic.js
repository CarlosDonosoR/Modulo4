
function agregar(value) {
    let valor = document.getElementById("input").value;
    document.getElementById("input").value = valor + value;
}

function borrar(){
    document.getElementById("input").value = ""; 
}

function accion() {
    let valor = document.getElementById("input").value;
    document.getElementById("input").value = eval(valor);
}