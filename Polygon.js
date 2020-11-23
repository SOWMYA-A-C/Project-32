class Polygon{
    constructor(x,y,radius){
        var options = {
            'isStatic':false,
            'restitution':0.1,
            'density':1.0,
            'friction':1.5
        }
        this.body = Bodies.circle(x,y,radius,options);
        this.radius = radius;
        this.image = loadImage("polygon.png");
        World.add(world, this.body);
    }

    display(){
        var pos = this.body.position;
        var angle = this.body.angle;
        push();
        translate(pos.x, pos.y);
        rotate(angle);
        imageMode(CENTER);
        angleMode(RADIANS);
        image(this.image,0,0,this.radius*2.3,this.radius*2.3);
        pop();
    }
}