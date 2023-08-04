import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { StudentService } from '../student.service';

@Component({
  selector: 'app-ece',
  templateUrl: './ece.component.html',
  styleUrls: ['./ece.component.css']
})
export class EceComponent implements OnInit {
  eceStudents: any[]=[];

  constructor(private router: Router, private studentService: StudentService) { }

  ngOnInit(): void {
    this.eceStudents = this.studentService.getEceStudents();
  }

  viewStudentDetails(branch: string, id: number) {
    this.router.navigate(['/student', branch, id]);
  }
}
