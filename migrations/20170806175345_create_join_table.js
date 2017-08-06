exports.up = function(knex, Promise) {
  return knex.schema.createTable('team_location', (table) => {
    table.increments();
    table.integer('team_id').unsigned().index().references('id').inTable('team');
    table.integer('location_id').unsigned().index().references('id').inTable('location')
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('team_location');
};
