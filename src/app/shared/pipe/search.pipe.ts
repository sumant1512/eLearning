import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
  name: "StudentFilter",
})
export class SearchPipe implements PipeTransform {
  transform(value: any, input: string, items: any[]): any {
    let filteredValue = [];
    if (!value) return null;
    if (!input) return value;

    value.forEach((element) => {
      let fullName: string = element.first_name.concat(" ", element.last_name);
      let studentId: number = element.student_id;
      let className: string = element.class_name;

      if (fullName.toUpperCase().includes(input.toUpperCase())) {
        filteredValue.push(element);
      }
      if (studentId.toString().includes(input)) {
        filteredValue.push(element);
      }
    });
    return filteredValue;
  }
}
