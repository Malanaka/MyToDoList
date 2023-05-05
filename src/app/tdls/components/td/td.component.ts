import { ITd } from './../../interfaces/td.interface';
import { Component, Input, OnInit, Output, EventEmitter  } from '@angular/core';

@Component({
  selector: 'app-td',
  templateUrl: './td.component.html',
  styleUrls: ['./td.component.scss']
})
export class TdComponent implements OnInit {
  @Input() tod: ITd = { id: 0, title: '', datet: '',descr: '', isCompleted: false };
  @Output() tdChange: EventEmitter<void> = new EventEmitter<void>();
  @Output() deleteTd: EventEmitter<number> = new EventEmitter<number>();
  constructor() {
   }

  ngOnInit(): void {

  }
}
