class Plinko {

    constructor(x,y,radius,space){

        this.x = x;
        this.space = space;

        var options = {

            isStatic: false,
        }

        for (var i = x; i < 480; i = i + space) {

            this.body = Bodies.circle(i,y,radius,options);
        }

        this.radius = radius;

        World.add(world,this.body);
    }
    
    display(colour){

        fill(colour);
        ellipseMode(CENTER);

        for (var i = this.x; i < 480; i = i + this.space) {

            ellipse(i,this.body.position.y,this.radius,this.radius);
        }
    }
}