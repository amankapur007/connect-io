import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Form } from "@angular/forms";

@Component({
  selector: "app-messages",
  templateUrl: "./messages.component.html",
  styleUrls: ["./messages.component.scss"]
})
export class MessagesComponent implements OnInit {
  messageForm: FormGroup;
  constructor(private fb: FormBuilder) {}

  ngOnInit() {
    this.messageForm = this.fb.group({ message: "" });
  }
}
