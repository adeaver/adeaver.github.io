$(document).ready(function() {
	$("#navbar_prompt").click(function() {
		$("#navbar_content").slideToggle("slow", function() {
			if($("#navbar_content").css("display") != "none") {
				$("#main_title").text("Hide navigation bar");
			} else {
				$("#main_title").text("Navigate");
			}
		});
	})
});