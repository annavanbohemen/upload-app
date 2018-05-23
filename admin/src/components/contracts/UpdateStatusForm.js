import React, {PureComponent} from 'react'
import TextField from 'material-ui/TextField';
import Button from 'material-ui/Button';
import {submitStatus, getContractImage} from '../../actions/contracts'
import {connect} from 'react-redux'

class UpdateStatusForm extends PureComponent {
    state={}

    constructor() {
        super()

        this.handleSubmit = this
            .handleSubmit
            .bind(this)

         this.handleChange = this
             .handleChange
             .bind(this)

        this.state = {
            id:" ",
            uploadStatus: " ",
        };

    }


    handleSubmit(e) {
        e.preventDefault()
        console.log(this.props.details.id)
        this.props.submitStatus(this.state)
        
    }

    handleChange(event,id) {

        console.log(this.props.details.id)
        this.setState({id:id})
        this.setState({uploadStatus: event.target.value})

    }

    // handleChange = e => {
    //     const {name, value} = e.target
    //     this.setState({
    //      [name]:value
    //     }) 
        
    // } 


	render() {
        const {classes} = this.props
		return (

			<form onSubmit={this.handleSubmit}>

                 <label>
                        <input
                            type={'radio'}
                            name='uploadStatus'
                            value={'new'}
                            onChange={(event) => this.handleChange(event, this.props.details.id)}/>new
                    </label>
                    <label>
                        <input
                            type={'radio'}
                            name='uploadStatus'   
                            value={'processed'}
                            onChange={(event) => this.handleChange(event, this.props.details.id)}/>processed
                    </label>
                    <label>
                        <input
                            type={'radio'}
                            name='uploadStatus'
                            value={'not usable'}
                            onChange={(event) => this.handleChange(event, this.props.details.id)}/>not usable
                    </label>
                <div>
                   
                    <Button variant="raised" type="submit"> Submit </Button>
                </div>
			</form>

		)
	}
}


const mapStateToProps = (state) => ({
    details: state.contractImage
})
export default connect (mapStateToProps, {submitStatus, getContractImage})(UpdateStatusForm)