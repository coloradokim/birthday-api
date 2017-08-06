exports.up = function(knex, Promise) {
  return knex.schema.createTable('location', (table) => {
    table.increments();
    table.text('location_name');
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('location');
};
