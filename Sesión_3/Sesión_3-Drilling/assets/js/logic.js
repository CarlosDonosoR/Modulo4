
//se optiene el elemento input que es un checkbox
var descuento = document.getElementById("desc");
descuento.addEventListener("click", aceptar);


function aceptar() {

    let valor = document.getElementById("input");

    if (valor.checked) {

        let code = `ABCD45678090`

        let p = document.getElementById("codigo");
        p.textContent = code;

    } else {
        alert("Debes aceptar los términos y condiciones");
    }

}

var input = document.getElementById("input");

input.addEventListener("click", function subrayar() {
    
    let desc = document.getElementById("desc");
    desc.style.cssText = "text-decoration:underline;"

})