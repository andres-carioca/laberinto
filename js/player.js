function Player(x, y, name, cursor) {

   cursors = cursor;

   player = game.add.sprite(x, y, name);
   game.physics.arcade.enable(player);
   
   player.body.collideWorldBounds = true;
   player.body.setCircle(4, 8, 8);
   player.anchor.setTo(0.5, 0.5);

   player.animations.add('north', [0, 1, 2]);
   player.animations.add('east', [3, 4, 5]);
   player.animations.add('south', [6, 7, 8]);


}

Player.prototype.move = function () {


   player.body.velocity.setTo(0);

   if (cursors.left.isDown) {
      player.scale.x = -1;
      player.body.velocity.x = -100;
      player.animations.play('east', 20, true);
   } else if (cursors.right.isDown) {
      player.scale.x = 1;
      player.body.velocity.x = 100;
      player.animations.play('east', 20, true);
   } else if (cursors.up.isDown) {
      player.body.velocity.y = -100;
      player.animations.play('north', 20, true);
   } else if (cursors.down.isDown) {
      player.body.velocity.y = 100;
      player.animations.play('south', 20, true);
   } else player.frame=6;


}

Player.prototype.getBody = function () {

   return player;

}