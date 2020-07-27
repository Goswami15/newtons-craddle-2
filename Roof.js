class Roof{
    constructor(){
        var options={
            isStatic:true,
        };

        this.body=Bodies.rectangle(350,250,250,15,options);
        this.width=250;
        this.height=15
        World.add(world,this.body);
    }
    display(){
        var pos=this.body.position;
        push();
        fill("yellow");
        
rect(pos.x,pos.y,this.width,this.height);
pop();
    }
}