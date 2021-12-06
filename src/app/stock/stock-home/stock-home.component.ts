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
        name: 'Et deleniti ipsum itaque odio reiciendis animi ipsum nemo. In et aliquam ut ut. Eius omnis qui repudiandae repudiandae. Molestiae illum aperiam ut aut ut.',
        stock: 11111,
        price: 20000,
        image:
          'https://upload.wikimedia.org/wikipedia/commons/thumb/1/14/Gatto_europeo4.jpg/250px-Gatto_europeo4.jpg',
      },
      {
        name: 'Mac Book',
        stock: 22222,
        price: 20000,
        image:
          'https://upload.wikimedia.org/wikipedia/commons/thumb/1/14/Gatto_europeo4.jpg/250px-Gatto_europeo4.jpg',
      },
      {
        name: 'Mac Book',
        stock: 33333,
        price: 20000,
        image:
          'https://upload.wikimedia.org/wikipedia/commons/thumb/1/14/Gatto_europeo4.jpg/250px-Gatto_europeo4.jpg',
      },
      {
        name: 'Mac Book',
        stock: 44444,
        price: 20000,
        image:
          'https://upload.wikimedia.org/wikipedia/commons/thumb/1/14/Gatto_europeo4.jpg/250px-Gatto_europeo4.jpg',
      },
      {
        name: 'Mac Book',
        stock: 55555,
        price: 20000,
        image:
          'https://upload.wikimedia.org/wikipedia/commons/thumb/1/14/Gatto_europeo4.jpg/250px-Gatto_europeo4.jpg',
      },
    ];

    this.dataSource.data = dummy;
  }
}
