$(window).bind("load", function() {
    typeWriter();
})

$("#openbtn").click(function() {
	$("#myNav").css("height","100%");
})

$("#closebtn").click(function() {
	$("#myNav").css("height","0%");
})

$("#projects").click(function() {
	$("body").css("background-color","#74b9ff");
	clear();
	$(".projects").css("display","block");
})

$("#about").click(function() {
	$("body").css("background-color","#ED4337");
	clear();
	$("h1").css("display","block");
	$(".content").css("display","block");
	$(".contacts").css("display","block");
})

$("#blog").click(function() {
	$("body").css("background-color","#00cec9");
	clear();
	$(".blog").css("display","block");
})

function clear() {
	$("#myNav").css("height","0%");
	$(".content").css("display","none");
	$("h1").css("display","none");
	$(".projects").css("display","none");
	$(".blog").css("display","none");
	$(".contacts").css("display","none");
}
var i = 0;
var txt = "Hello world, I'm Yushan!"; /* The text */
var speed = 80; /* The speed/duration of the effect in milliseconds */
function typeWriter() {
  	if (i < txt.length) {
    document.getElementById("intro").innerHTML += txt.charAt(i);
    i++;
    setTimeout(typeWriter, speed);
  }
}