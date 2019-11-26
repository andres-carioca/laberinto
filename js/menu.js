var menu = new Phaser.State();


menu.create = function () {


    this.addTitle();

    this.blay = this.addButton('blay', .5, false, true, true);
    this.bredits = this.addButton('bredits', .5, false, true, false);
    this.butorial = this.addButton('butorial', .5,true, true, false);

    this.tutorial=this.addButton('tutorial', .1, true, false, false);
    this.credits=this.addButton('creditos', .1, true, false, false);

}


menu.addTitle = function () {

    var titulo = game.add.image(0, 0, 'titulo');
    titulo.x = game.width / 2 - titulo.width / 2;
    titulo.y = game.height * .1;
}



menu.addButton = function (alias, y, center, over, left) {
    
    if (over) var button = game.add.button(0, 0, alias, menu.onClick, this, 1, 2, 1, 2);
    else {
        var button = game.add.button(0, 0, alias, menu.onClick, this, 1, 2);
        button.visible = false;
    }
    
    button.y = game.height * y;
    button.x = (game.width / 2 - button.width / 2);

    if (!center){
        if (left) button.x -= button.width * 2;
        else button.x += button.width * 2;
    } 

    return button;
}



menu.onClick = function (button) {

    if(button.key=='blay') game.state.start('play');

    if(button.key=='bredits') {
        this.credits.visible = true;
        this.bredits.inputEnabled = false;
    }

    if(button.key=='creditos') {
        this.credits.visible = false;
        this.bredits.inputEnabled = true;
    }
    
    if(button.key=='butorial') {
        this.tutorial.visible = true;
        this.butorial.inputEnabled = false;
    }
        
    if(button.key=='tutorial') {
        this.tutorial.visible = false;
        this.butorial.inputEnabled = true;
    }
    

}