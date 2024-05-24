// Adding CSS using jquery    
//$("h1").css("color", "red");

//Adding a class using jQuery 
// (to add multiple classes just space between 2 classes)
//$("h1").addClass("big-title margin-50");


//Remove a class
//$("h1").removeClass("margin-50");


//to update the text on your html use:
//$("h1").text("JQuery is nice!");

//To add html using jQuery (do not use .text to add html it'll interpret it as text!)
//$("button").html("<em>Hi, I'm button!</em>")

//Manipulating attributes
//$("a").attr("href", "https://www.google.com");

//Add Event Listners
// $("button").click(function(){
//     $("h1").css("color", "black");
// });

//KeyPress
// $("input").keypress(function(event){
//     $("h1").text(event.key);  //will update h1's text with the pressed key
// });

// //shorter way to write events
// $("h1").on("mouseover", function(){
//     $("h1").css("color", "blue");
// });

//Animation using jQuery

$("button").click(function(){
        $("h1").slideUp().slideDown().animate({
            opacity: 0.5
        });
    });