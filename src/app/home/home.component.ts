import { Component, OnInit, ViewChild } from '@angular/core';
import { FormGroup, FormControl, Validators, FormArray } from '@angular/forms';
import { Observable } from 'rxjs';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  genders = ["Male", "Female"];
  signupForm: FormGroup;
  forbiddenUserNames: Array<string> = ["Sondn", "Anna"];
  constructor() { }

  ngOnInit(): void {
    this.signupForm = new FormGroup({
      'userData': new FormGroup({
        'username': new FormControl(null, [Validators.required, this.forbiddenNames.bind(this)]),
        'email': new FormControl(null, [Validators.required, Validators.email], this.forbiddenEmails),
      }),
      'gender': new FormControl('Male'),
      'hobbies': new FormArray([]),
    });
    // this.signupForm.statusChanges.subscribe(
    //   status => console.log(status),
    // )
    // this.signupForm.valueChanges.subscribe(
    //   values => console.log(values),      
    // )
    // this.signupForm.setValue({
    //   'userData': {
    //     'username': 'Max',
    //     'email': 'sondn@gmail.com'
    //   },
    //   'gender': "Female",
    //   'hobbies': []      
    // })
    this.signupForm.patchValue({
      'userData': {
        'username': 'Max'
      }
    })
  }
  
  onSubmit(){
    console.log(this.signupForm);
  }

  onAddHobby(){
    const control = new FormControl(null, [Validators.required]);
    (<FormArray>this.signupForm.get('hobbies')).push(control);
  }

  forbiddenNames(control: FormControl): {[s: string]: boolean}{    
    if(this.forbiddenUserNames.indexOf(control.value) !== -1){
      return {'nameIsForbidden': true};
    }
    return null;
  }
  
  forbiddenEmails(control: FormControl): Promise<any> | Observable<any>{
    let promise = new Promise((resolve, reject) => {
      setTimeout(() => {
        if(control.value === 'test@email.com'){
          resolve({'emailIsForbidden': true});
        }else{
          resolve(null);
        }
      },2000);
    })
    return promise;
  }
}
