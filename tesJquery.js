let colorTest = $("h1"); 
//
console.log(colorTest); // .red

$("button").first().css("backgroundColor", "red") 

$("button").odd().css("backgroundColor", "red") 

// $("div").has("button").css("backgroundColor", "red"); 

$("h1:contains(Apple)").css("backgroundColor", "red"); 
// $("div.ElementsBtn").empty(); 

// $("h1[id=one]").text("I am a changed H1!");  
// $("h1[id=three]").html("<h3> Test </h3>");  
$("h1[id=one]").hide();   
$("h1[id=one]").show();   

// $('#two').after('after');
// $('#two').before('before');

$('#two').append(' JaffBazos');


$("div button:visible").css( "background-color", "#fe3" ); 

$("#two").addClass("blue red")
$("#two").removeClass("blue")
$("#two").toggleClass("blue")

//add atrbuite 
$(".ElementsBtn").attr("name", "listButton")

// removeClass
$("#three").removeClass("green")

//add css
$("form").css({
    backgroundColor: "green",
    color: "white",

})

// is this a number 

let numeric = $.isNumeric("hi")
numeric = $.isNumeric("7")


console.log(numeric); // true

//traversing Element parent 

$("input").parent().css({
    width : "50%",
    height:"200px",

})

//Traversing child Element 

$("form").children().css({
    fontFamily: "Verdana",

})

// Traverse the sibling elements 

$("#one").siblings().css({
   border: "1px solid black"
});

$("h2").siblings().css({
    color: "black",
    fontWeight: "bold"
});
// show and hide element

//parents attrbute 

$("div").parents().css({
    border: "4px solid yellow"
})

//find attrbute method 
$(".nubersList").find("#three").addClass("green");
// $("div").find( "h1" ).show();

//remove attribute from selected element

$("button").attr('disabled', '');
$("button").removeAttr("disabled");

//next 
$("#one").next().css( { backgroundColor : "green"} );

//next All 
$("#two").nextAll().css( { border : "13px sold red"} );

