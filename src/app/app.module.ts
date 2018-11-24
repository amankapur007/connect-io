import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { ReactiveFormsModule } from "@angular/forms";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { HomeComponent } from "./home/home.component";
import { LoginComponent } from "./login/login.component";
import { SignupComponent } from "./signup/signup.component";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { ChatroomComponent } from "./chatroom/chatroom.component";
import { MessagesComponent } from "./messages/messages.component";
import { UsersComponent } from "./users/users.component";
import { ProfileComponent } from "./profile/profile.component";
import { ProfilePipe } from "./pipes/profile.pipe";
import * as firebase from "firebase";

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    SignupComponent,
    ChatroomComponent,
    MessagesComponent,
    UsersComponent,
    ProfileComponent,
    ProfilePipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
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
