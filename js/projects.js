//<![CDATA[
	var projectClient = {
		initialize: function() {
			$("#proj_hopper").hover(function() {
				$("#proj_hopper_content").fadeOut("fast", function() {
					$("#proj_hopper_content").html("<h1 class=\"entry_desc\">A simple project that served as an introduction to the design process and Olin's do-learn mentality</h1>");
					setTimeout(function() {
						$("#proj_hopper_content").fadeIn("fast");
					}, 100);
				});
			}, function() {
				$("#proj_hopper_content").fadeOut("fast", function() {
					$("#proj_hopper_content").html("<img src=\"./images/hopper1.jpg\" class=\"info_picture\" /><h4 class=\"entry_title\">Hopper Project</h4>");
					$("#proj_hopper_content").fadeIn("fast");
				});
			});

			$("#proj_transporter").hover(function() {
				$("#proj_transporter_content").fadeOut("fast", function() {
					$("#proj_transporter_content").html("<h1 class=\"entry_desc\">A bio-inspired interactive game for fourth graders made for Olin's Design Nature class that used the design process</h1>");
					setTimeout(function() {
						$("#proj_transporter_content").fadeIn("fast");
					}, 100);
				});
			}, function() {
				$("#proj_transporter_content").fadeOut("fast", function() {
					$("#proj_transporter_content").html("<img src=\"./images/hedgehogwork.jpg\" class=\"info_picture\" /><h4 class=\"entry_title\">Transporter Project</h4>");
					$("#proj_transporter_content").fadeIn("fast");
				});
			});

			$("#proj_gloves").hover(function() {
				$("#proj_gloves_content").fadeOut("fast", function() {
					$("#proj_gloves_content").html("<h1 class=\"entry_desc\">Gloves that allowed users to tweet by tapping their fingers together. It won 3rd place at HackHolyoke 2014</h1>");
					setTimeout(function() {
						$("#proj_gloves_content").fadeIn("fast");
					}, 100);
				});
			}, function() {
				$("#proj_gloves_content").fadeOut("fast", function() {
					$("#proj_gloves_content").html("<img src=\"./images/hackholyoke.jpeg\" class=\"info_picture\" /><h4 class=\"entry_title\">Hashtag Gloves</h4>");
					$("#proj_gloves_content").fadeIn("fast");
				});
			});

			$("#proj_tracky").hover(function() {
				$("#proj_tracky_content").fadeOut("fast", function() {
					$("#proj_tracky_content").html("<h1 class=\"entry_desc\">Interactive twist on the popular game flappy bird that used OpenCV to turn the user into the controller</h1>");
					setTimeout(function() {
						$("#proj_tracky_content").fadeIn("fast");
					}, 100);
				});
			}, function() {
				$("#proj_tracky_content").fadeOut("fast", function() {
					$("#proj_tracky_content").html("<img src=\"./images/flappybird.png\" class=\"info_picture\" /><h4 class=\"entry_title\">Tracky Bird</h4>");
					$("#proj_tracky_content").fadeIn("fast");
				});
			});

			$("#proj_chordly").hover(function() {
				$("#proj_chordly_content").fadeOut("fast", function() {
					$("#proj_chordly_content").html("<h1 class=\"entry_desc\">Personal project that helped musicians write songs by helping to match guitar chords.</h1>");
					setTimeout(function() {
						$("#proj_chordly_content").fadeIn("fast");
					}, 100);
				});
			}, function() {
				$("#proj_chordly_content").fadeOut("fast", function() {
					$("#proj_chordly_content").html("<img src=\"./images/chordly3.png\" class=\"info_picture\" /><h4 class=\"entry_title\">Chordly</h4>");
					$("#proj_chordly_content").fadeIn("fast");
				});
			});

			$("#proj_kyzr").hover(function() {
				$("#proj_kyzr_content").fadeOut("fast", function() {
					$("#proj_kyzr_content").html("<h1 class=\"entry_desc\">Virtual torch passing app for Android that allowed users to pass \"torches\" using NFC and track their progress online</h1>");
					setTimeout(function() {
						$("#proj_kyzr_content").fadeIn("fast");
					}, 100);
				});
			}, function() {
				$("#proj_kyzr_content").fadeOut("fast", function() {
					$("#proj_kyzr_content").html("<img src=\"./images/TheKyzrProject.png\" class=\"info_picture\" /><h4 class=\"entry_title\">Kyzr</h4>");
					$("#proj_kyzr_content").fadeIn("fast");
				});
			});
		}
	};
//]]>