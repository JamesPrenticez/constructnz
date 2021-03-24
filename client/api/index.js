import request from 'superagent'

// ------------------------------------------------------------ JOBS ------------------------------------------------------------
//GET Jobs
export function getJobs() {
    return request
    .get('/api/v1/jobs/get_jobs')
    .then(res => res.body.jobs)
}

//ADD Job
export function addJob(jobName, clientName){
    return request.post('/api/v1/jobs/add_job')
        .send({jobName, clientName})
        .then(res => res.body.id)
}

//Delete Job
export function deleteJob(id){
    return request.delete('/api/v1/jobs/' + id)
    .then(res => res.body)
}

//Edit Job
export function editJob(id, jobName, clientName, siteAddress, collection, lotNumber, jobNumber, houseType, gfa, salesPerson, imageCover, deposit, retailPrice, contractPrice) {
    console.log( jobName, clientName)
    return request.patch('/api/v1/jobs/' + id)
        .send({jobName, clientName, siteAddress, collection, lotNumber, jobNumber, houseType, gfa, salesPerson, imageCover, deposit, retailPrice, contractPrice})
        .then(res => res.body)
}