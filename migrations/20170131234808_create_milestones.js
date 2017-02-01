
exports.up = function(knex, Promise) {
  return Promise.all([
    knex.schema.createTable('milestones', function(table) {
        table.string('description');
        table.data('date_achieved');
        table.increments('id');
        table.integer('famous_person_id');
        })
    ])
};

exports.down = function(knex, Promise) {
  return Promise.all([
    knex.schema.dropTable('milestones')
    ])
};
