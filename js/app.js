$(document).ready(function () {
	
	$(".additem").on("click", function (event) {
		var item_title = $(".iteminput").val();
	   $( "li.list_item" ).each(function( index ) {
		   if($(this).hasClass("empty")){
		   $(this).find(".grocery_item").text($.trim(item_title));
		   $(this).toggleClass("empty");
		   
		 
		   return false;

		   }
		   
       });
        
	});
    
    $(".iteminput").keypress(function ( event ) {
       if (event.which ==13 ) {
           var item_title = $(".iteminput").val();
	   $( "li.list_item" ).each(function( index ) {
		   if($(this).hasClass("empty")){
		   $(this).find(".grocery_item").text($.trim(item_title));
		   $(this).toggleClass("empty");
		   
		 
		   return false;

		   }
		   
       });
           
           
       }
        
        
        
    });
   
   // $('.additem').on("click" , function(event){
     //       if($('iteminput').val().length > 0) {
       //         $(this).val('');
         //   }
    //}
    
});
	
	//$(".notepad").on("click", function (event) {
	
	//	var t = event.target;
		// If it is a grocery item add class 'aquired' to parent list item
		// Don't forget to add css for grocery items and remove button
		// consider toggling aquired in case of missclick
		// Else If it is the remove button that was clicked
		
		// 1 Locate sibling grocery item and set text to empty string
		// 2 toggle class aquired to parent list item
		// 3 toggle class empty to parent list item
	//	if(){
		
		
	//	} else if(){
		
		
		
		
	//	} else {
		
	//	console.log("You Are Doing It Wrong")
		
	//	}
	
	
	
	
	
	
	// });
	
		//$(".clearlist").on("click", function() {
		//$( "li" ).each(function( index ) {
		//	(index + ".
	
    


	//.each
	//.text
	//.find
	//.nearest
	//.hasClass
	//.toggleClass
	


		   //console.log("index");
		   //console.log(index);
		   //console.log(this);
		   //console.log ($(this).find(".grocery_item"));
		   //console.log($(this).hasClass("empty"));