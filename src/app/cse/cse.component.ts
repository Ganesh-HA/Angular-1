import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { StudentService } from '../student.service';

@Component({
  selector: 'app-cse',
  templateUrl: './cse.component.html',
  styleUrls: ['./cse.component.css']
})
export class CseComponent implements OnInit {
  cseStudents: any[]=[];

  constructor(private router: Router, private studentService: StudentService) { }

  ngOnInit(): void {
    this.cseStudents = this.studentService.getCseStudents();
  }

  viewStudentDetails(branch: string, id: number) {
    this.router.navigate(['/student', branch, id]);
  }
}
