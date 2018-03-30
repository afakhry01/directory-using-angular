import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterByName'
})
export class FilterByNamePipe implements PipeTransform {

  transform(contacts: any, name: any): any {
    if (name === undefined) return contacts;
      return contacts.filter(function(contact){
        let result = contact.name.toLowerCase().includes(name.toLowerCase());
        return result;
      })
    }
}
