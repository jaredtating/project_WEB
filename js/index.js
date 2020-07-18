setup = function() {
	$("#menu").click(function(el) {
		el.preventDefault()
		var ham = $(this)
		var slide = $("div.hide-mobile")
		slide.toggle("slow")
		if (ham.attr('src') == "src/hamburger.svg")
			ham.attr('src', "src/exit.svg")
		else
			ham.attr('src', 'src/hamburger.svg')
			
	});
}

$(document).ready(setup)



// menu.addEventListener('clik', function(e) {
// 	nav.classList.toggle('hide-mobile');
// 	if (menu.getAttribute("src") == "src/hamburger.svg")
// 		menu.attr("src", "src/exit.svg");
// 	else
// 		menu.attr("src", "src/hamburger.svg");
// 	e.preventDefault();
// 	console.log("finished!")
// });
