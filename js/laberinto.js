/*
########################################
########################################
              LABYRINTH
########################################
########################################
*/


labyrinth = {};

labyrinth.create = function () {

  this.crearMatriz();
  this.linkAristas();
  this.kruskal();
  this.crearLaberinto(); // imprime laberinto en consola

};

labyrinth.crearLaberinto = function () {

  this.laberinto = [];

  for (const fila of this.matriz) {

    var filaLaberinto = [];

    for (const columna of fila) {

      if (columna != 0) filaLaberinto.push(columna.getValor());
      else filaLaberinto.push(0);

    }

    this.laberinto.push(filaLaberinto);

  }

};

labyrinth.kruskal = function () {

  this.aristas.reset();
  this.nodos.reset();

  this.aristas.set(new Kruskal(this.aristas));

}

labyrinth.getFilas = function () {

  return 2 * this.filas - 1;

};

labyrinth.getColumnas = function () {

  return 2 * this.columnas - 1;

};


labyrinth.crearMatriz = function () {

  this.matriz = [];

  this.filas = 13;
  this.columnas = 20;

  this.nodos = new Nodos();
  this.aristas = new Aristas();

  var par = this.filas * (this.columnas - 1);
  var impar = this.columnas * (this.filas - 1);

  this.aristas.createAristas(par + impar);
  this.nodos.createNodos(this.filas * this.columnas);


  for (let fila = 0; fila < 2 * this.filas - 1; fila += 2) {

    this.matriz[fila] = [];
    if (fila + 1 < 2 * this.filas - 1) this.matriz[fila + 1] = [];

    for (let columna = 0; columna < 2 * this.columnas - 1; columna += 2) {

      this.matriz[fila][columna] = this.crearNodo(fila, columna);
      if (columna + 1 < 2 * this.columnas - 1) this.matriz[fila][columna + 1] = this.crearArista(fila, columna + 1);


      if (fila + 1 < 2 * this.filas - 1) {

        this.matriz[fila + 1][columna] = this.crearArista(fila + 1, columna);
        if (columna + 1 < 2 * this.columnas - 1) this.matriz[fila + 1][columna + 1] = 0;

      }

    }

  }

};


labyrinth.crearNodo = function (fila, columna) {

  var nodo = this.nodos.getNodo();
  nodo.setColumna(columna);
  nodo.setFila(fila);

  return nodo;

};



labyrinth.linkAristas = function () {

  var aristas = this.aristas.getAristas();

  for (let index = 0; index < aristas.length; index++) {


    var arista = aristas[index];
    var fila = arista.getFila();
    var columna = arista.getColumna();


    if (fila % 2) { //impar

      arista.setNodoA(this.matriz[fila - 1][columna]);
      arista.setNodoB(this.matriz[fila + 1][columna]);

    } else { //par

      arista.setNodoA(this.matriz[fila][columna - 1]);
      arista.setNodoB(this.matriz[fila][columna + 1]);

    }

  }

};



labyrinth.crearArista = function (fila, columna) {

  var arista = this.aristas.getArista();
  arista.setColumna(columna);
  arista.setFila(fila);

  return arista;

};


labyrinth.getData = function () {

  var data = '';
  
  for (var fila = 0; fila < this.laberinto.length; fila++) {

    data += this.laberinto[fila].toString() + "\n";

  }

  return data;

};



labyrinth.create();


/*  
########################################
########################################
            FIN LABYRINTH
########################################            
########################################
*/