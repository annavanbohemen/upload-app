import React, {PureComponent} from 'react'
import {connect} from 'react-redux'
import {Redirect} from 'react-router-dom'
import LoginForm from './LoginForm'
import {login} from '../../actions/admins'

//Styling
import '../../css/login.css'

class LoginPage extends PureComponent {

	handleSubmit = (data) => {

		this.props.login(data.email, data.password)

	}

	render() {

		if (this.props.currentAdmin) return (
			<Redirect to="/users" />
		)

		return (

			<div className="generalPage">
				<h1>Inloggen</h1>

				<LoginForm onSubmit={this.handleSubmit} />

		   { this.props.error && <span style={{color:'red'}}>{this.props.error}</span> }
		
			</div>
		)
	}
}

const mapStateToProps = function (state) {

	return {
		
		currentAdmin: state.currentAdmin,
    	error: state.login.error
	}
}

export default connect(mapStateToProps, {login})(LoginPage)
