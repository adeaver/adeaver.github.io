var contactClient = {
	initialize: function() {
		// $("#contact_email").hover(function() {
		// 	$("#contact_email_content").fadeOut("fast", function() {
		// 		$("#contact_email_content").html("<h1 class='entry_desc'>Email is usually the best way to contact me. I'm pretty quick to respond to email, so please email me if you're trying to get a hold of me quickly.<br /><br />// Click Here to Email Me //</h1>");
		// 		setTimeout(function() {
		// 			$("#contact_email_content").fadeIn("fast");
		// 		}, 200);
		// 	})
		// }, function() {
		// 	$("#contact_email_content").fadeOut("fast", function() {
		// 		$("#contact_email_content").html("<h1 class=\"entry_title\">Email</h1><img src=\"./images/email.png\" class=\"info_picture\" />");
		// 		$("#contact_email_content").fadeIn("fast");
		// 	});
		// });

		$("#contact_email").click(function() { 
			window.location.href = "mailto:andrew.deaver@students.olin.edu";
		});

		// $("#contact_linkedin").hover(function() {
		// 	$("#contact_linkedin_content").fadeOut("fast", function() {
		// 		$("#contact_linkedin_content").html("<h1 class='entry_desc'>LinkedIn is another great way to get in touch with me; however, I am not as responsive on LinkedIn, so it's best for establishing relationships as opposed to reaching out.<br /><br />// Click Here to Access my LinkedIn //</h1>");
		// 		setTimeout(function() {
		// 			$("#contact_linkedin_content").fadeIn("fast");
		// 		}, 200);
		// 	});
		// }, function() {
		// 	$("#contact_linkedin_content").fadeOut("fast", function() {
		// 		$("#contact_linkedin_content").html("<h1 class=\"entry_title\">LinkedIn</h1><img src=\"./images/linkedin.png\" class=\"info_picture\" />");
		// 		setTimeout(function() {
		// 			$("#contact_linkedin_content").fadeIn("fast");
		// 		}, 200);
		// 	});
		// });

		$("#contact_linkedin").click(function() {
			window.open("https://www.linkedin.com/pub/andrew-deaver/a8/5bb/239", "_blank");
		});
	}
}