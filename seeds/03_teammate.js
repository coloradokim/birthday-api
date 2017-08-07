exports.seed = function(knex, Promise) {
  return knex('teammate').del()
    .then(function() {
      return knex('teammate').insert({
        name: 'Kim Schlesinger',
        slack_username: '@kim',
        birthday: '4/25/1985',
        wants_celebration: true,
        celebration_foods: 'apples and peanut butter',
        celebration_outings: 'A trip to the museum'
      });
    });
};
