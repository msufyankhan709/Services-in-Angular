import { Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UsersDataService {

  constructor() { }

  getData(){
    return{
      name:"Sufyan",
      age:17,
      userId:1
    }
  }
}
