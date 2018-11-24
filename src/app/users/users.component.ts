import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-users",
  templateUrl: "./users.component.html",
  styleUrls: ["./users.component.scss"]
})
export class UsersComponent implements OnInit {
  profile_pic = null;
  constructor() {}

  ngOnInit() {
    this.profile_pic =
      "https://media.licdn.com/dms/image/C5103AQE8-fpRDW8tVw/profile-displayphoto-shrink_200_200/0?e=1548288000&v=beta&t=TamjnpQtdUloXtUVgJTwFD--X5eoEDjL4cPdtGBPxOA";
  }
}
