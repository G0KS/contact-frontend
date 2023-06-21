import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter',
})
export class FilterPipe implements PipeTransform {
  transform(allContacts: any, searchKey: any, key: any): any[] {
    const result: any = [];
    if (!allContacts || searchKey == '' || key == '') {
      return allContacts;
    }
    allContacts.forEach((item: any) => {
      if (
        item[key].trim().toLowerCase().includes(searchKey.trim().toLowerCase())
      ) {
        result.push(item);
      }
    });
    return result;
  }
}
