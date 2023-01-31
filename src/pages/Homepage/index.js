import React, { Component } from 'react'

export class Homepage extends Component {
	constructor(props) {
		super(props)
		this.state = { count: 1 }
		this.handleClick = this.handleClick.bind(this)
		console.log('constructor')
	}

	componentDidMount() {
		console.log('did mount')
	}

	shouldComponentUpdate() {
		console.log('will update')
		return true
	}

	handleClick() {
		this.setState({ count: this.state.count + 1 })
	}

	// handleClick = () => {
	// 	this.setState({ count: this.state.count + 1 })
	// }

	componentDidUpdate() {
		console.log('did update')
	}

	render() {
		console.log('render')
		return (
			<div>
				<center>
					<div>{this.state.count}</div>
					<button onClick={this.handleClick}>test</button>
				</center>
			</div>
		)
	}
}
