import { Component, OnInit, ElementRef, ViewChild } from "@angular/core";
import { FirebaseAuthService } from "../services/firebase-auth.service";
import { ActivatedRoute, Router } from "@angular/router";

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.scss"]
})
export class HomeComponent implements OnInit {
  @ViewChild("m") mod: ElementRef;
  login: boolean = true;
  constructor(private auth: FirebaseAuthService, private route: Router) {}

  ngOnInit() {
    this.auth.getCurrentUser().onAuthStateChanged(res => {
      console.log(res);

      if (res && res.emailVerified) {
        this.route.navigateByUrl("/chat");
      }
    });
  }

  whichEvent(s: string) {
    if (s === "login") {
      this.login = true;
    } else {
      this.login = false;
    }
  }

  closeModal(event) {
    console.log(this.mod.nativeElement.click());
  }
}
