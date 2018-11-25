import { Injectable } from "@angular/core";
import * as firebase from "firebase";
import { User } from "../model/user.model";
@Injectable({
  providedIn: "root"
})
export class FirebaseDatabaseService {
  db: firebase.firestore.Firestore;
  constructor() {
    this.db = firebase.firestore();
    // Disable deprecated features
    this.db.settings({
      timestampsInSnapshots: true
    });
  }

  storeToUsersCollection(
    user: User
  ): Promise<firebase.firestore.DocumentReference> {
    return this.db.collection("users").add({
      name: user.$name,
      email: user.$email,
      verified: true,
      status: user.$status,
      lastLogin: null,
      photoUrl: user.$photUrl
    });
  }
}
