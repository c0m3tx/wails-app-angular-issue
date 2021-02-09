import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: '[id="app"]',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'my-app';

  clickMessage = '';

  constructor(private router: Router) {}

  onClickMe() {
    console.log("You clicked on 'click me'.");
    this.router.navigate(["/test"]).then(result => {
      console.log("Navigation promise result is: " + result);
    }).catch(reason => {
      console.log("There was an error in navigation: " + reason);
    }).finally(() => {
      console.log("Well, finally.");
    });
  }
}
