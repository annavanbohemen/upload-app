import React, {PureComponent} from 'react'
import {connect} from 'react-redux'
import Card, {CardContent} from 'material-ui/Card'
import Typography from 'material-ui/Typography'
import {getUserDetails} from '../../actions/contracts'
import {getUsers, getUser} from '../../actions/users'
import {getAllContracts} from '../../actions/contracts'
import Paper from 'material-ui/Paper'
import Button from 'material-ui/Button'
import '../../css/index.css'
import '../../css/contracts.css'

class ContractByUserId extends PureComponent {

    componentWillMount() {
        this.props.getUserDetails(this.props.match.params.id)
        this.props.getUser(this.props.match.params.id)
    }

    renderContractDetails = (eachcontract, classes) => {
      
      return (

        <div key={eachcontract.id} className='contractDetails'>
        
        <Card key={eachcontract.id} className='contract-card'>
            <div className='card-content'>
                <h2>{eachcontract.contractType}</h2>
                <p className="card-paragraph">Provider: {eachcontract.contractProvider}</p>
                <p className="card-paragraph">Status: {eachcontract.uploadStatus}</p>
            </div>
            <div className='card-action'>
                <Button className="card-button"
                    style={{backgroundColor: "#F57F17",
                    color:"white"}}
                    variant="raised"
                    className="see-contract"
                    type="submit"
                    onClick={() => window.location=`${eachcontract.userId}/${eachcontract.contractImage}`}>
                    View Contract
                </Button>
            </div>
        </Card>    
      </div>
      )
    }

    render() {

        const {user} = this.props
        if (!this.props.user) return null
        const userId = this
        .props
        .contractsById
        .map((eachcontract) => {
            return eachcontract.userId
        })

      return (
      <div>
        <div className="overview">
        
            {this.props.contractsById.length === 0 && <p>No contracts stored at the moment</p>
            }
            {this.props.contractsById.length > 0 && 
            <div>
                <h1 style={{textAlign:"center"}}>Mijn contracten</h1>
                <p
                    style={{
                    width: '100%',
                    display: 'block',
                    marginTop: '75px',
                    textAlign:"center"
                    }}
                >User : <br/> {user.email}
                </p> 
                <Paper className='contract-paper'>
                    
                    {this
                        .props
                        .contractsById
                        .map(eachcontract => this.renderContractDetails(eachcontract))}
                </Paper>
            </div>}
        </div>       
      </div>
      )
    }
}

const mapStateToProps = (state) => ({
    contractsById: state.contractsById,
    user : state.user
})

export default connect(mapStateToProps, 
    {getUserDetails, getUsers, getUser})(ContractByUserId)