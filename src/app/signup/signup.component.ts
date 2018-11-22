import { Component, OnInit } from "@angular/core";
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { FirebaseAuthService } from "../services/firebase-auth.service";
import { FirebaseUtilitiesService } from "../services/firebase-utilities.service";

@Component({
  selector: "app-signup",
  templateUrl: "./signup.component.html",
  styleUrls: ["./signup.component.scss"]
})
export class SignupComponent implements OnInit {
  mailSend: boolean = false;
  alert: string;
  error: string;
  signUpForm: FormGroup;
  constructor(
    private fb: FormBuilder,
    private authService: FirebaseAuthService,
    private commonUtilities: FirebaseUtilitiesService
  ) {}

  ngOnInit() {
    this.signUpForm = this.fb.group({
      email: ["", [Validators.required, Validators.email]],
      password: [
        "",
        [
          Validators.required,
          Validators.pattern(
            "^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[^ws]).{8,}$"
          )
        ]
      ]
    });

    this.signUpForm.valueChanges.subscribe(console.log);
  }

  async signUp() {
    this.authService
      .signUp(this.signUpForm.value.email, this.signUpForm.value.password)
      .then(res => {
        console.log(res.user);
        var user = res.user;
        user
          .sendEmailVerification()
          .then(() => {
            this.alert = "Verification mail has been send to your account";
            this.mailSend = true;
            console.log(res);
          })
          .catch(err => {
            this.error = err.message;
          });
      })
      .catch(err => {
        this.error = err.message;
      });
  }
}
