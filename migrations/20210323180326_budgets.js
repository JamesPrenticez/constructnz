exports.up = (knex, Promise) => {
    return knex.schema.createTable('budgets', (table) => {
    table.increments('id').primary()
    })  
};

exports.down = (knex, Promise) => {
    return knex.schema.dropTable('budgets')
};