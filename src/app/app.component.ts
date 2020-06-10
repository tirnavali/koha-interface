import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'koha-app';
  searchKeyword = "";
  searchResult = [{"title": "Türkiye'yi anlamak", "isbn": "12345678900" }];
  user = {};

  onLoginAcquired(loginData: {username: string; password: string}) {
    this.user = loginData;
  }
}





