import { Injectable } from "@angular/core";
import { User } from "src/app/model/user.model";
import { FirebaseDatabaseService } from "../firebase-database.service";

@Injectable({
  providedIn: "root"
})
export class UserService {
  constructor(private db: FirebaseDatabaseService) {}

  storeToUsersCollection(email: string) {
    console.log("storeToUsersCollection");

    var user: User = new User();
    user.$name = email;
    user.$email = email;
    user.$status = "offline";
    user.$verified = true;
    user.$photUrl = null;
    this.db
      .storeToUsersCollection(user)
      .then(doc => {
        console.log("doc:", doc);
      })
      .catch(err => {
        console.log("err:", err);
      });
  }
}
