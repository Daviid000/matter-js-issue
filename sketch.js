// module aliases
var Engine = Matter.Engine,
World = Matter.World,
Bodies = Matter.Bodies;
Body = Matter.Body;

var engine;
var world;
var walls = [];
var balls = [];


function setup() {
    createCanvas(1280, 720);

    // create an engine
    engine = Engine.create();
    world = engine.world;
    world.gravity.y = 2;

    //left side simulation
    walls.push(new Wall(300, 300, 40, 40));
    walls.push(new Wall(340, 300, 40, 40));
    balls.push(new Ball(340, 200, 20));

    //right side simulation
    walls.push(new Wall(600, 300, 80, 40));
    balls.push(new Ball(640, 200, 20));



}


function draw() {
    //update engine
    Engine.update(engine);

    //background color
    background(150);

    //draw all walls
    for(var i=0; i<walls.length; i++){
        walls[i].show();
    }

    //draw all balls
    for(var i=0; i<balls.length; i++){
        balls[i].show();
    }
}


function Wall(x, y, w, h){
    var o = { //options
        isStatic: true
    };
    this.body = Bodies.rectangle(x+w/2, y+h/2, w, h, o);
    this.w = w;
    this.h = h;
    World.add(world, this.body);

    this.show = function(){
        //draw wall
        var pos = this.body.position;
        rect(pos.x-this.w/2, pos.y-this.h/2, this.w, this.h);
    }
}


function Ball(x, y, r){
    this.body = Bodies.circle(x, y, r);
    this.r = r;
    World.add(world, this.body);
    this.body.restitution = 0.8;


    this.show = function(){
        //draw ball
        var pos = this.body.position;
        circle(pos.x, pos.y, this.r*2);

    }
}
