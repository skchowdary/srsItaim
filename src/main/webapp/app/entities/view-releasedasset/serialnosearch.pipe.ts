import { Pipe, PipeTransform } from '@angular/core';
@Pipe({
  name: 'serialNumberFilter'
})
export class SerialnoSearch implements PipeTransform {
  transform(value: any, args?: any): any {
    if (!args) {
      return value;
    }
    return value.filter(val => {
      const rVal = val.serialNumber.toLocaleLowerCase().includes(args);
      return rVal;
    });
  }
}
