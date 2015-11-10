var primary = "#3498DB"
var secondary = "#ECF0F1"

$(document).ready(function() {
	// Assign navbar hovers
	$("#nav_home").hover(function() {
		$("#nav_home").css({
			"background-color":primary,
			"color":secondary
		});
		$("#nav_home").text("Click to Learn More")
		$("#desc_nav_home").slideDown("slow");
	}, function() {
		$("#nav_home").css({
			"background-color":secondary,
			"color":primary
		});
		$("#desc_nav_home").slideUp("slow", function() {
			$("#nav_home").text("Home");
		});
	});

	$("#nav_projects").hover(function() {
		$("#nav_projects").css({
			"background-color":primary,
			"color":secondary
		});
		$("#desc_nav_projects").slideDown("slow");
		$("#nav_projects").text("Click to Learn More");
	}, function() {
		$("#nav_projects").css({
			"background-color":secondary,
			"color":primary
		});
		$("#desc_nav_projects").slideUp("slow", function() {
			$("#nav_projects").text("Projects");
		});
	});

	$("#nav_experience").hover(function() {
		$("#nav_experience").css({
			"background-color":primary,
			"color":secondary
		});
		$("#desc_nav_experience").slideDown("slow");
		$("#nav_experience").text("Click to Learn More");
	}, function() {
		$("#nav_experience").css({
			"background-color":secondary,
			"color":primary
		});
		$("#desc_nav_experience").slideUp("slow", function() {
			$("#nav_experience").text("Experience");
		});
	});

	$("#nav_passions").hover(function() {
		$("#nav_passions").css({
			"background-color":primary,
			"color":secondary
		});
		$("#desc_nav_passions").slideDown("slow");
		$("#nav_passions").text("Click to Learn More");
	}, function() {
		$("#nav_passions").css({
			"background-color":secondary,
			"color":primary
		});
		$("#desc_nav_passions").slideUp("slow", function() {
			$("#nav_passions").text("Outside of Engineering");
		});
	});

	$("#nav_contact").hover(function() {
		$("#nav_contact").css({
			"background-color":primary,
			"color":secondary
		});
		$("#desc_nav_contact").slideDown("slow");
		$("#nav_contact").text("Click to Learn More");
	}, function() {
		$("#nav_contact").css({
			"background-color":secondary,
			"color":primary
		});
		$("#desc_nav_contact").slideUp("slow", function() {
			$("#nav_contact").text("Contact Me");
		});
	});

	// Assign navbar links

	$("#nav_home").click(function() {
		$("#content").fadeOut("fast", function() {
			$("#content").load("./srcs/header.html", function() {
				$("#content").fadeIn("fast", function() {
					$("#resume_display").click(function() {
						window.open("./Deaver_Resume.pdf", "_blank");
					});
				});
			})
		})
	});

	$("#nav_projects").click(function() {
		$("#content").fadeOut("fast", function() {
			$("#content").load("./srcs/projects.html", function() {
				$("#content").fadeIn("fast");
				$.getScript('./js/projects.js', function() {
					projectClient.initialize();
				});
			})
		})
	});

	$("#nav_experience").click(function() {
		$("#content").fadeOut("fast", function() {
			$("#content").load("./srcs/experience.html", function() {
				$("#content").fadeIn("fast");
				$.getScript("./js/experience.js", function() {
					experienceClient.initialize();
				});
			})
		})
	});

	$("#nav_passions").click(function() {
		$("#content").fadeOut("fast", function() {
			$("#content").load("./srcs/passions.html", function() {
				$("#content").fadeIn("fast");
				$.getScript('./js/passions.js', function() {
					passionsClient.initialize();
				});
			});
		});
	});

	$("#nav_contact").click(function() {
		$("#content").fadeOut("fast", function() {
			$("#content").load("./srcs/contactme.html", function() {
				$("#content").fadeIn("fast");
				$.getScript('./js/contact.js', function() {
					contactClient.initialize();
				});
			});
		});
	});
});