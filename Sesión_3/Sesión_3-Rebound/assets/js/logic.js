function agregar() {
    let valor = document.getElementById("selector").value;

    console.log(valor);

    switch (valor) {
        case "1":

            let imgtext = document.getElementById("img--text");
            imgtext.style.display = "none";

            let newp = `<p class="card-text" >"Modalidad de excursionismo que consiste en recorrer a pie largas distancias o zonas determinadas. Generalmente de alta montaña y poco frecuentadas por el turismo convencional."
                        </p>
                        <a href="#" class="card-link">Conocer más</a>
                        `;

            const img = `<div>
                        <img class="rounded" src="https://picsum.photos/id/684/500/500" alt="">
                        </div>
                        <div class="injected">
                        <p class="fs-2">TREKKING</p>
                        <p style="font-size:18px;font-weight:600;"><i class="fa-solid fa-location-dot me-1" style="color: #ffffff;"></i>Volcán Villarica</p>
                        </div>
                        `;

            const over = `
                        `;            

            let imgcontainer = document.getElementById("img");
            imgcontainer.innerHTML = img;
            
            let card = document.getElementById("card--p--a");
            card.innerHTML = newp;

            let cardbody = document.getElementById("card--body");
            cardbody.style.display = "flex";
            cardbody.style.justifyContent = "center";
            cardbody.style.alignContent = "center";

            break;

        case "2":
            
        let imgtext2 = document.getElementById("img--text");
        imgtext2.style.display = "none";

        let newp2 = `<p class="card-text" >"Deporte o ejercicio que consiste en nadar. En las pruebas de natación se compite en velocidad, en cualquiera de los cuatro estilos: braza, crol, espalda y mariposa. "
                    </p>
                    <a href="#" class="card-link">Conocer más</a>
                    `;

        const img2 = `<div>
                    <img class="rounded" src="https://picsum.photos/id/1038/500/500" alt="">
                    </div>
                    <div class="injected">
                        <p class="fs-2">NATACIÓN</p>
                        <p style="font-size:18px;font-weight:600;"><i class="fa-solid fa-location-dot me-1" style="color: #ffffff;"></i>Lago Cocchrane</p>
                        </div>
                    `;

        let imgcontainer2 = document.getElementById("img");
        imgcontainer2.innerHTML = img2;


        let card2 = document.getElementById("card--p--a");
        card2.innerHTML = newp2;

        let cardbody2 = document.getElementById("card--body");
        cardbody2.style.display = "flex";
        cardbody2.style.justifyContent = "center";


            break;


        case "3":
            
        let imgtext3 = document.getElementById("img--text");
        imgtext3.style.display = "none";

        let newp3 = `<p class="card-text" >"Embarcación que realiza alternativamente el mismi recorrido entre dos puntos, especialmente la de grandes dimensiones destinada al transporte de cargas pesadas o pasajeros."
                    </p>
                    <a href="#" class="card-link">Conocer más</a>
                    `;

        const img3 = `<div>
                    <img class="rounded" src="https://picsum.photos/id/211/500/500" alt="">
                    </div>
                    <div class="injected">
                    <p class="fs-2">FERRY</p>
                    <p style="font-size:18px;font-weight:600;"><i class="fa-solid fa-location-dot me-1" style="color: #ffffff;"></i>Lago Llanquihue</p>
                    </div>
                    `;

        let imgcontainer3 = document.getElementById("img");
        imgcontainer3.innerHTML = img3;


        let card3 = document.getElementById("card--p--a");
        card3.innerHTML = newp3;

        let cardbody3 = document.getElementById("card--body");
        cardbody3.style.display = "flex";
        cardbody3.style.justifyContent = "center";

        break;
        default:
            break;
    }

}


document.getElementById("selector").addEventListener("change", agregar);
