class LOG{
    constructor(x,y,h,a){
        var options = {
            restitution:0.8,
            friction:1
        }
        this.body = Bodies.rectangle(x,y,20,h,options);
        this.width = 20;
        this.height = h;
        Matter.Body.setAngle(this.body,a)
        World.add(myworld,this.body);
    }
    display(){
        var pos = this.body.position;
        var angle = this.body.angle;

        push();
        translate(pos.x,pos.y);
        rotate(angle);
        fill("white");
        stroke("red");
        strokeWeight(6);
        rectMode(CENTER);
        rect(0,0,this.width,this.height);
        pop();
    }
}