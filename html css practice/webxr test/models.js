      // position volgorde   links rechts/ boven onder/ voor achter
    //   scale volgorde (image) breedte / hoogte
    // scale volgorde model (moet altijd gelijk zijn) 0,0,0

const controls = new Controls(50);
controls.enableMovement();

const minecraftModel = new Model('minecraft/scene.gltf');
minecraftModel.setPosition(7, -14, -16);
minecraftModel.setScale(1, 1, 1);
minecraftModel.setRotation(0, 0, 0);


// vloer met de textuur 
// vloer aan rechterkant 
const vloer = new Model('kamer/vloer/scene.gltf');
vloer.setScale(5, 5, 5);
vloer.setRotation(0, 0, 0);
vloer.setPosition(0, 0 , 0);

const vloer2 = new Model('kamer/vloer/scene.gltf');
vloer2.setScale(7, 7, 7);
vloer2.setRotation(0, 0, 0);
vloer2.setPosition(14, -4 , 0);

const vloer3 = new Model('kamer/vloer/scene.gltf');
vloer3.setScale(7, 7, 7);
vloer3.setRotation(0, 0, 0);
vloer3.setPosition(28, -4 , 0);

const vloer4 = new Model('kamer/vloer/scene.gltf');
vloer4.setScale(7, 7, 7);
vloer4.setRotation(0, 0, 0);
vloer4.setPosition(28, -4 , -14);

const vloer5 = new Model('kamer/vloer/scene.gltf');
vloer5.setScale(7, 7, 7);
vloer5.setRotation(0, 0, 0);
vloer5.setPosition(28, -4 , -28);

const vloer6 = new Model('kamer/vloer/scene.gltf');
vloer6.setScale(7, 7, 7);
vloer6.setRotation(0, 0, 0);
vloer6.setPosition(14, -4 , -28);

const vloer7 = new Model('kamer/vloer/scene.gltf');
vloer7.setScale(7, 7, 7);
vloer7.setRotation(0, 0, 0);
vloer7.setPosition(14, -4 , -14);

const vloer8 = new Model('kamer/vloer/scene.gltf');
vloer8.setScale(7, 7, 7);
vloer8.setRotation(0, 0, 0);
vloer8.setPosition(0, -4 , -14);

const vloer9 = new Model('kamer/vloer/scene.gltf');
vloer9.setScale(7, 7, 7);
vloer9.setRotation(0, 0, 0);
vloer9.setPosition(0, -4 , -28);

// // vloer aan de linker kant

const vloerL1 = new Model('kamer/vloer/scene.gltf');
vloerL1.setScale(7, 7, 7);
vloerL1.setRotation(0, 0, 0);
vloerL1.setPosition(-14, -4 , -28);

const vloerL2 = new Model('kamer/vloer/scene.gltf');
vloerL2.setScale(7, 7, 7);
vloerL2.setRotation(0, 0, 0);
vloerL2.setPosition(-14, -4 , -14);

const vloerL3 = new Model('kamer/vloer/scene.gltf');
vloerL3.setScale(7, 7, 7);
vloerL3.setRotation(0, 0, 0);
vloerL3.setPosition(-14, -4 , -14);

const vloerL4 = new Model('kamer/vloer/scene.gltf');
vloerL4.setScale(7, 7, 7);
vloerL4.setRotation(0, 0, 0);
vloerL4.setPosition(0, -4 , -14);

const vloerL5 = new Model('kamer/vloer/scene.gltf');
vloerL5.setScale(7, 7, 7);
vloerL5.setRotation(0, 0, 0);
vloerL5.setPosition(-14, -4 , 0);





// const image= new XRImage('kamer/wall/muur.jpg');
// image.setScale(2, 2);
// image.setPosition(1.1883, 1 ,-11.3);






const image5= new Model('kamer/kitten/kat/scene.gltf');
image5.setScale(0.1, 0.1, 0.1);
image5.setRotation(0, -36.95, 0);
image5.setPosition(-4.4436, 0 , -3.00392);

// const floor= new XRImage('kamer/vloer/tegel.jpg');
// floor.setScale(4, 4);
// image2.setPosition(1.1883, 4.87 ,-1.87092);


  
minecraftModel.addEventListener('click', () => 
  document.getElementById('extra').innerHTML = "Dit is steve");

  image5.addEventListener('click', () => 
  document.getElementById('extra').innerHTML = "Dit is kitten");