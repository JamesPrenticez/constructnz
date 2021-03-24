exports.up = (knex, Promise) => {
    return knex.schema.createTable('contacts', (table) => {
    table.increments('id').primary()
    table.date('dateCreated')
    table.string('category')
    table.string('name')
    table.string('company')
    table.string('email')
    table.string('phone')
    table.string('address')
    table.string('picture')
    })  
};

exports.down = (knex, Promise) => {
    return knex.schema.dropTable('contacts')
};