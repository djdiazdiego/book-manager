import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
  name: 'joinlist'
})
export class JoinListPipe implements PipeTransform {
  transform(input:Array<any>, sep = ','): string {
    return input.join(sep);
  }
}
