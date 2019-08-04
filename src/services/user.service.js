import { IUser } from "../models/User";
import { IMessage } from "../models/Message";
import { EncryptionService } from "./encrypt.service";
import db from "../models/User";
var User = require("../models/User");

export class UserService {
  createUser(newUser) {
    return new Promise((resolve, reject) => {
      let msg = { content: "", type: "" };
      db.find({ email: newUser.email }, function(err, docs) {
        if (docs.length) {
          msg.content = `${newUser.email} is already taken!`;
          msg.type = "Error";
          reject(msg);
        } else {
          db.insert(newUser);
          msg.content = `The account ${
            newUser.email
          } was successfully created!`;
          msg.type = "Error";
          resolve(msg);
        }
      });
    });
  }
}
