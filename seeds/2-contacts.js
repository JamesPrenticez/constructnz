exports.seed = (knex, Promise) => {
  return knex('contacts').insert([
    {
      id: 0,
    }
  ])
}