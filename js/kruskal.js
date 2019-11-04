/*
########################################
########################################
              KRUSKAL
########################################
########################################
*/




  function Kruskal (aristas) {

    aristas.sortAristas();
    
    var aristas = aristas.getAristas();
    var unionFind=new QuickUnionFind(aristas.length);
    
    
    for (let index = 0; index < aristas.length; index++) {
    
    
      var nodoA = aristas[index].getNodoA().getId();
      var nodoB = aristas[index].getNodoB().getId();
    
    
      if(unionFind.find(nodoA,nodoB)) aristas[index].setValor(1);
      else unionFind.union(nodoA,nodoB);
          
    
    }
    
    return aristas;

  };


/*
########################################
########################################
            FIN  KRUSKAL
########################################
########################################
*/



/*
########################################
########################################
          QUICK UNION-FIND
########################################          
########################################
*/

function QuickUnionFind(num) {
  
  
    var id = [];
    for (var i = 0; i < num; i++) id[i] = i;
  
  
    function root(i) {
      while (i != id[i]) i = id[i];
      return i;
    }
    
    this.find = function (p,q) {
      return root(p) == root(q);
    }
    
    this.union = function (p, q) {
      var i = root(p);
      var j = root(q);
      id[i] = j;
    }
    
  }
  
  
  
  
  /*
  ########################################
  ########################################
          FIN QUICK UNION-FIND
  ########################################
  ########################################
  */
  
  