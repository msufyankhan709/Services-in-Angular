import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TestService {

  constructor() { }

  testData(){
    return{
      name:"Sufyan Khan",
      id:2,
      age:17
    }
  }
  testData2(){
    return{
      name:"Awais khan",
      id:3
    }
  }
}
