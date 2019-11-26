var game = new Phaser.Game(970, 624, Phaser.CANVAS, '');


game.state.add('loading', loading);
// game.state.add('intro', intro);
game.state.add('menu',menu);
game.state.add('play',play);

game.state.start('loading');
