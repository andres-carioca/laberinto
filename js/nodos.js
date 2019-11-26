 
/*  
########################################
########################################
                NODO
########################################            
########################################
*/


function Nodo(num, val, fil, col, bool) {

    var id = num || 0;
    var valor = val || 1;
    var fila = fil || 0;
    var columna = col || 0;
    var visitado = bool || false;
  
  
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
  
    this.setColumna = function (col) {
      columna = col
    };
    this.getColumna = function () {
      return columna
    };
  
    this.setVisitado = function (vis) {
      visitado = vis
    };
    this.getVisitado = function () {
      return visitado
    };
  
  }
  
  
  function Nodos() {
  
    var id = 0;
    var nodos = [];
  
  
    this.getNodoById = function (num) {
      return nodos[num]
    };
  
    this.getNodo = function () {
      if (id == nodos.length) id = 0;
      return nodos[id++]
    };

    this.getNodos = function () {
      return nodos;
    };

    
  
    this.createNodos = function (cant) {
  
      for (let id = 0; id < cant; id++) {
  
        nodos[id] = new Nodo(id);
  
      }
  
    }

    this.reset = function (){

      for (const nodo of nodos) nodo.setValor=1;

    }
  
  };
  
  /*  
  ########################################
  ########################################
              FIN NODO
  ########################################            
  ########################################
  */
  
  
  