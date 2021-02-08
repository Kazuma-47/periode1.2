// footer button
var input= document.getElementById('email');
let knop = document.getElementById('button');
knop.addEventListener('click', () => {
        console.log("knop is gekilkt");
        // haalt input op
        var input = document.getElementById("email");

        // strinh lengte
        lengte = Number(input.length);

        // check als je iets heb ingevult
        if (lengte < 1) {
            document.getElementById("error").innerHTML = "Ⓘ";

        }

    })