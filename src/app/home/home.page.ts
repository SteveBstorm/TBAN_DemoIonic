import { FakeauthService } from './../services/fakeauth.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {

  public myprop: string;
  public connectionStatus: boolean;
  constructor(
    private auth: FakeauthService
  ) { }

  ngOnInit() {
    this.myprop = 'salut michel';
    this.auth.mysubject.subscribe({
      next: (data: boolean) => {this.connectionStatus = data;}
    });
    this.auth.emitSubject();
  }

  login(){
    this.auth.login();
  }

  logout(){
    this.auth.logout();
  }

}
