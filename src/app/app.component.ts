import { Component, OnInit } from '@angular/core';
import { StudentInterface } from './student';
import { StudentService } from './student.service';
import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'app';

  students: StudentInterface[] = [];

  constructor (private studentService: StudentService) {}

  drop(event: CdkDragDrop<string[]>) {
    moveItemInArray(this.students, event.previousIndex, event.currentIndex);
  }

  ngOnInit() {
    this.studentService.getAllStudents().subscribe((studentsData: StudentInterface[]) => this.students = studentsData);
  }



}
