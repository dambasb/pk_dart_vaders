import { Component, OnInit } from '@angular/core';
import { TableService } from './table.service';

@Component({
  selector: 'app-tables',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.less'],
  providers: [TableService]
})
export class TablesComponent implements OnInit {
  table = [];
  constructor(private tableService: TableService) { }

  ngOnInit(): void {
    this.table = this.tableService.getTable();
  }

}
