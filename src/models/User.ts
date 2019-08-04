export interface IUser {
  email: String;
  password: String;
}

var Datastore = require("nedb");
var db = new Datastore({ autoload: true });

export default db;
