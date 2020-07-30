
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
   
   
   
   tableSettings = {
        hideSubHeader: true,
        actions: {
            edit: true,
            delete: false,
            add: false
        },
        columns: {
            name: {
                title: 'Name',
                type: 'string',
                sort: false
            },
            quantity: {
              title: 'Quantity',
              type: 'custom',
              renderComponent: CustomComponent,
               valuePrepareFunction: (value, row, cell) => {
                // DATA FROM HERE GOES TO renderComponent
                // return {
                //   rows: this.cartData,
                //   cellValue: value
                // }
                console.log(value)
              },
              sort: false,
              editable: true,
              onComponentInitFunction: (instance: any) => {
                instance.save.subscribe(row => {
                 // this.source.refresh();
                });
              }
            },
            price: {
                title: 'Price',
                type: 'number',
                edit : true,
                sort: false
            },
            total: {
                title: 'Total',
                type: 'number',
                sort: false
            }
        }
    };


exportToExcelMultiSheet($event) {
     const fileName = 'test-8.xlsx';
     let ws: XLSX.WorkSheet;
	   let wb: XLSX.WorkBook;
     wb = XLSX.utils.book_new();
     this.data.forEach((data, index) => {
       // ws = XLSX.utils.json_to_sheet(data['details']);
	    
        wb.SheetNames.push(data['categoryname']);
      //  console.log([ ...data['details'][0]   ])
        
        var result = data['details'].map(o => Object.keys(o).map(k => o[k]));
       // console.log(result)
        ws = XLSX.utils.aoa_to_sheet(result);
        // wb.Sheets
        // XLSX.utils.
        wb.Sheets[data['categoryname']] = ws;
       // wb.Sheets.push()
       // XLSX.utils.book_append_sheet(wb, ws, data['categoryname']);
     });
     console.log(wb)
     	XLSX.writeFile(wb, fileName);
   }
