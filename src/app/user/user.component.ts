import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { User } from './user.model';
import { interval, Subscription } from 'rxjs';

const users: User[] = [
  {id: 1, name: "sondn"},
  {id: 2, name: "dnos"}
]
@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit, OnDestroy {
  user: User;
  firstSubcription: Subscription
  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.firstSubcription = interval(2000).subscribe(counter => {
      console.log(counter);

    })
  }

  ngOnDestroy(){
    console.log("ngOnDestroy");
    this.firstSubcription.unsubscribe()
  }

}
