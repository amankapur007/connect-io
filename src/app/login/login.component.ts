import { Component, OnInit, Output, EventEmitter } from "@angular/core";
import { FormBuilder, FormGroup } from "@angular/forms";
import { FirebaseAuthService } from "../services/firebase-auth.service";
import {
  ActivatedRouteSnapshot,
  ActivatedRoute,
  Router
} from "@angular/router";
import { DataserviceService } from "../services/dataservice.service";
import { StringifyOptions } from "querystring";
@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.scss"]
})
export class LoginComponent implements OnInit {
  user: firebase.User;
  message: string;
  error: string;
  emailVerification: string;
  @Output() modal = new EventEmitter();
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
        this.user = user;
        if (user && user.emailVerified) {
          this.dataService.setData(user);
          this.modal.emit();
          this.route.navigateByUrl("/chat");
        } else {
          this.emailVerification = "Request to verify your account";
          console.log("Verify you account");
        }
      })
      .catch(err => {
        console.log(err);
      });
  }

  resendLink() {
    this.user
      .sendEmailVerification()
      .then(res => {
        this.message = "Email has been sent.";
      })
      .catch(err => {
        this.error = err.message;
      });
  }
}
