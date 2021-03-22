class Log {
    constructor(x, y, height, Angle) {
      var options = {
          'restitution':0.5,
          'friction':1.5,
          'density':1.5
      }
      this.body = Bodies.rectangle(x, y, 20, height, options);
      this.width = 20;
      this.height = height;
      Matter.Body.setAngle(this.body,Angle)
      
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      var angle = this.body.angle;
      push();
      translate(pos.x, pos.y);
      rotate(angle);
      strokeWeight(4);
      stroke('purple');
      rectMode(CENTER);
      fill('blue');
      rect(0, 0, this.width, this.height);
      pop();
    }
  };
  