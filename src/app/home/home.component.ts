import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  @ViewChild('f') signupForm: NgForm;
  answer: string = "";
  genders = ["Male", "Female"];
  user = {
   username: '',
   email: '',
   secrect: '',
   questionAnswer: '',
   gender: '',  
  }
  formSubmitted: boolean = false;
  constructor() { }

  ngOnInit(): void {
  }
  // onSubmit(form: NgForm){
  //   console.log(form);
    
  // }

  onSuggestName(){
    let suggestName = "Superuser";
    // this.signupForm.setValue({ // set value for all input have ngModel
    //   userData: {
    //     username: suggestName,
    //     email: ''
    //   },
    //   questionAnswer: '',
    //   secret: 'teacher',
    //   gender: 'Female'
    // })
    this.signupForm.form.patchValue({
      userData: {
        username: suggestName,
      }
    })
  }
  
  onSubmit(){
    this.formSubmitted = this.signupForm.submitted;
    console.log(this.signupForm);
    this.user.username = this.signupForm.value.userData.username;
    this.user.email = this.signupForm.value.userData.email;
    this.user.secrect = this.signupForm.value.secret;
    this.user.questionAnswer = this.signupForm.value.questionAnswer;
    this.user.gender = this.signupForm.value.gender;
    this.signupForm.reset();
  }
}
