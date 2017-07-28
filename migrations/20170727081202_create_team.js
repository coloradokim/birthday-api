exports.up = function(knex, Promise) {
  return knex.schema.createTable('team', (table) => {
    table.increments();
    table.text('team_name');
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('team');
};
