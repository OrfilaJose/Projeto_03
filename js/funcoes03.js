$(function(){
	$('.formulario form').submit(function(e){
		e.preventDefault();
		var nome = $('input[name=nome]').val();
		var email = $('input[name=email]').val();

		if(verificarNome(nome) == false){
			aplicarCampoInvalido($('input[name=nome]'));
		}else{
			console.log("Campo Nome OK.");
		}
		if(verificarEmail(email) == false){
			aplicarCampoInvalido($('input[name=email]'));
		}else{
			console.log("Campo Email OK.");
		}

	});

	function verificarNome(nome){
		if(nome == ' '){
			return false;
		}
		var amount = nome.split(' ').length-1;
		var totalNome = nome.split(' ');
		if(amount >= 2){
			for(var i=0; i<=amount; i++){
				if(totalNome[i].match(/^[A-ZÁÉÍÓÚÀÈÌÒÙÃÕÇ]{1}[a-záéíóúàèìòùãõç]{1,}$/)){

				}else{
					return false;
				}
			}
		}else{
			return false;
		}
	}
	function verificarEmail(email){
		if(email == ' '){
			return false;
		}
		if(email.match(/(^[a-z0-9-_.]{1,})+@+([a-z-_.]{1,})$/) == null){
			return false;
		}
	}

	function aplicarCampoInvalido(el){
		el.css("border","2px solid red");
		el.data("invalido","true");
		el.css("color","red");
		el.val("Campo Inválido.");
	}
	function resetarCampo(reset){
		reset.css("border","2px solid gray");
		reset.css("color","black");
		reset.val("");
	}

	$('form input[type=text]').focus(function(){
		var conteudo = $(this).val();
		if(conteudo == "Campo Inválido."){
			resetarCampo($(this));
		}
	});

	/*Menu mobile*/
	$('nav.mobile-menu').click(function(){
		$('nav.mobile-menu').find("ul").slideToggle();
	})
});