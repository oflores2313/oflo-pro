import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'oflo-pro-docker';
  navLinks: any[];
  activeLinkIndex = -1;

  constructor(
    private router: Router
  ) {
    this.navLinks = [
      {
        label: 'Home',
        link: './home',
        index: 0
      },
      {
        label: 'Experience',
        link: './experience',
        index: 1
      },
      {
        label: 'Portfolio',
        link: './portfolio',
        index: 2
      },
      {
        label: 'Contact',
        link: './contact',
        index: 3
      }
    ]
  }

  ngOnInit(): void {
    this.router.events.subscribe((res) => {
      this.activeLinkIndex = this.navLinks.indexOf(this.navLinks.find(tab => tab.link === '.' + this.router.url));
  });
  }

  openLinkedIn(){
    window.open('https://www.linkedin.com/in/oscar-flores-64b34270', '_blank')
  }

}
