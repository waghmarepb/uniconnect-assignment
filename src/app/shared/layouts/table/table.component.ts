import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {
  @Input() tableData: any;
  constructor() { }

  ngOnInit(): void {
  }
  public correctPhoneNumber(number: string) {
    return number.split(' ')[0]

  }
}
