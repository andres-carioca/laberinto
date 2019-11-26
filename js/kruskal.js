/*
########################################
########################################
              KRUSKAL
########################################
########################################
*/


function Kruskal(aristas) {

  aristas.sortAristas();

  var edges = aristas.getAristas();

  var unionFind = new QuickUnionFind(edges.length);

  for (const edge of edges) {

    var nodoA = edge.getNodoA().getId();
    var nodoB = edge.getNodoB().getId();

    if (unionFind.find(nodoA, nodoB)) edge.setValor(0);
    else unionFind.union(nodoA, nodoB);

  }

  return edges;

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

  this.find = function (p, q) {
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