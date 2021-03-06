import React from 'react'
import { connect } from 'react-redux'
import { Router, Route, Switch } from 'react-router-dom'

import { createBrowserHistory } from 'history'
import { wrapHistory } from 'oaf-react-router'

import { CloudinaryContext } from 'cloudinary-react'
import { isAuthenticated } from 'authenticare/client'
import { Container } from 'semantic-ui-react'

import Navbar from './Navbar'
import Register from './Register'
import Login from './Login'
import Homepage from './Homepage'
import Footer from './Footer'
import Profile from './Profile'
import JobList from './JobList'
import JobAdd from './JobAdd'
import JobView from './JobView'
import JobEdit from './JobEdit'
import Error404 from './Error404'

import { getUserDetails } from '../actions/users'

class App extends React.Component {
  componentDidMount () {
    if (isAuthenticated()) {
      this.props.dispatch(getUserDetails())
    }
  }

  render() {
    const history = createBrowserHistory()
    wrapHistory(history)
     return (
      <CloudinaryContext cloudName='constructnz'>
        <Router history={history}>
          <Route path='/' component={Navbar}/>
          <Container id='main-container' style={{ margin: '7em 2em 2em 0' }}>
            <div id='wrapper'>
              <Switch>
                <Route exact path="/" component={Homepage} />
                <Route exact path='/register' component={Register} />
                <Route exact path='/login' component={Login} />
                <Route exact path='/profile/:id' component={Profile} />
                <Route exact path="/job_add" component={JobAdd} />
                <Route exact path="/job_list" component={JobList} />
                <Route exact path="/job_view/:id" render={(matchProps) => <JobView {...matchProps}{...this.props} />} />
                <Route exact path="/job_edit/:jobName" render={(matchProps) => <JobEdit {...matchProps}{...this.props} />} />
                <Route exact path='*' component={Error404} />
              </Switch>
            </div>
          </Container>
          <Route path='/' component={Footer} />
        </Router>
      </CloudinaryContext>
    )
  }
}

export default connect()(App)
