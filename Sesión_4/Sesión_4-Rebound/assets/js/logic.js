
    let hoy = new Date();
    let dia = ("0"+hoy.getDay());
    let mes = ("0"+(hoy.getMonth()+1));
    let year = hoy.getFullYear();

    document.getElementById("fecha1").value = year+"-"+mes+"-"+dia;
    document.getElementById("fecha2").value = year+"-"+mes+"-"+dia;


document.getElementById("fecha2").addEventListener("change", function () {

    var origen = document.getElementById("origen").value;
    var fecha1 = document.getElementById("fecha1").value;

    var destino = document.getElementById("destino").value;
    var fecha2 = document.getElementById("fecha2").value;

    document.getElementById("origen1").textContent = origen;
    document.getElementById("destino1").textContent = destino;

    document.getElementById("fecha1--inner").textContent = fecha1;
    document.getElementById("fecha2--inner").textContent = fecha2;

    if (origen == "Chicago" && destino == "Venecia" || origen == "Bostón" && destino == "París") {
        
        document.getElementById("escala").textContent = "¡Ojo! Tu vuelo tiene escalas";

    } else {

        document.getElementById("escala").textContent = "¡Tu vuelo no tiene escalas!";
    }

});








