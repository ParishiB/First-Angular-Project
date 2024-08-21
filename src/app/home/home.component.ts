import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { HeaderComponent } from '../header/header.component';
import { FooterComponent } from '../footer/footer.component';
import { SidebarComponent } from '../sidebar/sidebar.component';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  standalone: true,
  imports: [CommonModule, HeaderComponent, FooterComponent, SidebarComponent],
})
export class HomeComponent {
  courses = [
    { id: 1, name: 'Angular Basics', duration: '3 weeks' },
    { id: 2, name: 'React Basics', duration: '4 weeks' },
    { id: 3, name: 'Vue.js Basics', duration: '2 weeks' },
    { id: 4, name: 'Springboot Basics', duration: '3 weeks' },
    { id: 5, name: 'Java Basics', duration: '4 weeks' },
    { id: 6, name: 'CPP Basics', duration: '2 weeks' },
  ];

  constructor(private router: Router) {}

  goToCourse(courseId: number) {
    this.router.navigate([`/course`, courseId]);
  }
}
