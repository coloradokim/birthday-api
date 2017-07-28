exports.up = function(knex, Promise) {
  return knex.schema.createTable('teammate', (table) => {
    table.increments();
    // table.('team_id'); foreign key that references team
    table.text('name');
    table.date('birthday');
    table.boolean('wants_celebration');
    table.text('celebration_foods');
    table.text('celebration_outings');
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('teammate')
};
