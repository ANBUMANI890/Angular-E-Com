import { Pipe, PipeTransform } from '@angular/core';
import { Product } from '../product';

@Pipe({
  name: 'search'
})
export class SearchPipe implements PipeTransform {

  transform(products: Array<Product>, ...args: Array<string>): Array<Product> {
    return products.filter(e => e.title.includes(args[0]))
  }

}
