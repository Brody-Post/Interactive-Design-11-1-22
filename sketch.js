let angle=0
let art
let pic

let txt = name
var input
var button

let inp;


//function preload(){
	//pic=loadImage('heart.jpg')
//}

function setup() {
  createCanvas(400, 400,WEBGL);
  art=createGraphics(400,400)
  
  inp = createInput();
  inp.position(0, 0);
  inp.size(100);
  inp.input(myInputEvent);
  
  //button = createButton('submit');
  //button.position(105,0);
  //button.mousePressed(drawName);
  
    createCanvas(windowWidth,windowHeight,WEBGL,SVG);
  detailY = createSlider(1, 16, 1);
  detailY.position(10, height + 5)
  detailY.style('width','80px');
  
   button = createButton("Download");
  button.position(0,25);
  button.mousePressed(saveit);
  button.style("width", "100px");
  
  colorPicker = createColorPicker("#ed225d");
  colorPicker.position(00,47);
  colorPicker.style("width", "100px");
  
    colorPicker2 = createColorPicker("#92D3CA");
  colorPicker2.position(0, 75);
  colorPicker2.style("width", "100px");
  
    sel = createSelect();
  sel.position(0, 104);
  sel.option("Avenir");
  sel.option("Futura");
  sel.option("Courier New");
  sel.option("Rockwell");
  sel.option("Georgia");
  sel.selected("Georgia");
  sel.style("width", "100px");
  
  //art.background(pic)
  
  
}

function draw() {
  //clear();
  background(colorPicker.color());
  
  //background(215,45,109)
  
  push()
  rotateX(angle)
  rotateY(angle)
  rotateZ(angle)
  texture(art)
  
  strokeWeight(10)
  stroke(41,49,51)
  box(200)
  angle+=0.003
  pop()
  
  push()
  art.textSize(100);
  art.textLeading(50);
  art.textAlign(CENTER,CENTER);
  //textFont(sel.value());
  art.textFont(sel.value());
  art.fill(colorPicker2.color());
  //art.fill(132,195,190);
  art.text(inp.value(),200,200);
  pop()
  
    orbitControl();
  rotateY(100);
  rotateX(100);
  rotateZ(100);
  //box(180,300);
  
  push()

  //art.stroke(random(0,255),random(0,255),random(0,255))
  art.strokeWeight(5)
  art.noFill()
 // art.line(width/2,height/2,mouseX,mouseY)
  
  pop()
}

function myInputEvent() {
  art.clear();
  txt = inp.value();
  
  //console.log('you are typing: ', this.value());
}

//function keyPressed(){
  //if (keyCode === ENTER){
    //clear (txt);
    //background (50);
  //} 
//}

function drawName() {
  background(art.text);
  textSize(30);
  var name = txt;
}



function saveit() {
  save("textGridGenerator.svg"); // give file name
}

function windowResized(){
  resizeCanvas(windowWidth,windowHeight);
}
