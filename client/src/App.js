import React, { PureComponent } from 'react'
import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom'
import LoginPage from './components/login/LoginPage'
import SignupPage from './components/signup/SignupPage'
import LogoutPage from './components/logout/LogoutPage'
import AllUsers from './components/contracts/AllUsers'
import Privacy from './components/privacy/Privacy'
import UploadPage from './components/upload/uploadPage'
import ContractByUserId from './components/contracts/ContractByUserId'

//Styling
// import TopBar from './components/layout/TopBar'
import Top from './components/layout/Top'


class App extends PureComponent {
  render() {
    return (
      <Router>
        <div>
          <nav>
            <Top/>
          </nav>
          <main>
            <Route exact path="/login" component={LoginPage} />
            <Route exact path="/logout" component={LogoutPage} />
            <Route exact path="/signup" component={SignupPage} />
            <Route exact path="/Privacy" component={Privacy} />
            <Route exact path="/upload" component={UploadPage} />
            <Route exact path="/users" component={AllUsers}/>
            <Route exact path="/users/:id" component={ContractByUserId}/>
            <Route exact path="/" render={ () => <Redirect to="/login" /> } />
          </main>
        </div>
      </Router>
    )
  }
}
export default App
