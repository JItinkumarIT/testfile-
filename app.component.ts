import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'form-l15';
   userName:string="";
   userPolicyNumber:any="";
   userDate:number=0;
   userAmount:number=0;
   userEmail:string="";
   userPhone:number=0;


  getUser(data:any)
  {
    console.log(data);
    this.userName=data.userName;
    this.userPolicyNumber=data.userPolicyNumber;
    this.userDate=data.userDate;
    this.userAmount=data.userAmount;
    this.userEmail=data.userEmail;
    this.userPhone=data.userPhone;
  
    if(this.userPolicyNumber.length > 12)
    {
      alert("please enter a valid policy number between 1 to 12");
    }
    else if(this.userName.length < 5 || this.userName.length >80)
    {
      alert("Please enter a valid Name between 5 to 80 character");
    }
    else if(`${this.userPhone}`.length > 10)
    {
      alert("Please enter a valid phone number");
    }
    else{
      alert("registered successfully");
    }
    
    



  }
  
}
