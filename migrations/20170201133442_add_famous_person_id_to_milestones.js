
exports.up = function(knex, Promise) {
  return Promise.all([
    knex.schema.table('milestones', function(table) {
        table.increments('id');
        table.integer('famous_person_id');
        })
    ])
};

exports.down = function(knex, Promise) {
  return Promise.all([
    knex.schema.dropColumn('id')
    ])
};
