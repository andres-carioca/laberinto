var loading = new Phaser.State();


loading.preload = function() {


    // game.load.tilemap('mapa', 'assets/tilemaps/map/map.json',null, Phaser.Tilemap.TILED_JSON);
    game.load.tilemap('mapa', null, mapa, Phaser.Tilemap.TILED_JSON);
    game.load.image('tileset', 'assets/tilemaps/tiles/tileset.png');
    
    game.load.spritesheet('hero','assets/img/hero.png',24,24,9);

    


}

loading.create = function() {

    game.state.start('play');

}


