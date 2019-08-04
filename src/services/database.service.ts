import Mongoose from "mongoose";

export class DatabaseService {
  constructor() {}

  private mongoDB = "mongodb://127.0.0.1/my_database";

  connectDB() {
    Mongoose.connect(this.mongoDB);
  }
}
