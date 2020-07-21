
export function Compute(num: number) {

    if (num < 0) {
        return 0;
    }

    return num + 1;
}

import {Component, Output, EventEmitter, Input, OnInit} from '@angular/core';
import { TableService } from './table.service';

@Component({
    selector: 'custom-component',
    template: `
    <input [(ngModel)]="rowData.quantity" [value]="rowData.quantity" (ngModelChange)="onModelChange()"/>`
})
export class CustomComponent implements OnInit {

   /// rowData: any;
 
  @Input() rowData: any;

  constructor(private tableService: TableService) {

  }

   @Output() save: EventEmitter<any> = new EventEmitter();

   ngOnInit() {
     console.log(this.rowData);
   }

    onModelChange(table) {
        this.rowData.total = this.rowData.amount * this.rowData.price;
        this.tableService.rowUpdateSubject.next(this.rowData);
        this.save.emit(this.rowData);
    }
}

 rowUpdateSubject: BehaviorSubject<any>;
  onRowUpdate$: Observable<any>;


  constructor() { 

    this.rowUpdateSubject = new BehaviorSubject(null);
    this.onRowUpdate$ = this.rowUpdateSubject.asObservable();

  }

 <input [(ngModel)]="rowData.quantity" [value]="rowData.quantity" (ngModelChange)="onModelChange()"/>
