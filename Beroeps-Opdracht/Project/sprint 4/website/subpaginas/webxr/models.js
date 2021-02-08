      // position volgorde   links rechts/ boven onder/ voor achter
    //   scale volgorde (image) breedte / hoogte
    // scale volgorde model (moet altijd gelijk zijn) 0,0,0

const controls = new Controls(50);
controls.enableMovement();

// const minecraftModel = new Model('webxr/minecraft/scene.gltf');
// minecraftModel.setPosition(7, -14, -16);
// minecraftModel.setScale(1, 1, 1);
// minecraftModel.setRotation(0, 0, 0);


// vloer met de textuur 
// vloer aan rechterkant 
const vloer = new Model('webxr/kamer/vloer/scene.gltf');
vloer.setScale(7, 7, 7);
vloer.setRotation(0, 0, 0);
vloer.setPosition(0, 0 , 0);

// const vloer2 = new Model('webxr/kamer/vloer/scene.gltf');
// vloer2.setScale(7, 7, 7);
// vloer2.setRotation(0, 0, 0);
// vloer2.setPosition(7, 0 , 0);




const vloer5 = new Model('webxr/kamer/vloer/scene.gltf');
vloer5.setScale(7, 7, 7);
vloer5.setRotation(0, 0, 0);
vloer5.setPosition(0, 0 , -7);

// const vloer6 = new Model('webxr/kamer/vloer/scene.gltf');
// vloer6.setScale(7, 7, 7);
// vloer6.setRotation(0, 0, 0);
// vloer6.setPosition(7, 0 , -7);







// // vloer aan de linker kant
// const vloerL1 = new Model('webxr/kamer/vloer/scene.gltf');
// vloerL1.setScale(7, 7, 7);
// vloerL1.setRotation(0, 0, 0);
// vloerL1.setPosition(7, 0 , -14);





const vloerL4 = new Model('webxr/kamer/vloer/scene.gltf');
vloerL4.setScale(7, 7, 7);
vloerL4.setRotation(0, 0, 0);
vloerL4.setPosition(0, 0 , -14);



// muur
const wall = new Model('webxr/kamer/wall/scene.gltf');
wall.setScale(3, 3, 3);
wall.setRotation(0,89, 0);
wall.setPosition(-3.5, 1 , 0);

const wall2 = new Model('webxr/kamer/wall/scene.gltf');
wall2.setScale(3, 3, 3);
wall2.setRotation(0,89, 0);
wall2.setPosition(-3.5, 1 , -5);

const wall3 = new Model('webxr/kamer/wall/scene.gltf');
wall3.setScale(3, 3, 3);
wall3.setRotation(0,89, 0);
wall3.setPosition(-3.5, 1 , -10);



// ver muur voor afsnijdinge
// ~~
// ~~

// muur achter je

const wall6 = new Model('webxr/kamer/wall/scene.gltf');
wall6.setScale(3, 3, 3);
wall6.setRotation(0,0, 0);
wall6.setPosition(-1, 1 , 3);


const wall7 = new Model('webxr/kamer/wall/scene.gltf');
wall7.setScale(3, 3, 3);
wall7.setRotation(0,0, 0);
wall7.setPosition(4, 1 , 3);



const wall11 = new Model('webxr/kamer/wall/scene.gltf');
wall11.setScale(3, 3, 3);
wall11.setRotation(0,89, 0);
wall11.setPosition(3.5, 1 , 0);

const wall9 = new Model('webxr/kamer/wall/scene.gltf');
wall9.setScale(3, 3, 3);
wall9.setRotation(0,89, 0);
wall9.setPosition(3.5, 1 , -5);

const wall10 = new Model('webxr/kamer/wall/scene.gltf');
wall10.setScale(3, 3, 3);
wall10.setRotation(0,89, 0);
wall10.setPosition(3.5, 1 , -10);


const wall13 = new Model('webxr/kamer/wall/scene.gltf');
wall13.setScale(3, 3, 3);
wall13.setRotation(0,0, 0);
wall13.setPosition(-4, 1 , -13);

const wall14 = new Model('webxr/kamer/wall/scene.gltf');
wall14.setScale(3, 3, 3);
wall14.setRotation(0,0, 0);
wall14.setPosition(1.7, 1 , -13);

const image17 = new XRImage('webxr/foto/man.jpg');
image17.setScale(1.5, 2, 1.5);
image17.setRotation( 0, 0, 0);
image17.setPosition(0, 1.2, -12.7);

const image18 = new XRImage('webxr/foto/vlees.jpg');
image18.setScale(1.5, 2, 1.5);
image18.setRotation( 0, 89, 0);
image18.setPosition(3.2, 1.2 , -7);

const image19 = new XRImage('webxr/foto/besjes.jpg');
image19.setScale(2, 2, 2);
image19.setRotation( 0, 89, 0);
image19.setPosition(-3.2, 1.2 , -7);


const image5= new Model('webxr/kamer/kitten/kat/scene.gltf');
image5.setScale(0.1, 0.1, 0.1);
image5.setRotation(0, 0, 0);
image5.setPosition(3.55, 2.2 , -4);


//  \n werkt niet?
image17.addEventListener('click', () => 
    document.getElementById('model').innerHTML = "Man van suikerklontjes. \n Je bent toch niet van suiker?’, luidt een bekende uitdrukking. Tom Friedman is dat in dit werk wel degelijk. Daar staat de kunstenaar, zijn handen nonchalant in zijn zakken. Hij kijkt ontspannen opzij. Suikerwit en hoekig van vorm door de klontjes. Alsof hij geblurd is op televisie. "
);
image18.addEventListener('click', () => 
    document.getElementById('model').innerHTML = "De gigantische lamskarbonade gemaakt van sloophout. Het zit zo slim in elkaar dat je ervan overtuigd bent dat het een 3D beeld"
);

image19.addEventListener('click', () => 
    document.getElementById('model').innerHTML = "Aan de bijna drie meter lange tros van Kathleen Ryan (1984) hangen beschimmelde en half ingedroogde druiven. Zoals meer werken van Ryan, zijn ze gemaakt van glinsterende edelstenen en kralen."
);


    
// const floor= new XRImage('kamer/vloer/tegel.jpg');
// floor.setScale0,0);
// image2.setPosition(1.1883,0.87 ,-1.87092);


  
  