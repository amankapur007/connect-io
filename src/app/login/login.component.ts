import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup } from "@angular/forms";
import { FirebaseAuthService } from "../services/firebase-auth.service";
import {
  ActivatedRouteSnapshot,
  ActivatedRoute,
  Router
} from "@angular/router";
import { DataserviceService } from "../services/dataservice.service";
@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.scss"]
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  constructor(
    private fb: FormBuilder,
    private fbAuthService: FirebaseAuthService,
    private route: Router,
    private dataService: DataserviceService
  ) {}

  ngOnInit() {
    this.loginForm = this.fb.group({ email: "", password: "" });
    this.loginForm.valueChanges.subscribe(console.log);
  }

  async login() {
    this.fbAuthService
      .login(this.loginForm.value.email, this.loginForm.value.password)
      .then(res => {
        console.log(res);
        var user: firebase.User = res.user;
        this.dataService.setData(user);
        this.route.navigateByUrl("/chat");
      })
      .catch(err => {
        console.log(err);
      });
  }
}
