import { IUser } from "../models/User";
import bcrypt from "bcrypt";

export class EncryptionService {
  constructor() {}

  //   async hashPassword(user: IUser): Promise<String> {
  //     const password = user.password;
  //     const saltRounds = 10;

  //     const hashedPassword = await new Promise((resolve, reject) => {
  //       bcrypt.hash(password, saltRounds, function(err, hash) {
  //         if (err) reject(err);
  //         resolve(hash);
  //         return err;
  //       });
  //     });

  //     return hashedPassword;
  //   }

  hashPassword(user: IUser): String {
    return bcrypt.hashSync("myPassword", 10);
  }
}
