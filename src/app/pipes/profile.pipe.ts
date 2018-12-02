import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
  name: "profile"
})
export class ProfilePipe implements PipeTransform {
  transform(value: any, args?: any): any {
    console.log(value, ": ", args);

    if (args == "name") {
      if (value.displayName == null) {
        return value.email;
      } else {
        return value.displayName;
      }
    }
  }
}
