import {SET_JOBS, REMOVE_JOB, UPDATE_JOB} from '../actions'

export default function(state = [], action) {
    switch (action.type) {
        case SET_JOBS:
            return action.jobs

        case REMOVE_JOB:
            return state.filter(job => job.id != action.id)

        case UPDATE_JOB:
            return state.map(job => job.id == action.id ? 
            {...job,
            jobName: action.jobName,
            clientName: action.clientName,
            siteAddress: action.siteAddress,
            collection: action.collection,
            lotNumber: action.lotNumber,
            jobNumber: action.jobNumber,
            houseType: action.houseType,
            gfa: action.gfa,
            salesPerson: action.salesPerson,
            imageCover: action.imageCover,
            deposit: action.deposit,
            retailPrice: action.retailPrice,
            contractPrice: action.contractPrice,
            } : job)
            
        default:
            return state
    }
}