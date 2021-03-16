class Stone{
    constructor(x,y,radius){
        var options={
            isStatic:false,
            restitution:0.5,
            friction:1,
            density:1.2
        }

        //this.width= 30;
        //this.height= 30;
        this.x=x;
        this.y=y;
        this.r = radius;

        this.body = Bodies.circle(this.x,this.y,this.r,options);
        
        this.image = loadImage("stone.png");
        World.add(world,this.body);
    }

    display(){
        var pos= this.body.position;
         push();
         translate(pos.x,pos.y);
         imageMode(CENTER);
         ellipseMode(RADIUS)
         image(this.image,0,0, this.r*2,this.r*2)
         pop();
    }
}