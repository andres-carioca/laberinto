var play = new Phaser.State();

play.preload=function(){

    // game.load.tilemap('mapa', null, mapa, Phaser.Tilemap.TILED_JSON);
    // game.load.image('tiles', 'assets/tilemaps/tiles/tileset.png');

}


play.render = function() {

    // game.debug.bodyInfo(this.hero, 32, 32);
    // game.debug.body(this.hero);
    // game.debug.body(layer);
}

play.create = function() {

    game.physics.startSystem(Phaser.Physics.ARCADE);
    
    this.cursors = game.input.keyboard.createCursorKeys();
   
    
    this.createMap();
    this.createPlayer();

 
    
    
    console.log("Jugando !!!");
    
}


play.update = function () {

     
    game.physics.arcade.collide(this.hero, this.layer);
        
    this.hero.body.velocity.setTo(0);

    if (this.cursors.left.isDown) {
        this.hero.scale.x=-1;
        this.hero.frameRep = 3;
        this.hero.body.velocity.x =-100;
        this.hero.animations.play('east', 20, true);
    } else if (this.cursors.right.isDown) {
        this.frameRep = 3;
        this.hero.scale.x=1;
        this.hero.body.velocity.x=100;
        this.hero.animations.play('east', 20, true);
    } else if (this.cursors.up.isDown) {
        this.frameRep = 0;
        this.hero.body.velocity.y=-100;
        this.hero.animations.play('north', 20, true);
    } else if (this.cursors.down.isDown) {
        this.frameRep = 6;
        this.hero.body.velocity.y=100;
        this.hero.animations.play('south', 20, true);
    } else  this.hero.frame = this.frameRep;

 

    
}




play.createMap= function() {

    this.map = game.add.tilemap('mapa');
    this.map.addTilesetImage('tileset');
    
    
    // layer = map.createLayer('laberinto');
    this.layer = this.map.createLayer('laberinto');
    this.layer.resizeWorld();
    

    // map.setCollisionByIndex(1,true,'laberinto');

    

    this.map.setCollision(1);
    // this.map.setCollision(1,true,0);
   
   

}


play.createPlayer=function(){

    // player = new Player(0,0,'hero',this.cursors)


    this.hero = game.add.sprite(12, 12, 'hero');
    game.physics.arcade.enable(this.hero);
    this.hero.body.setCircle(4,8,8);
    this.hero.anchor.setTo(0.5,0.5);
    // this.hero.body.setSize(16,16,4,4)
    // this.hero.body.setSize(16,16,4,4)
    
    this.hero.body.collideWorldBounds = true;

    this.hero.animations.add('north',[0, 1, 2]);
    this.hero.animations.add('east', [3, 4, 5]);
    this.hero.animations.add('south',[6, 7, 8]);

    



}

