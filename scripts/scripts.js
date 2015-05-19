$(document).ready(function()	{
	$(".click-zone").click(function()	{
		$(".app").toggleClass("inactive");
	});
	
	var largeHeight = $("header").outerHeight() + $("main").outerHeight() +$("footer").outerHeight();
	var smallHeight = $("header").outerHeight();
	
	$(".content").height(smallHeight);
	
	$(".settings").click(function()	{
		if ($(".content").hasClass("large"))	{
			$(".content").height(smallHeight).removeClass("large");
		} else	{
			$(".content").height(largeHeight).addClass("large");
		}
	});
	
	$(".close").click(function()	{
		if ($(".content").hasClass("large"))	{
			$(".content").height(smallHeight).removeClass("large");
		} else	{
			$(".content").height(largeHeight).addClass("large");
		}
	});
	
	
	
	var state = 1;
	var stateMax = 0;
	
	$("header").each(function()	{
		stateMax++;
	});
	
	$("body").dblclick(function()	{
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
		$(".highlight").attr("color", color);
	});
});