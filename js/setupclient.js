var setupclient = {
	setup: function(invertedTitle, content) {
		var display = invertedTitle ? this.writeInvertedTitle(content.title, content.image) : this.writeRegularTitle(content.title, content.image);
		$(content.outside).hover(function() {
			$(content.inside).fadeOut("fast", function() {
				$(content.inside).html("<h1 class='entry_desc'>" + content.description + "</h1>");
				setTimeout( function() { 
					$(content.inside).fadeIn("fast");
				}, 200);
			});
		}, function() {
			$(content.inside).fadeOut("fast", function() {
				$(content.inside).html(display);
				$(content.inside).fadeIn("fast");
			});
		});
	},
	writeInvertedTitle: function(title, image) {
		return "<h4 class='entry_title'>" + title + "</h4><img src='" + image + "' class='info_picture' />";
	},
	writeRegularTitle: function(title, image) {
		return "<img src='" + image + "' class='info_picture' /><h4 class='entry_title'>" + title + "</h4>";
	}
}