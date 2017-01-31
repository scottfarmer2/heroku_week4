const pg = require("pg");
const settings = require("./settings"); // settings.json

const client = new pg.Client({
  user     : settings.user,
  password : settings.password,
  database : settings.database,
  host     : settings.hostname,
  port     : settings.port,
  ssl      : settings.ssl
});

const input = process.argv.slice(2);


client.connect((err) => {
  if (err) {
    return console.error("Connection Error", err);
  }


  client.query("SELECT * FROM famous_people WHERE last_name = $1", [input[0]], (err, result) => {
    if (err) {
      return console.error("error running query", err);
    }

    var res = result.rows[0]
    console.log(`- ${res.id}: ${res.first_name} ${res.last_name}, born ${res.birthdate.toLocaleDateString()}`);

    client.end();
  });
});