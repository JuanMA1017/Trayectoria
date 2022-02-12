class Boat{
    constructor(x, y, w, h){
        this.x=x;
        this.y=y;
        this.w=w;
        this.h=h;
        this.boatimg=loadImage("assets/boat.png");
        this.body=Bodies.rectangle(x, y, w, h);
        World.add(world, this.body);
    }
    display(){
        push();
        translate(this.x, this.y);
        imageMode(CENTER);
        image(this.boatimg, this.body.position.x, this.body.position.y, this.w, this.h);
        pop();
    }
}