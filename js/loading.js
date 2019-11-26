var loading = new Phaser.State();


loading.preload= function() {

    game.load.image('gem', 'assets/img/gem.png');
    game.load.image('out', 'assets/img/out.png');
    game.load.image('tile', 'assets/img/tile.png');
    game.load.image('feliz', 'assets/img/feliz.png');
    game.load.image('salida', 'assets/img/salida.png');
    
    game.load.image('titulo', 'assets/img/laberinto.png');
    game.load.image('creditos', 'assets/img/creditos.png');
    game.load.image('tutorial', 'assets/img/tutorials.png');

    game.load.spritesheet('blay','assets/img/play.png',105,108,2);
    game.load.spritesheet('bredits','assets/img/credits.png',105,108,2);
    game.load.spritesheet('butorial','assets/img/tutorial.png',105,108,2);

    game.load.image('tileset', 'assets/tilemaps/tiles/tileset.png');
    
    game.load.spritesheet('hero','assets/img/hero.png',24,24,9);

}

loading.create = function() {

    game.state.start('menu');

}


