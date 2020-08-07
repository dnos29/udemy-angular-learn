import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { User } from './user.model';

const users: User[] = [
  {id: 1, name: "sondn"},
  {id: 2, name: "dnos"}
]
@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  user: User;

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.params.subscribe((params: Params) => {
      let id = +params.id;
      this.user = users.find(u => u.id === id);
    })
  }

}
