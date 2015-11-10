var contactClient = {
	initialize: function() {

		$("#contact_email").click(function() { 
			window.location.href = "mailto:andrew.deaver@students.olin.edu";
		});

		$("#contact_linkedin").click(function() {
			window.open("https://www.linkedin.com/pub/andrew-deaver/a8/5bb/239", "_blank");
		});
	}
}