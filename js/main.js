var game = new Phaser.Game(960, 624, Phaser.CANVAS, '');


game.state.add('loading', loading);
// game.state.add('intro', intro);
game.state.add('play',play);

game.state.start('loading');
