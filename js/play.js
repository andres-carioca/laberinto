var play = new Phaser.State();


play.create = function() {

    game.physics.startSystem(Phaser.Physics.ARCADE);
    
    this.cursors = game.input.keyboard.createCursorKeys();
   
    
    this.createMap();
    
    this.hero = new Player(12,12,'hero',this.cursors)

    
    
    console.log("Jugando !!!");
    
}


play.update = function () {

     
    game.physics.arcade.collide(this.hero.getBody(), this.layer);
        
    this.hero.move();
 

    
}


play.createMap= function() {

    this.map = game.add.tilemap('mapa');
    this.map.addTilesetImage('tileset');
    
    this.layer = this.map.createLayer('laberinto');
    this.layer.resizeWorld();
    
    this.map.setCollision(1);
   
}


