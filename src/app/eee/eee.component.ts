import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { StudentService } from '../student.service';

@Component({
  selector: 'app-eee',
  templateUrl: './eee.component.html',
  styleUrls: ['./eee.component.css']
})
export class EeeComponent implements OnInit {
  eeeStudents: any[]=[];

  constructor(private router: Router, private studentService: StudentService) { }

  ngOnInit(): void {
    this.eeeStudents = this.studentService.getEeeStudents();
  }

  viewStudentDetails(branch: string, id: number) {
    this.router.navigate(['/student', branch, id]);
  }
}
