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
			
	})

	$('a[href*="#"]').not('[href="#"]').not('[href="#0"]').click(function(event) {
		if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') 
			&& location.hostname == this.hostname) {
			var target = $(this.hash)
		    target = target.length ? target : $('[name=' + this.hash.slice(1) + ']')
    		if (target.length) {
        		event.preventDefault()
        		$('html, body').animate({
        			scrollTop: target.offset().top
        			}, 1000, function() {
          				var $target = $(target)
          				$target.focus()
          				if ($target.is(":focus")) {
            				return false
          				} else {
            			$target.attr('tabindex','-1')
            			$target.focus()
          			}
        		})
      		}
    	}
    })
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
