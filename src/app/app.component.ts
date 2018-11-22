import { Component } from "@angular/core";
import * as firebase from "firebase";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"]
})
export class AppComponent {
  title = "Connect";

  constructor() {
    var config = {
      apiKey: "AIzaSyDhDMsfBQh9uJI3YY1mFMKKyqhq_1TOgic",
      authDomain: "connect-io-6edb3.firebaseapp.com",
      databaseURL: "https://connect-io-6edb3.firebaseio.com",
      projectId: "connect-io-6edb3",
      storageBucket: "connect-io-6edb3.appspot.com",
      messagingSenderId: "1059657611617"
    };
    firebase.initializeApp(config);
  }
}
