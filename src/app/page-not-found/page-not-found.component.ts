import { Route, Data } from '@angular/compiler/src/core';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-page-not-found',
  templateUrl: './page-not-found.component.html',
  styleUrls: ['./page-not-found.component.css']
})
export class PageNotFoundComponent implements OnInit {
  message: string;
  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.message = this.route.snapshot.data['message'];
    this.route.data.subscribe(
      (data: Data)  => {
        this.message = data['message']
      }
    )
  }

}
