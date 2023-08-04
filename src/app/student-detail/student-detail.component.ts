import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { StudentService } from '../student.service';

@Component({
  selector: 'app-student-detail',
  templateUrl: './student-detail.component.html',
  styleUrls: ['./student-detail.component.css']
})
export class StudentDetailComponent implements OnInit {
  branch: string = '';
  studentId: number = 0;
  student: any;

  constructor(private route: ActivatedRoute, private studentService: StudentService) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      if (params !== null) {
        this.branch = params.get('branch') || '';
        this.studentId = parseInt(params.get('id') || '0', 10); // Parse the string to a number
        this.student = this.studentService.getStudent(this.branch, this.studentId);
      } else {
        this.branch = 'default-branch';
        this.studentId = 0;
        this.student = null;
      }
    });
  }
}
