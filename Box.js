class Box {
  constructor(x, y, width, height, color) {
    var options = {
        'isStatic':false,
        'restitution':0.5,
        'friction':0,
        'density':1.5
    }
    this.body = Bodies.rectangle(x, y, width, height, options);
    this.width = width;
    this.height = height;
    this.color = color;
    this.visibility = 255;
    World.add(world, this.body);
  }

  display(){
    if(this.body.speed<3){
      var pos = this.body.position;
      var angle = this.body.angle;
      push();
      translate(pos.x, pos.y);
      rotate(angle);
      rectMode(CENTER);
      angleMode(RADIANS);
      fill(this.color);
      strokeWeight(2);
      rect(0, 0, this.width, this.height);
      pop();
    } 
    else{
      World.remove(world,this.body);
      push();
      this.visibility = this.visibility-5;
      tint(255,this.visibility);
      fill(255,this.visibility);
      stroke(255,this.visibility);
      rect(this.body.position.x,this.body.position.y,this.width,this.height);
      pop(); 
    }
  }

  score(){
    if(this.visibility<0 && this.visibility>-105){
      score++
    }
  }
}