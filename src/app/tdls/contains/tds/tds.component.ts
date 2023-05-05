import { Component, OnInit } from '@angular/core';
import { ITd } from '../../interfaces/td.interface';

@Component({
  selector: 'app-tds',
  templateUrl: './tds.component.html',
  styleUrls: ['./tds.component.scss']
})
export class TdsComponent implements OnInit {
  private tdsState: ITd[] = [];

  constructor() { }

  get tds(): ITd[] {
    return this.tdsState.filter(td => !td.isCompleted);
  }

  get tdsCompleted(): ITd[] {
    return this.tdsState.filter(td => td.isCompleted);
  }

  get countTds(): number {
    return this.tds.length;
  }

  get countCompleted(): number {
    return this.tdsCompleted.length;
  }

  get isHidden(): boolean {
    return this.countCompleted === 0;
  }

  public ngOnInit(): void {
    const tdsStateFromLocalStorage = localStorage.getItem('tdsState');
    this.tdsState = tdsStateFromLocalStorage ? JSON.parse(tdsStateFromLocalStorage) : [];
  }

  public updateTd(): void {
    console.clear();
    console.table(this.tdsState);
    this.saveToLocalStorage();
  }

  public removeTd(id: number): void {
    this.tdsState = this.tdsState.filter(tod => tod.id !== id);
    console.clear();
    console.table(this.tdsState);
    this.saveToLocalStorage();
  }

  public addTd(title: string, descr: string, datet: string): void {
    const id = this.tdsState.length;
    this.tdsState.push({
      id,
      title,
      descr,
      datet,
      isCompleted: false
    });
    this.saveToLocalStorage();
    const taskTitle = <HTMLInputElement>document.querySelector('#taskTitle');
    const taskDescr = <HTMLInputElement>document.querySelector('#taskDescr');
    const taskDate = <HTMLInputElement>document.querySelector('#taskDate');

    taskTitle.value = '';
    taskDescr.value = '';
    taskDate.value = '';
  }

  private saveToLocalStorage(): void {
    localStorage.setItem('tdsState', JSON.stringify(this.tdsState));
  }
}


/*import { Component, OnInit } from '@angular/core';
import { ITd } from '../../interfaces/td.interface';

@Component({
  selector: 'app-tds',
  templateUrl: './tds.component.html',
  styleUrls: ['./tds.component.scss']
})
export class TdsComponent implements OnInit {
  private tdsState: ITd[] = [];

  constructor() { }

  get tds(): ITd[] {
    return this.tdsState.filter(td => !td.isCompleted);
  }

  get tdsCompleted(): ITd[] {
    return this.tdsState.filter(td => td.isCompleted);
  }

  get countTds(): number {
    return this.tds.length;
  }

  get countCompleted(): number {
    return this.tdsCompleted.length;
  }

  get isHidden(): boolean {
    return this.countCompleted === 0;
  }

  public ngOnInit(): void {
    const tdsStateFromLocalStorage = localStorage.getItem('tdsState');
    this.tdsState = tdsStateFromLocalStorage ? JSON.parse(tdsStateFromLocalStorage) : [];
  }

  public updateTd(): void {
    console.clear();
    console.table(this.tdsState);
    this.saveToLocalStorage();
  }

  public removeTd(id: number): void {
    this.tdsState = this.tdsState.filter(tod => tod.id !== id);
    console.clear();
    console.table(this.tdsState);
    this.saveToLocalStorage();
  }

  public addTd(title: string, datet: string, descr: string): void {
    const id = this.tdsState.length;
    this.tdsState.push({
      id,
      title,
      datet,
      descr,
      isCompleted: false
    });
    this.saveToLocalStorage();
  }

  private saveToLocalStorage(): void {
    localStorage.setItem('tdsState', JSON.stringify(this.tdsState));
  }
}*/
