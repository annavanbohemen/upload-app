import React, { PureComponent } from 'react'
import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom'
import LoginPage from './components/login/LoginPage'
import SignupPage from './components/signup/SignupPage'
import LogoutPage from './components/logout/LogoutPage'
import Privacy from './components/privacy/Privacy'
import UploadPage from './components/upload/uploadPage'

//Styling
import TopBar from './components/layout/TopBar'

class App extends PureComponent {
  render() {
    return (
      <Router>
        <div>
          <nav>
            <TopBar />
          </nav>
          <main style={{marginTop:75}}>
            <Route exact path="/login" component={LoginPage} />
            <Route exact path="/logout" component={LogoutPage} />
            <Route exact path="/Privacy" component={Privacy} />
            <Route exact path="/signup" component={SignupPage} />
            <Route exact path="/upload" component={UploadPage} />
            <Route exact path="/" render={ () => <Redirect to="/login" /> } />
            
          </main>
        </div>
      </Router>
    )
  }
}
export default App
