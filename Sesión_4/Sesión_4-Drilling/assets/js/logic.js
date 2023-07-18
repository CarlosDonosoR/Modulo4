
document.getElementById("btn").addEventListener("click", function () {

    var checkbox = document.getElementById("checkbox");
    var email = document.getElementById("email").value;
    
    if (checkbox.checked && email != "") {

        alert("¡Felicitaciones! Pronto escucharás de nosotros.");

    } else {
        alert("Parece que nos faltó algo...");
    }
});