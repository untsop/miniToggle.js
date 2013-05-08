## miniToggle.js

A jQuery plugin to create toggle button

Try it now: [http://unstop.github.io/miniToggle.js/](http://lou.github.com/miniToggle.js/ "miniToggle.js")

### Example

Include:

	<script src="js/minitoggle.js"></script>
	<link rel="stylesheet" href="minitoggle.css">

Html:

	<div class="toggle"></div>

JS:

	$(document).ready(function() {
	    $('.toggle').minitoggle();
        $('.toggle').on("toggle", function(e){
            if (e.isActive)
                $(".result").html("Oh, you turn me on.")
            else
                $(".result").html("No, you turn me off.")
        });
	});

## License

miniToggle.js is licensed under MIT http://www.opensource.org/licenses/MIT