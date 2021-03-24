exports.up = (knex, Promise) => {
    return knex.schema.createTable('jobs', (table) => {
    table.increments('id').primary()
    table.date('dateCreated')
    table.string('jobName')
    table.string('clientName')
    table.string('siteAddress')
    table.string('collection')
    table.string('lotNumber')
    table.string('jobNumber')
    table.string('houseType')
    table.string('gfa')
    table.string('salesPerson')
    table.string('imageCover')
    table.string('budget')
    table.integer('deposit')
    table.integer('retailPrice')
    table.integer('contractPrice')
    })  
};

exports.down = (knex, Promise) => {
    return knex.schema.dropTable('jobs')
};