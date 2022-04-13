import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../services/product.service';
import { Product } from '../../product';
import { map } from 'rxjs/operators'
// import { FakedataService } from 'src/app/services/fakedata.service';

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.css']
})
export class ViewComponent implements OnInit {

  constructor(private productService: ProductService) { }


  products: Array<Product> = []

  //   deleteProduct(id: number) {
  //     // http delete
  //     // this.http.delete('http://localhost:8000/employees/' + id)
  //     this.productService.deleteProduct(id)
  //       .subscribe(data => console.log(data))
  //   }

  ngOnInit(): void {
    console.log('Initialized once ..')
    this.productService.fetchProducts()
      .subscribe((data: any) => {
        console.log(data)
        this.products = data.data
      })
  }

  // http.get
  // extract data and put into employees array


  // productItems: Product[] = [];

  // getProducts(): void  {
  //     this.product = this.productItems.map((product: Product) => {
  //         return { id: product.id, title: product.title };
  //     });
  // }

  //   ngOnInit() {
  //     this.getProducts();
}
