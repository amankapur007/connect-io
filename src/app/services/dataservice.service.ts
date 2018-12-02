import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs";

@Injectable({
  providedIn: "root"
})
export class DataserviceService {
  private data = new BehaviorSubject(null);
  currentData = this.data.asObservable();
  constructor() {}

  setData(udata: any) {
    this.data.next(udata);
  }
}
