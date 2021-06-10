class Snow{
    constructor(x,y,r,angle){
        var options={
            isStatic: false,
            friction: 0.1,
            density: 0.01
        }
        this.x= x;
        this.y= y;
        this.r= r;
        this.image= loadImage("snow4.webp");
        this.body= Bodies.circle(x,y,this.r,options);

        World.add(world,this.body);
    }
    display(){
        var snowpos= this.body.position;
        var angle= this.body.angle;
        push();
        translate(snowpos.x, snowpos.y);
        rotate(angle);
        imageMode(CENTER); 
        image(this.image,0, 0, this.r, this.r); 
        pop(); 
    }
}