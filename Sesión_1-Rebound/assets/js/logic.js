
var titulo = `<p style="margin:10px;font-size:36px;font-weight:700;font-family: 'Arial';">Bienvenido a la plataforma Eport</p>
            <p style="margin:20px;font-size:30px;">Aquí podrá encontrar la información de vuelos más reciente en nuestro aeropuerto.</p>
`;

document.getElementById("titulo").innerHTML = titulo;

var fecha = new Date();
var hora = fecha.getHours();
var minutos = fecha.getMinutes();
minutos = minutos.toString().padStart(2, '0');
var dia = fecha.getDay();
dia = dia.toString().padStart(2, '0');
var mes = fecha.getMonth() + 1;
mes = mes.toString().padStart(2, '0');
var año = fecha.getFullYear();

var hora = `<div style="text-align:center;"> 
                <p style="font-size:30px;font-weight:600;">Hora</p>
                <p style="font-size:40px">${hora} : ${minutos}</p>
                </div>              
`;

var fecha = `<div style="text-align:center;">
<p style="font-size:30px;font-weight:600;">Fecha</p>
<p style="font-size:40px">${dia}-${mes}-${año}</p>
</div>
`
document.getElementById("hora").innerHTML = hora;
document.getElementById("fecha").innerHTML = fecha;

var vuelo = `<p style="margin-bottom:5px;font-size:30px; font-weight:600;">El vuelo más próximo:</p>
            <p style="margin:10px;font-size:30px">Número de vuelo: ${random(1000, 5000)}</p>
            <p style="margin:10px;font-size:30px">Terminal: ${random(1, 20)}</p>
`;

document.getElementById("vuelo").innerHTML = vuelo;

function random(min, max) {
    return Math.round(Math.random() * (max - min) + min);
}

var alerta = ` <div id="alert--div" style="display:flex; justify-content:center;align-items:center;flex-direction:column;box-shadow: 2px 6px 18px -3px rgba(0,0,0,0.75);margin:20px;background-color:white;width:600px;height:300px;">
                <p style="margin:10px;font-size:20px;padding:20px;">Pasajero, se le recuerda que para abordar el avión debe tener en mano
                su pasaporte y su boleto de embarque. Manténgase atento a los aviones
                mediante esta plataforma.</p>
            <button id="alert--btn" style="margin:10px;font-size:20px;" onclick="cerrar()">Cerrar</button>
            </div> 
`
var alertacss = `display: flex;
                justify-content: center;
                align-items: center;
                width: 100%;
                height: 100%;
                text-align:center;
`
window.onload = function () {
    document.getElementById("alert").innerHTML = alerta;
    document.getElementById("alert").style.cssText = alertacss;
}

function cerrar() {
    var alerta = document.getElementById("alert");
    alerta.style.display = "none";
}