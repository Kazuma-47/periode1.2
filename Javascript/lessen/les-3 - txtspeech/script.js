    "use strict"   
    let myText = document.getElementById('myText');
    let myImage = document.getElementById('myImage');
    let myButton = document.getElementById('myButton');
    let myReset = document.getElementById('myReset');

    myButton.addEventListener('click', function(){
        main();
    })

    myReset.addEventListener('click', function(){
        let woord1 = reset[0];
        let woord2 = reset[0];
        let woord3 = reset[0];
        let outputString = woord1 + " " + woord2 + " " + woord3;
        myText.innerHTML = outputString;
        // sayItLoud(outputString);
        // ze begon zomaar punt te zingen dus dit moest uit
        myImage.src = plaatje; 

    })

    function main(){
         let dezeTextWordtHet = makeThisSentence();
         myText.innerHTML = dezeTextWordtHet;
         sayItLoud(dezeTextWordtHet); // say something nice say it loud
         selectThisImage(); // show a nice image
    }
    
    
    
    function randomizer(range = 1){ 
        // Math.random geeft een waarde  0 <= waarde < 1 (dus exclusief 1)
        return Math.floor((Math.random() * range));
    }
    
    
    function makeThisSentence(){
        let index = randomizer(arrayLength);
        let index2 = randomizer(arrayLength);
        let index3 = randomizer(arrayLength);
        let woord1 = onderwerp[index];
        let woord2 = werkwoord[index2];
        let woord3 = restwoord[index3];
        let outputString = woord1 + " " + woord2 + " " + woord3;
        return outputString;
    }
    
    function selectThisImage(){
        let index = randomizer(arrayLength);
        myImage.src = plaatjes[index]; 
    }
    
    function sayItLoud (textString) {
      let message = new SpeechSynthesisUtterance(textString);
      let voices = window.speechSynthesis.getVoices();
      message.voice = voices[1];
      message.pitch = 1; // range between 0 and 2
      message.rate = 1; // range between 0.1 (lowest) and 10 (highest) 
      window.speechSynthesis.speak(message);
    }
    
    
    const reset= ["...", "...","..."];
    const onderwerp = ["Ross","Ik","Nathan"];
    const werkwoord = ["drink", "sprint", "is"];
    const restwoord = ["water", "weg", "klein"];
    
    let plaatje= "https://suzannaesther.nl/wp-content/uploads/2018/06/Reset.jpg";
    let plaatjes = ["https://ftw.usatoday.com/wp-content/uploads/sites/90/2018/05/wisc.jpg?w=1000&h=600&crop=1", "https://www.daysoftheyear.com/wp-content/uploads/happy-cat-month-1.jpg", "https://www.ukspace.org/wp-content/uploads/2019/05/0.jpg", "https://observer.com/wp-content/uploads/sites/2/2020/05/yoda-https://www.crypto-insiders.nl/wp-content/uploads/2020/07/Dogecoin_DOGE_koers_schiet_20_omhoog_door_TikTok_viral_challenge.png-observer.jpg?quality=80"]
    let arrayLength = onderwerp.length;
