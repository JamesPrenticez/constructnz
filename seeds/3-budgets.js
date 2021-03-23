exports.seed = (knex, Promise) => {
  return knex('budgets').insert([
    {
      id: 0,
    }
  ])
}