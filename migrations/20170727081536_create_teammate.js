exports.up = function(knex, Promise) {
  return knex.schema.createTable('teammate', (table) => {
    table.increments();
    table.bigInteger('AddressId').unsigned().index().references('id').inTable('Address')

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
