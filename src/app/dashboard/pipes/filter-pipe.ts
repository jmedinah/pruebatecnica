import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
  name: "filter",
  pure: false
})
export class FilterPipe implements PipeTransform {
  transform(items: any[], maker): any {
    return maker
      ? items.filter(item => item.make.indexOf(maker) !== -1)
      : items;
  }
}
