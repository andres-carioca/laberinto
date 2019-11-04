var mapa = {


    "layers": [{
        "data": labyrinth.getData(),
        "height":  labyrinth.getFilas(),
        "width": labyrinth.getColumnas(),
        "name": "laberinto",
        "type": "tilelayer",
        "visible": true,
        "opacity": 1,
        "x": 0,
        "y": 0
    }],
    "orientation": "orthogonal",
    "renderorder": "left-up",
    "tilesets": [{
        "image": "..\/tiles\/tileset.png",
        "name": "tileset",
        "imageheight":36,
        "imagewidth":48,
        "tileheight":36,
        "tilewidth":24,
        "firstgid": 1,
        "spacing": 0,
        "margin": 0
    }],
    "width": labyrinth.getColumnas(),
    "height": labyrinth.getFilas(),
    "tileheight": 24,
    "tilewidth": 24,
    "version": 1
};
