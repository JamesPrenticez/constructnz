import React from 'react'
import { connect } from 'react-redux'
import { BrowserRouter as Router, Switch, Route, Link, useParams, Redirect } from "react-router-dom";
import { FaEdit, FaSearchPlus, FaRegFileAlt, FaArrowLeft, FaTrashAlt } from 'react-icons/fa'

import JobEdit from './JobEdit'
import JobDetails from './JobDetails'
import JobSelections from './JobSelections'
import SalesDoc from './SalesDoc'

import { removeJob } from '../actions'
import { deleteJob } from '../api'


class JobView extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            currentForm: '',
            toJobList: false,
        }
        this.redirectToJobList = this.redirectToJobList.bind(this)
        this.deleteJob = this.deleteJob.bind(this)
    }

    redirectToJobList = () => {
        this.setState(() => ({
            toJobList: true
        }))
    }

    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    deleteJob = () => {
        const { jobs } = this.props
        let id = this.props.match.params.id

        let array = jobs
        let idYourLookingFor = id
        let i = array.findIndex(obj => obj.id == idYourLookingFor)

        if (confirm("Are you sure you want to delete " + `${jobs[i].jobName}` + "?")) {
            deleteJob(id)
                .then(() => {
                    this.redirectToJobList()
                    this.props.dispatch(removeJob(id))
                })
        }
    }

    render() {
        const editStyle = { color: 'orange', height: '35px', width: '35px', marginLeft: '7px', cursor: 'pointer' }
        const selectionsStyle = { color: 'green', height: '35px', width: '35px', marginLeft: '7px', cursor: 'pointer' }
        const salesDocStyle = { color: 'blue', height: '35px', width: '35px', marginLeft: '7px', cursor: 'pointer' }
        const backStyle = { color: 'DarkMagenta', height: '35px', width: '35px', marginLeft: '7px', cursor: 'pointer', position: 'absolute' }
        const deleteStyle = { color: 'red', height: '35px', width: '35px', marginLeft: '7px', cursor: 'pointer' }

        if (this.state.toJobList === true) {
            return <Redirect to={'/job_list/'} />
        }

        return (
            <>
                        {this.props.currentForm === 'view' ? 
                            <>
                            <div className="jobContainer">
                                <fieldset><legend><h1>View Job</h1></legend> 
                                    <FaArrowLeft style={backStyle} onClick={this.redirectToJobList} />
                                    <div className='jobDetailButtons'>
                                    <FaEdit style={editStyle} onClick={this.props.edit} role='button' />
                                    <FaSearchPlus style={selectionsStyle} onClick={this.props.selections} role='button' />
                                    <FaRegFileAlt style={salesDocStyle} onClick={this.props.salesDoc} role='button' />
                                    <FaTrashAlt style={deleteStyle} onClick={this.deleteJob} role='button' />
                                    </div>
                                    <JobDetails {...this.props} onEscape={this.redirectToJobList} />
                                </fieldset>
                            </div>
                            </>
                        : ''}

                        {this.props.currentForm === 'edit' ? 
                            <>
                            <div className="jobContainer">
                                <fieldset><legend><h1>Edit Job</h1></legend>
                                    <FaArrowLeft style={backStyle} onClick={this.props.view} />
                                    <JobEdit {...this.props.match.params}{...this.props} onEscape={this.props.view} />
                                </fieldset>
                            </div>
                            </> 
                        : ''}

                        {this.props.currentForm == 'selections' ?
                            <>
                                <JobSelections {...this.props.match.params}{...this.props} onEscape={this.props.view} />
                            </>
                        : ''}

                        {this.props.currentForm == 'salesDoc' ?
                            <>
                                <SalesDoc {...this.props.match.params}{...this.props} onEscape={this.props.view} />
                            </>
                        : ''}
            </>
        )
    }
}

function mapStateToProps(state){
    return {
      currentForm: state.currentForm
    }
}

function mapDispatchToProps(dispatch) {
  return {
    view: () => dispatch({type: 'CHANGE_FORM', form: 'view'}),
    edit: () => dispatch({type: 'CHANGE_FORM', form: 'edit'}),
    selections: () => dispatch({type: 'CHANGE_FORM', form: 'selections'}),
    salesDoc: () => dispatch({type: 'CHANGE_FORM', form: 'salesDoc'}),

  }
}

export default connect(mapStateToProps, mapDispatchToProps)(JobView)