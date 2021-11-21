import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Product } from 'src/app/models/product.model';

@Component({
  selector: 'app-stock-home',
  templateUrl: './stock-home.component.html',
  styleUrls: ['./stock-home.component.css'],
})
export class StockHomeComponent implements OnInit {
  displayedColumns = ['image', 'name', 'price', 'stock', 'action'];

  dataSource = new MatTableDataSource<Product>();

  constructor() {}

  ngOnInit(): void {
    this.feedData();
  }

  feedData(){
    const dummy = [
      new Product(),
      new Product(),
      new Product(),
    ]

    this.dataSource.data = dummy
  }
}
