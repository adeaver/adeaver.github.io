var SectionContainer = React.createClass({
	render: function() {
		return (
			<div className='SectionContainer'>
				<Section />
				<Section />
				<Section />
				<Section />
			</div>
		);
	}
});

var Section = React.createClass({
	render: function() {
		return (
			<div className='Section'>
				Section
			</div>
		);
	}
});

window.SectionContainer = SectionContainer;
