import {Component, OnInit} from '@angular/core';
import { BrowserDynamicTestingModule } from '@angular/platform-browser-dynamic/testing';
import { unescapeIdentifier } from '@angular/compiler';
import{User} from '../../models/User';
@Component({
    selector: 'app-user',
    templateUrl: './user.component.html',
    styleUrls: ['./user.component.css'],
})
export class UserComponent implements OnInit{ 
//Properties
// firstName: string;
// lastName: string;
// age: number;
// address;
// foo: any;
// hasKids: boolean;
// numberArr: number[];
// stringArr: string[];
// mixArr: any[];
// myTup: [string,number,boolean];
// unuse: void;
// u: undefined;
// n: null;
user: User;
//Methods
constructor(){
    //console.log('Hello User...');
    // this.sayHello();
    // console.log(this.age);
    // this.hasBirthday();
    // console.log(this.age);
//     this.firstName = 'John';
//     this.lastName = 'Smith';
//     this.age = 30;
//     this.address = {
//         street: '44 Murari Mohan Mitra Road',
//         state: 'West Bengal',
//         city: 'Kolkata'
//     };
//     this.foo = 24;
//     this.hasKids = true;
//     this.numberArr = [2,4,6,8,10];
//     this.stringArr = ['Hello','John'];
//     this.mixArr = ['Hello',24,'John',true];
//     this.myTup = ['Hello',56,true];
//     this.unuse = undefined;
//     this.u = undefined;
//     this.n = null;
//     this.addNumbers(2,3);

}
ngOnInit(){
    this.user = {
        firstName: 'John',
        lastName: 'Doe',
        email: 'john@gmail.com'
    }
}
// sayHello(){
//     console.log(`Hello ${this.firstName}`);
// }
// hasBirthday(){
//     this.age += 1;
// }
// addNumbers(num1: number,num2: number): number{
//     return num1 + num2;
// }
}
