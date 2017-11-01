import { Component, OnInit, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent implements OnInit {
  @Output() itemDeleted = new EventEmitter<{id: number, name: string, price: number }>();
  id;
  name;
  price;

  @Input('product') product: {
    id: number,
    name: string,
    price: number
  };

  onDelete(id) {
    console.log(id);
    this.itemDeleted.emit({
      id: this.id, name: this.name, price: this.price
    });
  }

  ngOnInit() {
    console.log(this.product);
  }

}
