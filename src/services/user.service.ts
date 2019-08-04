import { IUser } from "../models/User";
import { IMessage } from "../models/Message";
import { EncryptionService } from "./encrypt.service";
// import { reject } from "q";
// import { resolve } from "path";
var User = require('../models/User');

export class UserService {
  constructor(private encryptService: EncryptionService) {}

  createUser(newUser: IUser) {
    return new Promise<IMessage>((resolve, reject) => {
      let msg: IMessage;
      User.find({ email: newUser.email }, function(err: any, docs: any) {
        if (docs.length) {
          msg.content = `${newUser.email} is already taken!`;
          msg.type = "Error";
          reject(msg);
        } else {
          newUser.save();
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
