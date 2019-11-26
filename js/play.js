var play = new Phaser.State();


play.create = function () {

    labyrinth.kruskal();
    labyrinth.crearLaberinto();

    game.physics.startSystem(Phaser.Physics.ARCADE);

    this.cursors = game.input.keyboard.createCursorKeys();

    this.createMap();

    this.addGems();

    this.addOut();

    this.hero = new Player(12, 12, 'hero', this.cursors);

    this.addEnd();

    console.log("Jugando !!!");

}

play.update = function () {

    game.physics.arcade.collide(this.hero.getBody(), this.layer);
    game.physics.arcade.overlap(this.hero.getBody(), this.out, this.gameOver, null, this);
    game.physics.arcade.overlap(this.hero.getBody(), this.gems, this.enableOut, null, this);

    this.hero.move();

}


play.createMap = function () {

    var data = labyrinth.getData();

    game.cache.addTilemap('mapa', null, data, Phaser.Tilemap.CSV);

    this.map = game.add.tilemap('mapa', 24, 24);

    this.map.addTilesetImage('tileset', 'tileset', 24, 36);

    this.layer = this.map.createLayer(0);

    this.layer.resizeWorld();

    this.map.setCollision(0);

}

play.addGems = function () {

    this.gems = game.add.physicsGroup();

    var numbers= this.numRnd();

    for (var i = 0; i < 3; i++) {
        
        //ultimo tile
        // var id = game.rnd.between(1, labyrinth.filas * labyrinth.columnas - 1);

        var id=numbers.pop();

        var x = labyrinth.nodos.getNodoById(id).getColumna();
        var y = labyrinth.nodos.getNodoById(id).getFila();

        var tile = this.map.getTile(x, y, 0);

        this.gems.create(tile.worldX, tile.worldY, 'gem');

    }

}

play.numRnd=function(){

    var numbers=[];

    for(var index=0;index < labyrinth.nodos.getNodos().length-1;index++) numbers[index]=index;
    numbers.sort(function (a, b) {return 0.5 - Math.random()});

    return numbers;

}

play.addOut = function () {

    var tile = this.tileOut(this.lastTile());

    this.salida = game.add.sprite(tile.worldX + tile.width, tile.worldY - tile.height / 2, 'salida');
    this.salida.visible = false;

    this.out = game.add.sprite(tile.worldX, tile.worldY, 'out');
    game.physics.arcade.enable(this.out);
    this.out.body.enable = false;
    this.out.visible = false;

}

play.lastTile = function () {

    //matriz traspuesta
    var id = labyrinth.filas * labyrinth.columnas - 1;
    var x = labyrinth.nodos.getNodoById(id).getColumna();
    var y = labyrinth.nodos.getNodoById(id).getFila();
    var tile = this.map.getTile(x, y, 0);

    return tile;

}

play.tileOut = function (tile) {

    var tiles = [];

    for (var y = tile.y; y >= 0; y -= 2) tiles.push(this.map.getTile(tile.x, y, 0));

    var index = game.rnd.between(0, tiles.length - 1);
    tile = tiles[index];

    this.tileFin = game.add.sprite(tile.worldX + tile.width, tile.worldY, 'tile');
    // this.tileFin.visible=false;

    return tile;

}

play.enableOut = function (player, gem) {

    gem.destroy();

    if (this.gems.children.length == 0) {

        this.out.visible = true;
        this.salida.visible = true;
        this.out.body.enable = true;
    }

}


play.addEnd = function () {

    this.feliz = game.add.button(0, 0, 'feliz', play.end, this);
    this.feliz.x = game.width / 2 - this.feliz.width / 2;
    this.feliz.y = game.height * .1;
    this.feliz.visible = false;

    this.emitter = game.add.emitter(game.world.centerX, -20, 200);
    this.emitter.makeParticles('gem');

}


play.gameOver = function () {

    console.log("Game Over !!!");

    this.hero.getBody().visible = false;

    this.out.visible = false;
    this.out.body.enable = false;

    this.salida.visible = false;

    this.feliz.visible = true;

    this.emitter.start(false, 5000, 5);

}

play.end = function () {

    game.state.start('menu');
}