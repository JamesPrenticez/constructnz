import React from 'react'
import { connect } from 'react-redux'
import { BrowserRouter as Router, Switch, Route, Link, NavLink, useParams, Redirect } from "react-router-dom";

import Homepage from './Homepage'

import JobList from './JobList'
import JobAdd from './JobAdd'
import JobView from './JobView'
import JobEdit from './JobEdit'
import SalesDoc from './SalesDoc'

class App extends React.Component {
    constructor(props) {
      super(props)
      this.state = {
          toHome: false,
      }
  }

  render() {
     return (
      <>
        <Router>
          <main>
            <nav>
              <NavLink className='navLogo'to="/home">
                <img src={'../img/logo/logo.png'}></img>
              </NavLink>
              <div className='floatRight'>
                <NavLink className='navLink' to="/home">Homepage</NavLink>
                <NavLink className='navLink' to="/job_list">Jobs</NavLink>
              </div>
            </nav>

            <Route exact path="/" component={Homepage} />
            <Route path="/home" component={Homepage} />
            <Route path="/job_add" component={JobAdd} />
            <Route path="/job_list" component={JobList} />
            <Route path="/job_view/:id" render={(matchProps) => <JobView {...matchProps}{...this.props} />} />
            <Route path="/job_edit/:jobName" render={(matchProps) => <JobEdit {...matchProps}{...this.props} />} />
            <Route path="/sales_doc/:jobName" render={(matchProps) => <SalesDoc {...matchProps}{...this.props} />} />
          </main>
          
        </Router>
      </>
    )
  }
}

function mapStateToProps(state) {
  const { jobs } = state
  return {
    jobs: state.jobs
  }
}

export default connect(mapStateToProps)(App)