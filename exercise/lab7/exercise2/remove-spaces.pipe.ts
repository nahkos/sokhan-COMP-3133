import { Pipe, PipeTransform } from '@angular/core';
import { HeroesComponent } from './heroes/heroes.component';

@Pipe({
  name: 'removeSpaces'
})
export class RemoveSpacesPipe implements PipeTransform {

  transform(value: string): string {
    return value? value.replace(/-/g, " ") : value;
  }

}
