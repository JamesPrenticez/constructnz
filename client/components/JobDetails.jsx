import React from 'react'
import { connect } from 'react-redux'
import {formatCurrency} from './Utilities/utilities'

import moment from 'moment'

class JobDetails extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        const { id } = this.props.match.params
        const { jobs } = this.props

        let array = jobs
        let idYourLookingFor = id
        let i = array.findIndex(obj => obj.id == idYourLookingFor)

        return (
            <>
                <div className="jobDetails">
                    <img className='jobDetailsImg' style={{ backgroundImage: `url(${jobs[i].imageCover})` }}></img>

                    <div className="grid">

                        <h4>Job Name</h4>
                        <p>{jobs[i].jobName}</p>

                        <h4>Date Created</h4>
                        <p>{moment.unix(jobs[i].dateCreated / 1000).format('MMM YY')}</p>

                        <h4>Client Name</h4>
                        <p>{jobs[i].clientName}</p>

                        <h4>Site Address</h4>
                        <p>{jobs[i].siteAddress}</p>

                        <h4>Collection</h4>
                        <p>{jobs[i].collection}</p>

                        <h4>Lot Number</h4>
                        <p>{jobs[i].lotNumber}</p>

                        <h4>Job Number</h4>
                        <p>{jobs[i].jobNumber}</p>

                        <h4>House Type</h4>
                        <p>{jobs[i].houseType}</p>

                        <h4>GFA</h4>
                        <p>{jobs[i].gfa}</p>

                        <h4>Budget</h4>
                        <p>{jobs[i].budget}</p>

                        <h4>Deposit</h4>
                        <p>{formatCurrency(jobs[i].deposit)}</p>

                        <h4>Retail Price</h4>
                        <p>{formatCurrency(jobs[i].retailPrice)}</p>

                        <h4>Contract Price</h4>
                        <p>{formatCurrency(jobs[i].contractPrice)}</p>

                        <h4>Sales Person</h4>
                        <p>{jobs[i].salesPerson}</p>
                    </div>
                </div>
            </>
        )
    }
}
export default connect()(JobDetails)