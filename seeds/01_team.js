exports.seed = function(knex, Promise) {
  return knex('team').del()
    .then(function() {
      return knex('team').insert({
        team_name: 'WDI'
      });
    });
};
