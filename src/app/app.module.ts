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
import { environment } from "src/environments/environment";

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
    var config = environment.connection;
    firebase.initializeApp(config);
  }
}
