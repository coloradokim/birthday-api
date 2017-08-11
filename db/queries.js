const knex = require('./knex');

module.exports = {
  getAll() {
    return knex('teammate');
  },
  getOne(id) {
    return knex('teammate').where('id', id).first();
  },
  createTeammate(newTeammate) {
    return knex('teammate').insert(newTeammate, '*');
  },
  deleteOne(id) {
    return knex('teammate').where('id', id).del();
  }
};
