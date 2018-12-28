import { Injectable } from '@angular/core';
import { StudentInterface } from './student';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StudentService {

  students: StudentInterface[] =
      [
        {
          name: 'Krunal'
        },
        {
          name: 'Ankit'
        },
        {
          name: 'Rushabh'
        },
        {
          name: 'Dhaval'
        },
        {
          name: 'Nehal'
        }
    ];

  constructor() { }


    public getAllStudents(): any {
        return new Observable(observer => {
            setTimeout(() => observer.next(this.students), 1000);
        });
    }




}
