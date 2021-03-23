exports.seed = (knex, Promise) => {
  return knex('users').insert([
    {
      id: 0,
    }
  ])
}