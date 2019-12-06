import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'pipeP'
})
export class PipePPipe implements PipeTransform {

  transform(p:number): string {
    return p+"DT";
  }

}
