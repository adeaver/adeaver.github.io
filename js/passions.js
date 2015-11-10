var passionsClient = {
	initialize: function() {
		$("#passion_music").hover(function() {
			$("#passion_music_content").fadeOut("fast", function() {
				$("#passion_music_content").html("<h1 id='passion_music_desc' class='entry_desc'>Whether it's listening, playing, or even writing, I love to spend time with music.<br /><br />I started playing guitar when I was 10 years old, drawing influence from the artists I loved to listen to like The Killers, the Red Hot Chili Peppers, and Oasis.</h1>");
				setTimeout( function() { 
					$("#passion_music_content").fadeIn("fast");
				}, 200);
			});
		}, function() {
			$("#passion_music_content").fadeOut("fast", function() {
				$("#passion_music_content").html("<img src=\"./images/guitar.jpg\" class=\"info_picture\" /><h4 class=\"entry_title\">Music</h4>");
				$("#passion_music_content").fadeIn("fast");
			});
		});

		$("#passion_travel").hover(function() {
			$("#passion_travel_content").fadeOut("fast", function() {
				$("#passion_travel_content").html("<h1 class='entry_desc'>From Brazil to Spain to Italy, my travels have taken me all around the world.<br /><br />I love learning about and experiencing cultures from all over the world. Immersing myself in other cultures is always my favorite way of trying new foods, learning new languages (or practicing my Spanish!), or hear new music!</h1>");
				setTimeout(function() {
					$("#passion_travel_content").fadeIn("fast");
				}, 200);
			});
		}, function() {
			$("#passion_travel_content").fadeOut("fast", function() {
				$("#passion_travel_content").html("<img src=\"./images/spain.jpg\" class=\"info_picture\" /><h4 class=\"entry_title\">Travel and<br />Foreign Languages</h4>");
				$("#passion_travel_content").fadeIn("fast");
			});
		});

		$("#passion_dance").hover(function() {
			$("#passion_dance_content").fadeOut("fast", function() {
				$("#passion_dance_content").html("<h1 class='entry_desc'>I've loved social dancing since high school (we even had to take it to graduate!), but there is no form of social dance I love more than blues dancing, which I started after coming to Olin.<br /><br />Lacking a real rhythm, blues dancing gives you an opportunity to get creative and really feel the music, and look great doing it!</h1>");
				setTimeout(function() {
					$("#passion_dance_content").fadeIn("fast");
				}, 200);
			});
		}, function() {
			$("#passion_dance_content").fadeOut("fast", function() {
				$("#passion_dance_content").html("<img src=\"./images/blues.png\" class=\"info_picture\" /><h4 class=\"entry_title\">Blues Dancing</h4>");
				$("#passion_dance_content").fadeIn("fast");
			});
		});
	}
};