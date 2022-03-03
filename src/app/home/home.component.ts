import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import * as _ from 'underscore';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {

  constructor(private http: HttpClient) {
    this.http.get('http://localhost:8080/api/products').subscribe((products:any) => {
      products.length = 10;
      console.log(this.sortByProp(products, 'product_unitprice_ati').reverse())
    });
  }

  sortByProp(products:any, attribute:any){
    return _.sortBy(products, function(product:any){
        return product[attribute];
    });
  }
}
