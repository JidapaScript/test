//let img;

//function preload() {
  //img = loadImage('assets/laDefense.jpg');
//}

function setup() {
    createCanvas(windowWidth, windowHeight);
    //image(img, 0, 0);
  }
  
  function draw() {
    background(231,207,176);
    textFont('Helvetica');
    textSize(36);
    textAlign(CENTER);
    fill(69,131,225)
    text('JIDAPA SNIDVONGS',windowWidth, windowHeight/6)
    
    textSize(128)
    textAlign(LEFT);
    text('👧🏻',60,windowHeight/5)
    
    textSize(16)
    textAlign(LEFT);
    fill(140,74,47)
    text('A multidisciplinary designer',220,160)
    text('experienced in UX/UI, product and service design.',220,180)
    text('I developed my skills working on various projects from university and beyond.',220,200)
    
    textSize(24);
    textAlign(LEFT);
    fill(69,131,225)
    text('Experience',60,280)
    
    textSize(16)
    textAlign(LEFT);
    fill(140,74,47)
    text('- CUDSON Graphic designer',60,320)
    text('- Bangkok Creative Economy Design research',60,340)
    text('- Chulalongkorn Hospital Experience designer',60,360)
  }