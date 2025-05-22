$(document).ready(function(){
	$(window).scroll(function(){ // função para pegar o movimento do scroll (barra de rolagem)
	  var top = $(window).scrollTop(); // aqui vc pega a posição da página
		 
	  if(top > 480){ // verifica a posição da página
		 
		  $(".seta").show(); // aqui vc aplica o fade no menu
	  }else{
		  $(".seta").hide();
	  }
	}); 
});