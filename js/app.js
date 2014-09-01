$(document).ready(function () {
	
	$(".additem").on("click", function () {
		var item_title = $(".iteminput").val();
	   $( "li" ).each(function( index ) {
		   console.log("index");
		   console.log(index);
		   console.log(this);
		   return false;
		 (index + ".empty_list_item " + ".grocery_item" + $( this ).text(item_title));
       });
        
	});
	
		//$(".clearlist").on("click", function() {
		//$( "li" ).each(function( index ) {
		//	(index + ".
	
});        
    


	//.each
	//.text
	//.find
	//.nearest
	//.hasClass
	//.toggleClass
	