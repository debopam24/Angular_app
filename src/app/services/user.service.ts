import { Injectable } from '@angular/core';
import { User } from '../models/User';
import { Observable, of } from 'rxjs';
@Injectable()
// {
//   providedIn: 'root'
// })
export class UserService {
  users: User[];
  data: Observable<any>;
  constructor() { 
    this.users = [
      {
        firstName: 'John',
        lastName: 'Doe',
        email: 'john@gmail.com',
        isActive: true,
        registered: new Date('01/02/2019 08:30:00'),
        hide: true
    },
    {
      firstName: 'Kevin',
      lastName: 'Johnson',
      email: 'kelvin@gmail.com',
      isActive: false,
      registered: new Date('12/03/2019 03:10:00'),
      hide: true
    },
    {
      firstName: 'Karen',
      lastName: 'williams',
      email: 'karen@gmail.com',
      isActive: true,
      registered: new Date('10/01/2019 10:40:00'),
      hide: true
    }
    ];
  }
  getData(){
    this.data = new Observable(observer => {
      setTimeout(() =>{
        observer.next(1);
      },1000);
      setTimeout(() =>{
        observer.next(2);
      },2000);
      setTimeout(() =>{
        observer.next(3);
      },3000);
      setTimeout(() =>{
        observer.next(4);
      },4000);
    });
    return this.data;
  }
  getUsers(): Observable<User[]> {
    return of(this.users);
  }
  addUser(user: User){
    this.users.unshift(user);
  }
}
