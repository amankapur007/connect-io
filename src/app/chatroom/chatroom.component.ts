import { Component, OnInit, ViewChild, ElementRef } from "@angular/core";
import { DataserviceService } from "../services/dataservice.service";
import { FirebaseAuthService } from "../services/firebase-auth.service";
import { Router } from "@angular/router";

@Component({
  selector: "app-chatroom",
  templateUrl: "./chatroom.component.html",
  styleUrls: ["./chatroom.component.scss"]
})
export class ChatroomComponent implements OnInit {
  @ViewChild("userlist") userlist: ElementRef;
  constructor(
    private dataService: DataserviceService,
    private authFirebase: FirebaseAuthService,
    private route: Router
  ) {}
  user: any;
  ngOnInit() {
    console.log("Chat room");
    this.authFirebase.getCurrentUser().onAuthStateChanged(user => {
      if (user) {
        this.user = user;
      } else {
        console.log("logged out");
        this.route.navigateByUrl("/home");
      }
    });
  }

  toggle() {
    console.log("collapseble");
    if (this.userlist.nativeElement.style.display == "none") {
      this.userlist.nativeElement.style.display = "block";
    } else {
      this.userlist.nativeElement.style.display = "none";
    }
  }
}
