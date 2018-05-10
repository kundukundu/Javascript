/** Cuando quieras editar tu información en línea, mediante 'text inputs'
* te puedes encontrar que el method .draw() hace un scroll automatico hacia arriba. 
Este "workaround" permite solucionarlo */

var pageScrollPos = 0;
var table = $('#miDataTable').DataTable( {
"preDrawCallback": function (settings) {
   posicionScroll = $('div.dataTables_scrollBody').scrollTop();
},
"drawCallback": function( settings ) {
  if(typeof posicionScroll != 'undefined'){ /* Por si acaso */
     $(".dataTables_scrollBody").scrollTop(posicionScroll);
   }
},
});
