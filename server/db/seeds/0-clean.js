exports.seed = function (knex, Promise) {
  const empty = table =>
    () => knex(table).del()

  return empty('jobs')()
  .then(empty('contacts'))
  .then(empty('budgets'))
  .then(empty('users'))
}