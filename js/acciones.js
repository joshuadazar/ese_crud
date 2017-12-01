$(function(){

	
    $('select').material_select();
    $('.datepicker').pickadate({
    selectMonths: true, // Creates a dropdown to control month
    selectYears: 15 // Creates a dropdown of 15 years to control year
  });
	
    $(".button-collapse").sideNav();
    $("#scale-demo").click(function(){
    $("#scale-demo").toggleClass("scale-out");
    })

    $("a:nth-child(2)").click(function(){
    	$(this).toggleClass("animated zoomOut");
    	setTimeout(cerrar, 500);
    	function cerrar()
    	{
    		$("a:nth-child(2)").css("display","none");
    	}
    })

    $(".elemento").on("click",function(){

    	var $toastContent = $('<span ><span class="btn-floating left"><i class="material-icons right white-text">done</i></span>Datos correctos</span>');

  		Materialize.toast($toastContent, 5000);
    })

    $(".salir").on("click",function(){

    	var $toastContent = $('<span ><span class="btn-floating left"><i class="material-icons right white-text">done</i></span>Saliendo del sistema</span>');

  		Materialize.toast($toastContent, 5000);
    })

    $(".btn-flat picker__today").append("hoy");
        

        
})