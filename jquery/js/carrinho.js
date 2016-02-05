var umaPropaganda = function() {
  var propagandas = [
    "O que acha de comprar uma motocicleta?",
    "O que acha de comprar uma lancha?",
    "O que acha de comprar uma bicicleta?",
    "O que acha de comprar uma carro?"
  ];
  var posicao = Math.floor(propagandas.length * Math.random());
  var texto = propagandas[posicao];
  var tr = $("<tr>").addClass("propaganda").append($("<td>"));
  tr.find("td").attr("colspan", 6).text(texto);
  return tr;
};
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
  $(".carrinho").each(function() {
    var carrinho = $(this);
    carrinho.find("tr:nth-child(3n), tr:last").each(function() {
      umaPropaganda().insertAfter($(this));
    });
  });
  atualizaDados();
};
$(aposInicializacao);
