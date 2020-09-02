import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
  name: "StudentFilter",
})
export class SearchPipe implements PipeTransform {
  transform(value: any, input: string): any {
    let filteredValue = [];
    if (!value) return null;
    if (!input) return value;

    value.forEach((element) => {
      if (element.first_name.toUpperCase().includes(input.toUpperCase())) {
        filteredValue.push(element);
      }
    });
    return filteredValue;
  }
}
