import { Component, OnInit } from '@angular/core';
import { InnerItem } from './innerItem.model';

@Component({
  selector: 'app-item-list',
  templateUrl: './item-list.component.html',
  styleUrls: ['./item-list.component.css']
})
export class ItemListComponent implements OnInit {

  itemList: InnerItem[] = [
    new InnerItem('', 'test1'),
    new InnerItem('', 'test2'),
    new InnerItem('', 'test3'),
  ];

  constructor() { }

  ngOnInit() {
  }

  activateItem($event: MouseEvent, item: InnerItem) {
    if ($event.type === 'mouseover') {
      item.setStatus('active');
    } else {
      item.setStatus('');
    }
  }
}
