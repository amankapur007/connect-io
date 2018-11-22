import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.scss"]
})
export class HomeComponent implements OnInit {
  login: boolean = true;
  constructor() {}

  ngOnInit() {}

  whichEvent(s: string) {
    if (s === "login") {
      this.login = true;
    } else {
      this.login = false;
    }
  }
}
