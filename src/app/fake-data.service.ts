import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

export interface FaKeData {
  name: string;
}

@Injectable({
  providedIn: 'root'
})
export class FakeDataService {
  private _list: FaKeData[] = []
  private _observableList: BehaviorSubject<FaKeData[]> = new BehaviorSubject(this._list);

  get observableList(): Observable<FaKeData[]> { return this._observableList.asObservable() }

  addData(fakeData: FaKeData) {
    this._list.push(fakeData);
    this._observableList.next(this._list);
  }

  constructor() {
    let firstData: FaKeData = { name: "Toto 43" };
    this.addData(firstData);
    this.loadOtherData();
  }

  loadOtherData() {
    var newames: string[] = ['1A', '2B', '4C'];
    let delay: number = 1000;
    for (const num of newames) {
      let newData: FaKeData = { name: num };
      this.addWithDelay(newData, delay);
      delay += 1000;
    }
  }

  addWithDelay(fakeData: FaKeData, delay: number) {
    setTimeout(() => {
      this.addData(fakeData);
    }, delay);
  }
}

