import { Component } from '@angular/core';
import {Router} from '@angular/router';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(private router: Router) {}
  title = 'My Personal Portfolio';
  subtitle = ' ';
  goHome() {
    this.router.navigate(['home']);
  }

  goProjects() {
    this.router.navigate(['my-projects']);
  }
}




