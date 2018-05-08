//import { Pipe, PipeTransform } from '@angular/core';
//
//import { Talent } from './talent';
//
//@Pipe({
//    name: 'talentfilter',
//    pure: false
//})
//export class TalentFilterPipe implements PipeTransform {
//  transform(items: Talent[], filter: Talent): Talent[] {
//    if (!items || !filter) {
//      return items;
//    }
//    // filter items array, items which match and return true will be kept, false will be filtered out
//    return items.filter((item: Talent) => this.applyFilter(item, filter));
//  }
//  
//  /**
//   * Perform the filtering.
//   * 
//   * @param {Talent} talent The book to compare to the filter.
//   * @param {Talent} filter The filter to apply.
//   * @return {boolean} True if book satisfies filters, false if not.
//   */
//  applyFilter(talent: Talent, filter: Talent): boolean {
//    for (let field in filter) {
//      if (filter[field]) {
//        if (typeof filter[field] === 'string') {
//          if (talent[field].toLowerCase().indexOf(filter[field].toLowerCase()) === -1) {
//            return false;
//          }
//        } else if (typeof filter[field] === 'number') {
//          if (talent[field] !== filter[field]) {
//            return false;
//          }
//        }
//      }
//    }
//    return true;
//  }
//}