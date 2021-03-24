const connection = require('./connection')

module.exports = {
    getJobs,
    createJob,
    deleteJob,
    updateJob
}

// ------------------------------------------------------------ JOBS ------------------------------------------------------------
// GET Jobs
function getJobs(db = connection){
    return db('jobs')
}

// ADD Job
function createJob({jobName, clientName, siteAddress, collection, lotNumber, jobNumber, houseType, gfa, salesPerson, imageCover}, db = database){
    return db('jobs').insert({jobName, clientName, siteAddress, collection, lotNumber, jobNumber, houseType, gfa, salesPerson, imageCover})
}

// DELETE Job
function deleteJob(id, db = connection){
    if(!id) return Promise.reject('id must be specified')
    return db('jobs').where({id}).delete()
}

//UPDATE Task
function updateJob(id, jobName, clientName, siteAddress, collection, lotNumber, jobNumber, houseType, gfa, salesPerson, imageCover, deposit, retailPrice, contractPrice, db = connection) {
    if (!id) return Promise.reject('id must be specified')
    return db('jobs').where({id}).update({jobName, clientName, siteAddress, collection, lotNumber, jobNumber, houseType, gfa, salesPerson, imageCover, deposit, retailPrice, contractPrice})
}
