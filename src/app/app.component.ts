import { Component, OnInit } from "@angular/core";
import { FirebaseAuthService } from "./services/firebase-auth.service";
import { THIS_EXPR } from "@angular/compiler/src/output/output_ast";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"]
})
export class AppComponent implements OnInit {
  title = "Connect";
  loggedUser: firebase.User = null;
  constructor(private authService: FirebaseAuthService) {}

  ngOnInit() {
    var auth = this.authService.getCurrentUser().onAuthStateChanged(user => {
      if (user && user.emailVerified) {
        this.loggedUser = user;
        console.log(this.loggedUser);
      } else {
        this.loggedUser = null;
      }
    });
  }

  logout() {
    this.authService
      .getCurrentUser()
      .signOut()
      .then(res => {
        console.log(res);
      })
      .catch(err => {
        console.log(err);
      });
  }
}
