
var fecha = new Date();
var dia = fecha.getDay();
dia = dia.toString().padStart(2, '0');
var mes = fecha.getMonth()+1;
mes = mes.toString().padStart(2, '0');
var año = fecha.getFullYear();

var content = `<div style="background-color:white;width:31.25rem;height:28.125rem; margin:0 auto;text-align:center;display:flex;justify-content:center;align-items:center;flex-direction:column;box-shadow: 3px 5px 11px 1px rgba(0,0,0,0.5);">
                <p style="font-size:3.75rem;font-weight:700;margin-bottom:0.3125rem;">¡Apresúrese!</p>
                <p style="font-size:1.875rem;margin:1.25rem;padding:1.25rem;font-weight:500;">El plazo máximo para inscribirse es solo 2 días
                despues de la siguiente fecha:</p>
                <p style="font-size:2.5rem;margin-top:0.3125rem;">${dia} / ${mes} / ${año}</p>
                </div>
`

document.getElementById("title").innerHTML = content;