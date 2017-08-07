exports.seed = function(knex, Promise) {
  return knex('team').del()
    .then(function() {
      return knex('team').insert([
        {team_name: 'WDI'},
        {team_name: 'DSI'},
        {team_name: 'Student Support Team'},
        {team_name: 'Campus Team'},
        {team_name: 'HQ'}
      ]);
    });
};
