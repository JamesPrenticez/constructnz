import React from 'react'
import { connect } from 'react-redux'
import { BrowserRouter as Router, Switch, Route, Link, useParams, Redirect } from "react-router-dom";
import { FaPlusCircle } from 'react-icons/fa'

import { setJobs } from '../actions'
import { getJobs } from '../api'

import JobListItem from './JobListItem'


class JobsList extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            showControls : false,
            toJobAdd: false
        }
        this.redirectToJobAdd = this.redirectToJobAdd.bind(this)
        this.showControls = this.showControls.bind(this)
        this.hideControls = this.hideControls.bind(this)
    }
    componentDidMount() {
        getJobs()
            .then(jobs => {
                this.props.dispatch(setJobs(jobs))
            })
            .catch(err => {
                console.log(err)
            })
    }

    showControls = () => {
        if (this.state.editing) return
        this.setState({showControls: true})
    }

    hideControls = () => {
        this.setState({showControls: false})
    }

    redirectToJobAdd = () => {
        this.setState(() => ({
            toJobAdd: true
        }))
    }

    search() {
        var input, filter, table, tr, td, i, txtValue;
        input = document.getElementById("myInput");
        filter = input.value.toUpperCase();
        table = document.getElementById("jobsTable");
        tr = table.getElementsByTagName("tr");
        for (i = 0; i < tr.length; i++) {
          td = tr[i].getElementsByTagName("td")[1]; //Change index to select column
          if (td) {
            txtValue = td.textContent || td.innerText;
            if (txtValue.toUpperCase().indexOf(filter) > -1) {
              tr[i].style.display = "";
            } else {
              tr[i].style.display = "none";
            }
          }       
        }
      }

    render() {
        const {showControls} = this.state
        const addStyle = { color: 'green', height: '35px', width: '35px', cursor: 'pointer', float: 'right'}

        if (this.state.toJobAdd === true) {
            return <Redirect to={'/job_add/'} />
        }

        return (
            <>
                <div className='jobContainer'>
                    <fieldset>
                        <legend><h1>Job List</h1></legend>

                        <div style={{display: 'block', height: '35px', width: '100%', textAlign: 'right'}}>
                            {showControls ? 'Add new job' : ''}
                        </div>

                        <div style={{display: 'block', height: '25px', width: '100%'}}>
                            <input type="text" id="myInput" placeholder="Search by job name..." onChange={this.search} autoComplete='off'/>
                            <FaPlusCircle style={addStyle}
                                          onClick={this.redirectToJobAdd}
                                          role='button'
                                          onMouseEnter={this.showControls}
                                          onMouseLeave={this.hideControls}
                                          />
                        </div>

                        <table id="jobsTable">
                            <thead>
                                <tr>
                                    <th>Id</th>
                                    <th>Name</th>
                                    <th>Number</th>
                                    <th>Collection</th>
                                    <th>Cost</th>
                                    <th>GFA</th>
                                    <th>Date</th>
                                </tr>
                            </thead>
                            <tbody>

                                {this.props.jobs.map(job => <JobListItem key={job.id} job={job} />)}

                            </tbody>
                        </table>
                    </fieldset>
                </div>
            </>
        )
    }
}

function mapStateToProps(state) {
    return {
        jobs: state.jobs
    }
}

export default connect(mapStateToProps)(JobsList)