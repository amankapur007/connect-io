import { Injectable } from "@angular/core";
import * as firebase from "firebase";
@Injectable({
  providedIn: "root"
})
export class FirebaseUtilitiesService {
  constructor() {}

  getCurrentUser(): firebase.User {
    return firebase.auth().currentUser;
  }
}
