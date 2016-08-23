var App = React.createClass({
	render: function() {
		return (
			<div className='IndexContent'>
				<h1 className='title'>Andrew Deaver</h1>
				<hr />
				<SectionContainer />
			</div>
		)
	}
});

ReactDOM.render(
	<App />,
	document.getElementById('content')
);
