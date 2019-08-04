import db from "./database.service";
import { IMessage } from "../models/Message";
import { EncryptionService } from "./encrypt.service";

export default class UserService {
  constructor() {
    var encryptService = new EncryptionService();
  }

  createUser(newUser) {
    newUser.password = this.encryptService.hashPassword(newUser);
    db.get("users").push(newUser);
  }

  //   checkIfUserExists(newUser): Promise<IMessage> {
  //     let msg: IMessage
  //     let p = new Promise((resolve, reject) => {
  //       User.find({ email: newUser.email }, function(err, docs) {
  //         if (docs.length) {
  //           msg.content = `${newUser.email} is already taken!`;
  //           msg.type = "Error";
  //           return;
  //         } else {
  //           msg.content = `The account ${
  //             newUser.email
  //           } was successfully created!`;
  //           msg.type = "Error";
  //         }
  //       })
  //       });
  //     return p
  //     });
  //   }
}
