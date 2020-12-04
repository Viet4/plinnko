class Ball{

    constructor(x,y,radius){

        var options = {

            'restitution': 0.2,
            'friction': 0.8,
            'density': 1,
        }

        this.body = Bodies.circle(x,y,radius,options);

        this.radius = radius;

        this.colour = color(random(0,255),random(0,255),random(0,255))

        World.add(world,this.body);
    }

    display(){

        var pos = this.body.position;
        var angle = this.body.angle;

        push();

        translate(pos.x,pos.y);
        rotate(angle);

        fill(this.colour);
        ellipseMode(CENTER);
        ellipse(pos.x,pos.y,this.radius,this.radius);

        pop();
    }

}