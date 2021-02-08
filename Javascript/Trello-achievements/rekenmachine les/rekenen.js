
'use strict';
    let mijnButton = document.getElementById('mijnButton');
    let optellen = document.getElementById('optellen');
    let delen= document.getElementById('delen')
    let aftrekken= document.getElementById('aftrekken')
    let vermenigvuldigen = document.getElementById('vermenigvuldigen');
    mijnButton.addEventListener('click', function(){
        // lees de waarden van de text input velden in 
        // let op DIT ZIJN STRINGS
        let getal1 = document.getElementById('getal1').value;        
        let getal2 = document.getElementById('getal2').value;      
        // zet de ingelezen strings om in getallen
        getal1 = parseFloat(getal1);
        getal2 = parseFloat(getal2);
        // roep de function aan met arguments
        telOp(getal1,getal2);
        vermenigvuldig(getal1,getal2);
        delenn(getal1,getal2);
        aftrekkenn(getal1,getal2);
    })
    function telOp(getal1, getal2){
        let antwoord = getal1 + getal2;// doe de bewerking
        console.log("optellen " + antwoord); // laat ook in de console zien
        optellen.innerHTML = antwoord; // schrijf naar HTML
    }
    function vermenigvuldig(getal1, getal2){
        let antwoord = getal1 * getal2;// doe de bewerking
        console.log("vermenigvuldigen " + antwoord); // laat ook in de console zien
        vermenigvuldigen.innerHTML = antwoord; // schrijf naar HTML
    }
    function aftrekkenn(getal1, getal2){
        let antwoord = getal1 - getal2;// doe de bewerking
        console.log("aftrekken " + antwoord); // laat ook in de console zien
        aftrekken.innerHTML = antwoord; // schrijf naar HTML
    }
    function delenn(getal1, getal2){
        if (getal1==0){
            console.log("er is een error je mag geen 0 aangeven")
            delen.innerHTML = "ERROR: je krijg infinite ";
        }
        else if (getal2==0){
            console.log("er is een error je mag geen 0 aangeven")
            delen.innerHTML = "ERROR: je krijg infinite. voer geen 0 in";
        }
        else{
            let antwoord = getal1 / getal2;// doe de bewerking
            console.log("delen " + antwoord); // laat ook in de console zien
            delen.innerHTML = antwoord; // schrijf naar HTML
        }
    }