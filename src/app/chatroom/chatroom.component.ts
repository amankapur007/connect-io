import { Component, OnInit } from "@angular/core";
import { DataserviceService } from "../services/dataservice.service";
import { FirebaseAuthService } from "../services/firebase-auth.service";

@Component({
  selector: "app-chatroom",
  templateUrl: "./chatroom.component.html",
  styleUrls: ["./chatroom.component.scss"]
})
export class ChatroomComponent implements OnInit {
  constructor(
    private dataService: DataserviceService,
    private authFirebase: FirebaseAuthService
  ) {}
  user: any;
  ngOnInit() {
    console.log("Chat room");
    this.authFirebase.getCurrentUser().onAuthStateChanged(user => {
      if (user) {
        this.user = user;
      } else {
        console.log("logged out");
      }
    });
  }
}
