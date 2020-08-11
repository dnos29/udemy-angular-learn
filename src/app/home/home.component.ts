import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { PostSevice } from './post.service';
import { Post } from './post.model';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit, OnDestroy {
  postForm: FormGroup;
  posts: Post[] = [];
  isLoading: boolean = false;
  error = null;
  private errorSubcription: Subscription;

  constructor(private http: HttpClient,
    private postSevice: PostSevice) { }

  ngOnInit(){
    this.errorSubcription = this.postSevice.error.subscribe(error => this.error = error);
    this.isLoading = true;
    this.initForm();
    this.fetchPosts();
  }

  initForm(){
    this.postForm = new FormGroup({
      'title': new FormControl(null, Validators.required),
      'content': new FormControl(null, Validators.required),
    })
  }

  onFetchPosts(){
    this.fetchPosts();
  }

  onClearPosts(){
    this.postSevice.delelePost().subscribe(data => console.log(data));
  }

  onSubmit(){
    this.postSevice.createPostAndFetchPost({...this.postForm.value});
  }
  onHandleErrors(){
    this.error = null;
  }
  private fetchPosts(){
    this.isLoading = true;
    this.postSevice.fetchPosts().subscribe(
      data => {
        this.isLoading = false;
        this.posts = data;
      },
      error => {
        this.isLoading = false;
        this.error = error.message;
      }
    )
  }
  ngOnDestroy(){
    this.errorSubcription.unsubscribe();
  }
}
