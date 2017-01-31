const settings = require("./settings");

const knex = require('knex')({
  client: 'pg',
  connection: {
    user     : settings.user,
  password : settings.password,
  database : settings.database,
  host     : settings.hostname,
  port     : settings.port,
  ssl      : settings.ssl
  }
});

var firstName = process.argv[2];
var lastName = process.argv[3];
var bday = process.argv[4];

knex.insert({first_name: firstName, last_name: lastName, birthdate: bday})
.into('famous_people')
.then(function(id) {
    console.log(id);
})
.finally(function() {
    knex.destroy();
});