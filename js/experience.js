var experienceClient = {
	content: [{
		outside:"#exp_insper",
		inside:"#exp_insper_content",
		description:"Assisting in developing an innovative engineering curriculum and campus culture at new engineering school<br /><br /> // São Paulo, Brazil // <br /><br /> August 2015-Present",
		image:"./images/insper.png",
		title:"// Insper //<br/>Student Partner"
	}, {
		outside:"#exp_ctct",
		inside:"#exp_ctct_content",
		description:"Developed internal tools for greater company communication while learning about unit testing and test driven development<br /><br /> // Waltham, MA // <br /><br /> June 2015-August 2015",
		image:"./images/ctct.gif",
		title:"// Constant Contact //<br />Quality Engineering Intern"
	}, {
		outside:"#exp_uic",
		inside:"#exp_uic_content",
		description:"Explored passion for physics by participating in cosmic ray research and learning about tiny elementary particles called muons<br /><br /> // Chicago, IL // <br /><br /> July 2013",
		image:"./images/uic.png",
		title:"// UIC //<br />Quarknet Summer Research"
	}],
	initialize: function() {
		setupclient.setup(true, this.content[0]);
		setupclient.setup(true, this.content[1]);
		setupclient.setup(true, this.content[2]);
	}
};