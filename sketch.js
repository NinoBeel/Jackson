var path,boy, leftBoundary,rightBoundary;
var pathImg,boyy;
var i;

function preload(){
  pathImg = loadImage ("path.png");
  boyy =loadAnimation ("1.png", "2.png", "3.png", "4.PNG", "5.png");
  
}

function setup(){
  
  createCanvas(400,400);
  
  
  path = createSprite (200,200,100,400);
  path.addImage (pathImg);
  boy= createSprite (200,300,20,20);
  boy.addAnimation ("running", boyy);
  
 
path.scale=1.2;

  
// crear  left Boundary (límite izquierdo)
leftBoundary=createSprite(0,0,100,800);
leftBoundary.visible= false;
////establecer visibilidad como false (falso) para límite izquierdo

//crear right Boundary (límite derecho)
rightBoundary=createSprite(410,0,100,800);
rightBoundary.visible= false
//establecer visibilidad como false (falso) para límite izquierdo
}

function draw() {
  background(0);
  path.velocityY = 4;
boy.x =World.mouseX
  
  // boy moviéndose en el eje X con el mouse
  
  edges= createEdgeSprites();
  boy.collide(edges[3]);
  boy.collide (leftBoundary);
  boy.collide (rightBoundary);

  // colisión de boy con los límites derecho e izquierdo invisibles 
  
  //código para reiniciar el fondo
  if(path.y > 400 ){
    path.y = height/2;
  }
  
  drawSprites();
}
