var React = require('react');
var _ = require('lodash');
var cx = require('classnames');

var Nav = require('naturalcrit/nav/nav.jsx');
var Navbar = require('../../navbar/navbar.jsx');
var RedditShare = require('../../navbar/redditShare.navitem.jsx');



var SplitPane = require('naturalcrit/splitPane/splitPane.jsx');
var Editor = require('../../editor/editor.jsx');
var BrewRenderer = require('../../brewRenderer/brewRenderer.jsx');






var HomePage = React.createClass({

	getDefaultProps: function() {
		return {
			welcomeText : ""
		};
	},

	getInitialState: function() {
		return {
			text: this.props.welcomeText
		};
	},


	handleSplitMove : function(){
		this.refs.editor.update();
	},

	handleTextChange : function(text){
		this.setState({
			text : text
		});

		//localStorage.setItem(KEY, text);
	},

	renderNavbar : function(){
		return <Navbar>
			<Nav.section>
				<Nav.item>Bad Ass Brew</Nav.item>
			</Nav.section>

			<Nav.section>
				<RedditShare brew={{text : this.state.text}}/>


				<Nav.item
					newTab={true}
					href='https://github.com/stolksdorf/naturalcrit/issues'
					color='red'
					icon='fa-bug'>
					report issue
				</Nav.item>
				<Nav.item
					newTab={true}
					href='/homebrew/changelog'
					color='purple'
					icon='fa-file-text-o'>
					Changelog
				</Nav.item>
				<Nav.item
					href='/homebrew/new'
					color='green'
					icon='fa-external-link'>
					New Brew
				</Nav.item>
			</Nav.section>
		</Navbar>
	},

	render : function(){
		return <div className='homePage page'>
			{this.renderNavbar()}

			<div className='content'>
				<SplitPane onDragFinish={this.handleSplitMove} ref='pane'>
					<Editor value={this.state.text} onChange={this.handleTextChange} ref='editor'/>
					<BrewRenderer brewText={this.state.text} />
				</SplitPane>


			</div>

			{/*
			<a href='/homebrew/new' className='floatingNewButton'>
				Create your own <i className='fa fa-magic' />
			</a>
			*/}
		</div>
	}
});

module.exports = HomePage;

/*
<SplitPane>


	<PageContainer text={this.state.text} />
	<Editor text={this.state.text} onChange={this.handleTextChange} />
</SplitPane>

*/



/* Test code
<div className='content'>
	<SplitPane>
		<div className='woo'>
			one
		</div>
		<div className='temp'>
			yo
			<div className='tooBig' />
		</div>
	</SplitPane>
</div>
*/