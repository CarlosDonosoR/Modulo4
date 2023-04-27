
function transform() {
    let temp1 = document.getElementById("temp--title").dataset.value;
    let newtemp1 = Math.trunc((temp1 * (9 / 5)) + 32);
    document.getElementById("temp--title").textContent = String(newtemp1)+"°";

    let temp2 = document.getElementById("temp--1").dataset.value;
    let newtemp2 = Math.trunc((temp2 * (9 / 5)) + 32);
    document.getElementById("temp--1").textContent = String(newtemp2)+"°";

    let temp3 = document.getElementById("temp--2").dataset.value;
    let newtemp3 = Math.trunc((temp3 * (9 / 5)) + 32);
    document.getElementById("temp--2").textContent = String(newtemp3)+"°";

    let temp4 = document.getElementById("temp--3").dataset.value;
    let newtemp4 = Math.trunc((temp4 * (9 / 5)) + 32);
    document.getElementById("temp--3").textContent = String(newtemp4)+"°";

    let temp5 = document.getElementById("temp--4").dataset.value;
    let newtemp5 = Math.trunc((temp5 * (9 / 5)) + 32);
    document.getElementById("temp--4").textContent = String(newtemp5)+"°";

    let temp6 = document.getElementById("temp--5").dataset.value;
    let newtemp6 = Math.trunc((temp6 * (9 / 5)) + 32);
    document.getElementById("temp--5").textContent = String(newtemp6)+"°";

    let temp7 = document.getElementById("temp--6").dataset.value;
    let newtemp7 = Math.trunc((temp7 * (9 / 5)) + 32);
    document.getElementById("temp--6").textContent = String(newtemp7)+"°";

    let temp8 = document.getElementById("temp--7").dataset.value;
    let newtemp8 = Math.trunc((temp8 * (9 / 5)) + 32);
    document.getElementById("temp--7").textContent = String(newtemp8)+"°";

}

function reset() {
    
    let temp1 = document.getElementById("temp--title").dataset.value;
    document.getElementById("temp--title").textContent = temp1+"°";

    let temp2 = document.getElementById("temp--1").dataset.value;
    document.getElementById("temp--1").textContent = temp2+"°";

    let temp3 = document.getElementById("temp--2").dataset.value;
    document.getElementById("temp--2").textContent = temp3+"°";

    let temp4 = document.getElementById("temp--3").dataset.value;
    document.getElementById("temp--3").textContent = temp4+"°";

    let temp5 = document.getElementById("temp--4").dataset.value;
    document.getElementById("temp--4").textContent = temp5+"°";

    let temp6 = document.getElementById("temp--5").dataset.value;
    document.getElementById("temp--5").textContent = temp6+"°";

    let temp7 = document.getElementById("temp--6").dataset.value;
    document.getElementById("temp--6").textContent = temp7+"°";

    let temp8 = document.getElementById("temp--7").dataset.value;
    document.getElementById("temp--7").textContent = temp8+"°";

}



function cambio() {
    
    var valor = document.getElementById("switch").value;
    
    if (valor == "true") {
        
        transform();

        document.getElementById("switch").value = "false";

    } else {

        reset();

        document.getElementById("switch").value = "true";

    }
}