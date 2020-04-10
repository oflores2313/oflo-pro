import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.scss']
})
export class PortfolioComponent implements OnInit {

  projects: any[];

  constructor() { }

  ngOnInit() {
    this.projects = [
      {
        id: 1,
        name: 'Students Complete App ',
        description: 'This is a dockerized application that contains both the Students API and the Students Front End Application in the same directory',
        technology: ['Angular', 'Docker', 'NodeJs'],
        image: '/',
        url: 'https://github.com/oflores2313/students-gradebook-dockerized'
      },

      {
        id: 2,
        name: 'Students API',
        description: 'This NodeJS app contains the students api that is used in the student gradebook front end app.',
        technology: ['NodeJs'],
        image: '/',
        url: 'https://github.com/oflores2313/students-class-api'
      },

      {
        id: 3,
        name: 'Students Front End',
        description: 'This web app will show a table of users (students) that will contain name, grade average and a details button. Upon details button click, the route changes and shows the complete user(student) information.',
        technology: ['Angular'],
        image: '/',
        url: 'https://github.com/oflores2313/students-angular'
      },

      {
        id: 4,
        name: 'User List Training',
        description: 'This CRUD web application was created while training up on the VueJS Framework.',
        technology: ['VueJS', 'Bootstrap'],
        image: '/',
        url: 'https://github.com/oflores2313/user-list-vue-training'
      },

      {
        id: 5,
        name: 'React Movies',
        description: 'This CRUD web application was created while training up on the React Framework.',
        technology: ['React', 'Bootstrap'],
        image: '/',
        url: 'https://github.com/oflores2313/react-movies'
      },

      {
        id: 6,
        name: 'Final Countdown',
        description: 'This Angular developed application was created when leaving my previous company.  It was a countdown that took the end date as a parameter which then calculated the countdown.',
        technology: ['Angular', 'Bootstrap'],
        image: '/',
        url: 'https://github.com/oflores2313/final-countdown'
      }
    ]

  }

  openGitHub(id){
    if(id){
      this.projects.map(data => {
        if(data.id === id){
          window.open(data.url, '_blank')
        }
        
      })
    }
  }

}
