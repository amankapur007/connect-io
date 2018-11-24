import { Component, OnInit, ViewChild, ElementRef } from "@angular/core";
import { FirebaseAuthService } from "../services/firebase-auth.service";

@Component({
  selector: "app-users",
  templateUrl: "./users.component.html",
  styleUrls: ["./users.component.scss"]
})
export class UsersComponent implements OnInit {
  profile_pic = null;
  user: firebase.User;
  constructor(private auth: FirebaseAuthService) {}

  ngOnInit() {
    this.auth.getCurrentUser().onAuthStateChanged(res => {
      if (res) {
        this.user = res;
      }
    });
  }
}
