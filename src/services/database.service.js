const low = require("lowdb");
const FileSync = require("lowdb/adapters/FileSync");

const adapter = new FileSync("db.json");
const db = low(adapter);

if (!db.has("users").value()) {
    this.database.defaults({
        users: [],
    }).write();
}

export default db;