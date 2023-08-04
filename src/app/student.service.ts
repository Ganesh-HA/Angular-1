import { Injectable } from '@angular/core';
@Injectable({
  providedIn: 'root'
})
export class StudentService {
  private cseStudents = [
    { id: 1, name: 'Student1', usn: 'CSE001', age: 20, phoneNumber: '1234567890', cgpa: 8.5 },
    { id: 2, name: 'Student2', usn: 'CSE002', age: 21, phoneNumber: '9876543210', cgpa: 8.0 },
  ];

  private eceStudents = [
    { id: 1, name: 'Student1', usn: 'ECE001', age: 23, phoneNumber: '9876543210', cgpa: 8.0 },
    { id: 2, name: 'Student2', usn: 'ECE002', age: 21, phoneNumber: '9876543215', cgpa: 9.0 },
  ];

  private eeeStudents = [
    { id: 1, name: 'Student1', usn: 'EEE001', age: 22, phoneNumber: '9876543210', cgpa: 8.2 },
    { id: 2, name: 'Student2', usn: 'EEE002', age: 20, phoneNumber: '9876543540', cgpa: 7.5 },
  ];

  constructor() { }

  getCseStudents(): any[] {
    return this.cseStudents;
  }

  getEceStudents(): any[] {
    return this.eceStudents;
  }

  getEeeStudents(): any[] {
    return this.eeeStudents;
  }

  getStudent(branch: string, id: number): any {
    let students: any[] = [];
    if (branch === 'cse') {
      students = this.cseStudents;
    } else if (branch === 'ece') {
      students = this.eceStudents;
    } else if (branch === 'eee') {
      students = this.eeeStudents;
    }
    return students.find(student => student.id === id);
  }
}
