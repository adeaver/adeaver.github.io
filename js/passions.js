var passionsClient = {
	content:[{
		outside:"#passion_music",
		inside:"#passion_music_content",
		description:"Whether it's listening, playing, or even writing, I love to spend time with music.<br /><br />I started playing guitar when I was 10 years old, drawing influence from the artists I loved to listen to like The Killers, the Red Hot Chili Peppers, and Oasis.",
		image:"./images/guitar.jpg",
		title:"Music"
	}, {
		outside:"#passion_travel",
		inside:"#passion_travel_content",
		description:"From Brazil to Spain to Italy, my travels have taken me all around the world.<br /><br />I love learning about and experiencing cultures from all over the world. Immersing myself in other cultures is always my favorite way of trying new foods, learning new languages (or practicing my Spanish!), or hear new music!",
		image:"./images/spain.jpg",
		title:"Travel and<br />Foreign Languages",
	}, {
		outside:"#passion_dance",
		inside:"#passion_dance_content",
		description:"I've loved social dancing since high school (we even had to take it to graduate!), but there is no form of social dance I love more than blues dancing, which I started after coming to Olin.<br /><br />Lacking a real rhythm, blues dancing gives you an opportunity to get creative and really feel the music, and look great doing it!",
		image:"./images/blues.png",
		title:"Blues Dancing"
	} ],
	initialize: function() {
		setupclient.setup(false, this.content[0]);
		setupclient.setup(false, this.content[1]);
		setupclient.setup(false, this.content[2]);
	}
};