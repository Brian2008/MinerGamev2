class Pickaxe {
    constructor(x, y) {
      var options = {
        isStatic:true
      }
      this.image=loadImage("MyGame/Pickaxe.png")
      this.body = Bodies.circle(x, y, 50, options);
      this.r=50
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      push();
      imageMode(RADIUS);
      
      image(this.image,pos.x,pos.y,this.r,this.r);
      pop();
    }
}