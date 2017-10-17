	
		var atualizaDados = function() {
			// Somando os valores
			var itens = $(".item-total:visible");
			var total = 0;

			for (var i = 0; i < itens.length; i++){
				var item = $(itens[i]);
				var valor = parseFloat(item.text());
				total = total + valor;
			}

			$("#valor-total").text(total);
			$("#quantidades-de-itens").text(itens.length);
			
			
		};
		
		// removendo itens e reescrevendo nova quantidade de itens
		
		var removeItem = function(event){
			
			event.preventDefault();
			var self = $(this);
			self.closest("tr").hide();
			
			
			
			atualizaDados();
		};
		
		// botão undo
		var undo = function(){
			$("tr:visible").removeClass("recuperado");
			var trs = $("tr:hidden");
			trs.addClass("recuperado").show();
		};
		
		var aposInicializado = function(){
		
			atualizaDados();

			$("#undo").click(undo);

			$(".remove-item").click(removeItem);

		};
		
		$(aposInicializado);