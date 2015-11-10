var projectClient = {
	content: [{
		outside:"#proj_hopper",
		inside:"#proj_hopper_content",
		description:"A simple project that served as an introduction to the design process and Olin's do-learn mentality",
		image:"./images/hopper1.jpg",
		title:"Hopper Project"
	}, {
		outside:"#proj_transporter",
		inside:"#proj_transporter_content",
		description:"A bio-inspired interactive game for fourth graders made for Olin's Design Nature class that used the design process",
		image:"./images/hedgehogwork.jpg",
		title:"Transporter Project"
	}, {
		outside:"#proj_gloves",
		inside:"#proj_gloves_content",
		description:"Gloves that allowed users to tweet by tapping their fingers together. It won 3rd place at HackHolyoke 2014",
		image:"./images/hackholyoke.jpeg",
		title:"Hashtag Gloves"
	}, {
		outside:"#proj_tracky",
		inside:"#proj_tracky_content",
		description:"Interactive twist on the popular game flappy bird that used OpenCV to turn the user into the controller",
		image:"./images/flappybird.png",
		title:"Tracky Bird"
	}, {
		outside:"#proj_chordly",
		inside:"#proj_chordly_content",
		description:"Personal project that helped musicians write songs by helping to match guitar chords.",
		image:"./images/chordly3.png",
		title:"Chordly"
	}, {
		outside:"#proj_kyzr",
		inside:"#proj_kyzr_content",
		description:"Virtual torch passing app for Android that allowed users to pass \"torches\" using NFC and track their progress online",
		image:"./images/TheKyzrProject.png",
		title:"Kyzr"
	}],
	initialize: function() {
		setupclient.setup(false, this.content[0]);
		setupclient.setup(false, this.content[1]);
		setupclient.setup(false, this.content[2]);
		setupclient.setup(false, this.content[3]);
		setupclient.setup(false, this.content[4]);
		setupclient.setup(false, this.content[5]);
	}
};