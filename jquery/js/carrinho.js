var atualizaDados = function() {
  var itens = $(".item-total:visible");
  var total = 0;
  var size = itens.length;
  for (var i = 0, h; i < size; i++) {
    var item = $(itens[i]);
    var valor = parseFloat(item.text());
    total += valor;
  }
  $(".valor-total").text(total);
  $(".qtde-itens").text(size);
};
var removeitem = function(event) {
  event.preventDefault();
  var self = $(this);
  self.closest("tr").hide();
  atualizaDados();
};
var undo = function() {
  var carrinho = $(this).closest(".carrinho");
  carrinho.find('tr:visible').removeClass("recuperado");
  carrinho.find('tr:hidden').addClass("recuperado").show();
  atualizaDados();
};
var aposInicializacao = function() {
  $('.remove-item').click(removeitem);
  $('.undo').click(undo);
  atualizaDados();
};
$(aposInicializacao);
