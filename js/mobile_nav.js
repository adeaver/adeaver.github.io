$(document).ready(function() {
	$("#navbar_prompt").click(function() {
		if($("#navbar_content").css("top") != "0px") {
			$("#navbar_content").animate({"top":"0px"}, function() {
				$("#main_title").text("Hide Navigation Bar");
				$("#navbar_content").css("overflow-y", "scroll");
			});
		} else {
			$("#navbar_content").animate({"top":"90%"}, function() {
				$("#main_title").text("Navigate");
				$("#navbar_content").css("overflow-y", "hidden");
			});
		}
	});
});