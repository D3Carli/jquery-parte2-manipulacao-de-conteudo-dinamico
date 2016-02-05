var atualizaDados = function() {
  var carrinhos = $(".carrinho");
  carrinhos.each(function() {
    var carrinho = $(this);
    var itens = carrinho.find(".item-total:visible");
    var total = 0;
    var size = itens.length;
    for (var i = 0, h; i < size; i++) {
      var item = $(itens[i]);
      var valor = parseFloat(item.text());
      total += valor;
    }
    carrinho.find(".valor-total").text(total);
    carrinho.find(".qtde-itens").text(size);
  });
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
