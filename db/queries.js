const knex = require('./knex');

module.exports = {
  getAll() {
    return knex('teammate');
  },
  getOneClient(id) {
    return knex('clients').where('id', id).first();
  },
  createClient(newClient) {
    return knex('clients').insert(newClient, '*');
  },
  deleteClient(id) {
    return knex('clients').where('id', id).del();
  }
};
