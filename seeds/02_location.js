exports.seed = function(knex, Promise) {
  return knex('location').del()
    .then(function() {
      return knex('location').insert([
        {location_name: 'Denver'},
        {location_name: 'San Francisco'},
        {location_name: 'Boulder'},
        {location_name: 'Austin'},
        {location_name: 'Seattle'},
        {location_name: 'New York'},
      ]);
    });
};
