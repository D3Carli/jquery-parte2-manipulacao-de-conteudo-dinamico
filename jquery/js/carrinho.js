var atualizaDados = function() {
  var itens = $(".item-total");
  var total = 0;
  var size = itens.length;
  for (var i = 0, h; i < size; i++) {
    var item = $(itens[i]);
    var valor = parseFloat(item.text());
    total += valor;
  }
  $("#valor-total").text(total);
  $("#qtde-itens").text(size);
};
var removeitem = function(event) {
  event.preventDefault();
  var self = $(this);
  self.closest("tr").hide();
  atualizaDados();
};
var undo = function() {
  $('tr:visible').removeClass("recuperado");
  $('tr:hidden').addClass("recuperado").show();
};
var aposInicializacao = function() {
  $('.remove-item').click(removeitem);
  $('#undo').click(undo);
  atualizaDados();
};
$(aposInicializacao);
