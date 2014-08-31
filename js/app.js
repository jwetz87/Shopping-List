$(document).ready(function () {
	
	$(".additem").on("click", function () {
		var item_title = $(".iteminput").val();
	   $( "li" ).each(function( index ) {
		 (index + ".empty ".closest + $( this ).text(item_title));
       });
        
	});
});        
    


	//.each
	//.text
	//.find
	//.nearest
	//.hasClass
	//.toggleClass
	