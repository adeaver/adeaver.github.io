var experienceClient = {
	initialize: function() {
		$("#exp_insper").hover(function() {
			$("#exp_insper_content").fadeOut("fast", function() {
				$("#exp_insper_content").html("<h1 class='entry_desc'>Assisting in developing an innovative engineering curriculum and campus culture at new engineering school<br /><br /> // São Paulo, Brazil // <br /><br /> August 2015-Present</h1>");
				$("#exp_insper_content").fadeIn("fast");
			});
		}, function() {
			$("#exp_insper_content").fadeOut("fast", function() {
				$("#exp_insper_content").html("<h1 class=\"entry_title\">// Insper //<br/>Student Partner</h1><img src=\"./images/insper.png\" class=\"info_picture\" />");
				$("#exp_insper_content").fadeIn("fast");
			});
		});

		$("#exp_ctct").hover(function() {
			$("#exp_ctct_content").fadeOut("fast", function() {
				$("#exp_ctct_content").html("<h1 class='entry_desc'>Developed internal tools for greater company communication while learning about unit testing and test driven development<br /><br /> // Waltham, MA // <br /><br /> June 2015-August 2015");
				$("#exp_ctct_content").fadeIn("fast");
			});
		}, function() {
			$("#exp_ctct_content").fadeOut("fast", function() {
				$("#exp_ctct_content").html("<h1 class=\"entry_title\">// Constant Contact //<br />Quality Engineering Intern </h1><img src=\"./images/ctct.gif\" class=\"info_picture\" />");
				$("#exp_ctct_content").fadeIn("fast");
			})
		});

		$("#exp_uic").hover(function() {
			$("#exp_uic_content").html("<h1 class='entry_desc'>Explored passion for physics by participating in cosmic ray research and learning about tiny elementary particles called muons<br /><br /> // Chicago, IL // <br /><br /> July 2013</h1>");
			$("#exp_uic_content").fadeIn("fast");
		}, function() {
			$("#exp_uic_content").html("<h1 class=\"entry_title\">// UIC //<br />Quarknet Summer Research</h1><img src=\"./images/uic.png\" class=\"info_picture\" />");
			$("#exp_uic_content").fadeIn("fast");
		});
	}
};