class Block{
    constructor(x,y,width,height){
        var options = {
            'friction': 1.0
        }
        this.body = Bodies.rectangle(x,y,width,height,options);
        this.width = width;
        this.height = height;
        Worls.add(world, this.body);
    }
    display(){
        var pos = this.body.position;
        

        push();
        translate(pos.x,pos.y);
        rotate(angle);
        rectMode(CENTER);
        fill("yellow");
        stroke("red");
        strokeWeight(5);
        rect(0,0,this.body,this.height);
        pop();
    }
}