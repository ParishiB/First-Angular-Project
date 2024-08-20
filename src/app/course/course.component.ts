import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.css'],
})
export class CourseComponent implements OnInit {
  courseId: number;
  courseName: string;

  constructor(private route: ActivatedRoute) {
    this.courseId = 0;
    this.courseName = '';
  }

  ngOnInit(): void {
    this.courseId = Number(this.route.snapshot.paramMap.get('id'));
    this.courseName = String(this.route.snapshot.paramMap.get('name'));
  }
}
