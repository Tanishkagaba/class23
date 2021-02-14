class Ground{
    constructor(x,y,w,h){
            var Groundoptions={
                isStatic:true
            }
            this.body=Bodies.rectangle(x,y,w,h,Groundoptions)
            this.width=w;
            this.height=h;
            World.add(world,this.body)
    }
    show(){
            var pos=this.body.position;
            rectMode(CENTER);
            fill(255);
            rect(pos.x,pos.y,this.width,this.height)
    }



}