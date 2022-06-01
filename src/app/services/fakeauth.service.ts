import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FakeauthService {
  isConnected: boolean;

  mysubject: Subject<boolean> = new Subject<boolean>();

  constructor() { }

  login(){
    this.isConnected = true;
    this.emitSubject();
  }

  logout() {
    this.isConnected = false;
    this.emitSubject();
  }

  emitSubject() {
    this.mysubject.next(this.isConnected);
  }
}
