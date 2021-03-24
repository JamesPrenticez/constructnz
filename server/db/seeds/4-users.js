exports.seed = (knex, Promise) => {
  return knex('users').insert([
    { username: 'Prenticez', first_name: 'James', last_name: 'Prentice', email: 'jamesp@wyatt.co.nz', phone_number: '0275559916', image_url: 'v1588967372/mathias_eos91h.jpg', hash: '$argon2id$v=19$m=65536,t=2,p=1$t7fDj0UPvYCnLculR3ti2w$hsbmENXcvcQbKGBoj2cBoH0xVBB8OIYfNDSZsatnT8k', location: 'Belfast, New Zealand' },
  ])
}