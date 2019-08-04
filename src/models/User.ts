import mongoose, { Schema, Document } from "mongoose";

export interface IUser extends Document {
  email: String;
  password: String;
}

var Datastore = require("nedb");
var db = new Datastore({ autoload: true });

const UserSchema: Schema = new Schema({
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true }
});

export default db;
