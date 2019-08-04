import User, { IUser } from "../models/User";
import { IMessage } from "../models/Message";
import { EncryptionService } from "./encrypt.service";

export class UserService {
  constructor(private encryptService: EncryptionService) {}

  createUser(newUser: IUser) {
    newUser.password = this.encryptService.hashPassword(newUser);
    newUser.save();
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
