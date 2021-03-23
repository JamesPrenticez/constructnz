const environment = process.env.NODE_ENV || 'development'
const config = require('../knexfile')[environment]
const database = require('knex')(config)

module.exports = {
    getJobs,
    createJob,
    deleteJob,
    updateJob
}

// ------------------------------------------------------------ JOBS ------------------------------------------------------------
// GET Jobs
function getJobs(db = database){
    return db('jobs')
}

// ADD Job
function createJob({jobName, clientName, siteAddress, collection, lotNumber, jobNumber, gfa, salesPerson, image_cover}, db = database){
    return db('jobs').insert({jobName, clientName, siteAddress, collection, lotNumber, jobNumber, gfa, salesPerson, image_cover})
}

// DELETE Job
function deleteJob(id, db = database){
    if(!id) return Promise.reject('id must be specified')
    return db('jobs').where({id}).delete()
}

//UPDATE Task
function updateJob(id, jobName, clientName, siteAddress, collection, lotNumber, jobNumber, houseType, gfa, salesPerson, imageCover, deposit, retailPrice, contractPrice, db = database) {
    if (!id) return Promise.reject('id must be specified')
    return db('jobs').where({id}).update({jobName, clientName, siteAddress, collection, lotNumber, jobNumber, houseType, gfa, salesPerson, imageCover, deposit, retailPrice, contractPrice})
}
