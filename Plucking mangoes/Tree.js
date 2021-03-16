class Tree{
    constructor(x,y,width,height){
        var options={
            isStatic:true
        }

        this.body = Bodies.rectangle(x,y,width,height,options);
        this.width= width;
        this.height= height;
        this.image = loadImage("tree.png");
        World.add(world,this.body);
    }

    display(){
        rectMode(CENTER);
        //fill("red");
        var pos= this.body.position;
        //rect(pos.x,pos.y,this.width,this.height);
        imageMode(CENTER);
        image(this.image,pos.x,pos.y,this.width,this.height)
    }
}