
function setup(){
 canvas = createCanvas(400, 400);
 angleMode(DEGREES);
}

function draw(){
 background(0);
 translate(200,200);
 rotate(-90);

 let hr = hour();
 let mn = minute();
 let sc = second();

 strokeWeight(8);
 noFill();
 stroke(255, 0, 111);
 let secondAngle = map(sc,0,60,0,360);
 arc(0,0,300,300,0,secondAngle);

 stroke(120, 183, 255);
 let minuteAngle = map(mn,0,60,0,360);
 arc(0,0,280,280,0,minuteAngle);
 
 stroke(176, 120, 255);
 let hourAngle = map(hr % 12,0,12,0,360);
 arc(0,0,260,260,0,hourAngle);

 push();
 rotate(secondAngle);
 stroke(255, 0, 111);
 line(0,0,100,0);
 pop();

 push();
 rotate(minuteAngle);
 stroke(120, 183, 255);
 line(0,0,75,0);
 pop();

 push();
 rotate(hourAngle);
 stroke(176, 120, 255);
 line(0,0,50,0);
 pop();

 stroke(255);
 point(0,0);


}