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

  feedData() {
    const dummy: Product[] = [
      {
        name: 'Mac Book',
        stock: 1,
        price: 20000,
        image:
          'https://upload.wikimedia.org/wikipedia/commons/thumb/1/14/Gatto_europeo4.jpg/250px-Gatto_europeo4.jpg',
      },
      {
        name: 'Mac Book',
        stock: 2,
        price: 20000,
        image:
          'https://upload.wikimedia.org/wikipedia/commons/thumb/1/14/Gatto_europeo4.jpg/250px-Gatto_europeo4.jpg',
      },
      {
        name: 'Mac Book',
        stock: 3,
        price: 20000,
        image:
          'https://upload.wikimedia.org/wikipedia/commons/thumb/1/14/Gatto_europeo4.jpg/250px-Gatto_europeo4.jpg',
      },
      {
        name: 'Mac Book',
        stock: 4,
        price: 20000,
        image:
          'https://upload.wikimedia.org/wikipedia/commons/thumb/1/14/Gatto_europeo4.jpg/250px-Gatto_europeo4.jpg',
      },
      {
        name: 'Mac Book',
        stock: 5,
        price: 20000,
        image:
          'https://upload.wikimedia.org/wikipedia/commons/thumb/1/14/Gatto_europeo4.jpg/250px-Gatto_europeo4.jpg',
      },
    ];

    this.dataSource.data = dummy;
  }
}
