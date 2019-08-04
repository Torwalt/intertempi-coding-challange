import User, { IUser } from "../models/User";
import { IMessage } from "../models/Message";
import { EncryptionService } from "./encrypt.service";

export class UserService {
  constructor(private encryptService: EncryptionService) {}

  createUser(newUser: IUser): IMessage {
    let msg: IMessage;

    User.find({ email: newUser.email }, function(err, docs) {
      if (docs.length) {
        msg.content = `${newUser.email} is already taken!`;
        msg.type = "Error";
      } else {
        newUser.save();
        msg.content = `The account ${newUser.email} was successfully created!`;
        msg.type = "Error";
      }
    });
    return msg;
  }
}
