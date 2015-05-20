$(document).ready(function()	{
	$(".click-zone").click(function()	{
		$(".app").toggleClass("inactive");
	});
	
	largeHeight = $("header").outerHeight() + $("main").outerHeight() +$("footer").outerHeight();
	smallHeight = $("header").outerHeight();
	
	$(".content").height(smallHeight);
	
	$(".settings").click(function()	{
		if ($(".content").hasClass("large"))	{
			$(".content").height(smallHeight).removeClass("large");
		} else	{
			$(".content").height(largeHeight).addClass("large");
		}
	});
	
	$(".close").click(function()	{
		$(".content").height(smallHeight).removeClass("large");
	});
	
	state = 1;
	stateMax = 0;
	
	$("header").each(function()	{
		stateMax++;
	});
	
	
	$(".button").click(function()	{
		$(".browser .blocking").addClass("inactive");
		$(".browser").addClass("active");
	});

});

	
// Initiate fullscreen
function toggleFullScreen() {
	if (
		 document.fullscreenEnabled || 
		 document.webkitFullscreenEnabled || 
		 document.mozFullScreenEnabled ||
		 document.msFullscreenEnabled
	)	{
	
		var i = document.getElementById("wrapper");
	 
		if (i.requestFullscreen) {
			 i.requestFullscreen();
		} else if (i.webkitRequestFullscreen) {
			 i.webkitRequestFullscreen(Element.ALLOW_KEYBOARD_INPUT);
		} else if (i.mozRequestFullScreen) {
			 i.mozRequestFullScreen();
		} else if (i.msRequestFullscreen) {
			 i.msRequestFullscreen();
		}
	}
}

document.addEventListener("keydown", function(e) {
  if (e.keyCode == 13) {
	toggleFullScreen();
  } else if (e.keyCode == 39)	{
		$("header#_" + state).addClass("inactive");
		
		if (state == stateMax)	{
			state = 1;
		} else	{
			state++;
		}
		
		$("header#_" + state).removeClass("inactive");
		
		smallHeight = $("header#_" + state).outerHeight();
		largeHeight = $("header#_" + state).outerHeight() + $("main").outerHeight() +$("footer").outerHeight();
		
		$(".content").height(smallHeight).removeClass("large");
		
		var color = $("header#_" + state + " .color").attr("color");
		$(".highlight.small").attr("color", color);
  } else if (e.keyCode == 37)	{
	  	$(".browser .blocking").removeClass("inactive");
		$(".browser").removeClass("active");
  } else if (e.keyCode == 38)	{
		$(".browser").toggleClass("inactive");
  }
}, false);