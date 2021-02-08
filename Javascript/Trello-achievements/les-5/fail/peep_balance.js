//laat je balance zien


// haalt de button op
button=document.getElementById("pay").addEventListener("click",(rekening)=>{
    let geldSpan= document.getElementById("balance");
    // number zorgt ervoor dat het als een nummer word gezien
    let geld = Number(geldSpan.innerHTML);
    console.log(geld);
    geld -= 5;
    
    geldSpan.innerHTML = geld;
    foto=document.getElementById("gordijn").src="cat.jpg";
    timer();
})




// de timer
    var tijd;
    function timer() {
        tijd = setInterval(pic, 1000);
        
      }
    function pic(){
        foto=document.getElementById("gordijn").src="curtains.png";
        console.log(foto)
        // clearInterval(tijd);
    }
//    timer maken


// mar updaten 
// de functionloopt elke seconde dus kan je de timer aanpassen per seconde in de html

 


    
    
    
    

