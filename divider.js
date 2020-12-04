class Dividers {

    constructor(x,y,width,height,space){

        this.x = x;
        this.space = space;

        var options = {

            isStatic: false,
        }

        for (var i = x; i < 480; i = i + space) {

            this.body = Bodies.rectangle(i,y,width,height,options);
        }

        this.width = width;
        this.height = height;

        World.add(world,this.body);
    }
    
    display(colour){

        fill(colour);
        rectMode(CENTER);

        for (var i = this.x; i < 480; i = i + this.space) {

            rect(i,this.body.position.y,this.width,this.height);
        }
    }
}