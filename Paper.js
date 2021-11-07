class Paper{
  constructor(x, y,a) {
      var options = {
          isStatic:false,
          restitution:0.3,
          friction:0,
          density:1.2
      }
      
      this.x = x;
      this.y = y;
      this.a = a;
      this.image = loadImage("paper.png");
      this.body = Bodies.circle(this.x, this.y,(this.a -20)/2,options);
      
      World.add(world, this.body);
    }
    display(){
      var pospaper = this.body.position;
      push();
      translate(pospaper.x,pospaper.y);
      ellipseMode(CENTER);
      //rotate(angle);
      imageMode(CENTER);
      image(this.image, 0, 0, this.a, this.a);
     
      pop();
    }
}
