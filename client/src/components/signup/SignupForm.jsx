import React, {PureComponent} from 'react'
import Checkbox from 'material-ui/Checkbox';
import {Link} from 'react-router-dom'

export default class SignupForm extends PureComponent {
	state = {}

	handleSubmit = (e) => {
		e.preventDefault()
		this.props.onSubmit(this.state)
	}

	handleChange = (event) => {
    const {name, value} = event.target

    this.setState({
	  [name]: value,
	  privacy: event.target.checked
    })
  }

	render() {
		return (
			<form onSubmit={this.handleSubmit}>
				<div>
					<label htmlFor="email">Email</label>
					<input type="email" name="email" id="email" value={
						this.state.email || ''
					} onChange={ this.handleChange } />
				</div>

				<div>
					<label htmlFor="password">Password</label>
					<input type="password" name="password" id="password" value={
						this.state.password || ''
					} onChange={ this.handleChange } />
				</div>

				<div>
					<label htmlFor="confirmPassword">Confirm password</label>
					<input type="password" name="confirmPassword" id="confirmPassword" value={
						this.state.confirmPassword || ''
					} onChange={ this.handleChange } />
				</div>

				<div>
					<Checkbox
						value={`${this.state.privacy}` || ''}
						onChange={this.handleChange}
						name="privacy"
						label="Akkoord met Privacy Beleid van Roos"
					/> 
				</div>

				<div>
					<Link to={'/Privacy'}>
							Privacy Beleid van Roos
					</Link>
				</div>

				{
					this.state.password &&
					this.state.confirmPassword &&
					this.state.password !== this.state.confirmPassword &&
					<p style={{color:'red'}}>The passwords do not match!</p>
				}

				<button type="submit">Sign up</button>
			</form>
		)
	}
}
