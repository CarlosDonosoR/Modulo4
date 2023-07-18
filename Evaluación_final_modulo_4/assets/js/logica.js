
document.getElementById("btn--presupuesto").addEventListener("click", function () {

        var presupuesto = document.getElementById("presupuesto").value;
        document.getElementById("presupuesto--inner").textContent = presupuesto;
})

var gastos = [];

function crear(nom, can) {
        let gasto = new Object();
        gasto.nombre = nom;
        gasto.cantidad = can;
        gastos.push(gasto);
}

document.getElementById("btn--gasto").addEventListener("click", function () {

        var nombre = document.getElementById("nom--gasto").value;
        var cantidad = document.getElementById("cant--gasto").value;
        crear(nombre, cantidad);

        for (let i = 0; i < gastos.length; i++) {
                let texto = `<ul value="${[i]}" class="lista--ul list-group list-group-horizontal">
                        <li class="list-group-item" style="width:90px;">${gastos[i].nombre}</li>
                        <li class="list-group-item">${gastos[i].cantidad}</li> 
                        <li  class="list-group-item" onclick="borrar()"><i class="fa-solid fa-trash"></i></li>
                        </ul>`;
                        var a = "";
                        a += texto;
        }
        document.getElementById("lista--gasto").innerHTML += a;
});



function borrar() { 
        
        
};