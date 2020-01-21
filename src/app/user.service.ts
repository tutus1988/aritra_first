import { Injectable } from '@angular/core';
import { v4 as uuid } from 'uuid';
import { ToastrService } from 'ngx-toastr';


@Injectable({
  providedIn: 'root'
})
export class UserService {
  

  constructor(
    private toastr: ToastrService
  ) { 
    
  }

  login(sendData){
    console.log('getting data in service......',sendData);
    let email = sendData.email;
    let pswd = sendData.pswd;
    if(email == "abir.adak16@gmail.com" && pswd == "12345"){
      let id = uuid();
      localStorage.setItem("ID",id);
      return true;
    }
    else{
      return false;
    }
  }

  alertForSuccess(message,title){
    this.toastr.success(message, title);
  }
  alertForWarning(message,title){
    this.toastr.warning(message, title);
  }
  alertFordanger(message,title){
    this.toastr.error(message, title);
  }
}
