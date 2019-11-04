
/*  
########################################
########################################
              ARISTA
########################################            
########################################
*/

function Arista(num, fil, col, nodA, nodB, val) {

    var id = num || 0
    var fila = fil || 0;
    var valor = val || 2;
    var columna = col || 0;
    var nodoA = nodA || null;
    var nodoB = nodB || null;
  
  
  
    // this.setId = function (num) {
    //   id = num
    // };
  
    this.getId = function () {
      return id
    };
  
    this.setFila = function (fil) {
      fila = fil
    };
    this.getFila = function () {
      return fila
    };
  
    this.setValor = function (val) {
      valor = val
    };
    this.getValor = function () {
      return valor
    };
  
    this.getNodoA = function () {
      return nodoA
    };
    this.setNodoA = function (nodA) {
      nodoA = nodA
    };
  
    this.getNodoB = function () {
      return nodoB
    };
    this.setNodoB = function (nodB) {
      nodoB = nodB
    };
  
    this.setColumna = function (col) {
      columna = col
    };
    this.getColumna = function () {
      return columna
    };
  
  
  }
  
  
  
  function Aristas() {
  
    var id = 0;
    var aristas = [];
  
    this.popArista = function () {
      return aristas.pop();
    };
  
    this.getArista = function () {
      if (id == aristas.length) id = 0;
      return aristas[id++]
    };
  
    this.getAristas = function () {
      return aristas
    };
  
    this.sortAristas = function () {
  
      aristas.sort(function (a, b) {
        return 0.5 - Math.random()
      });
  
    }
  
    this.createAristas = function (cant) {
  
  
      for (let id = 0; id < cant; id++) {
  
        aristas[id] = new Arista(id);
      }
  
    }
  
  }
  
  
  /*  
  ########################################
  ########################################
              FIN ARISTA
  ########################################            
  ########################################
  */
  
  