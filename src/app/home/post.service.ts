import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Subject, throwError } from 'rxjs';
import { map, catchError, tap } from 'rxjs/operators';

import { Post } from './post.model';


@Injectable({
    providedIn: 'root',
})
export class PostSevice{
    error = new Subject<string>();
    
    constructor(private http: HttpClient){}

    createPostAndFetchPost(post: Post){
        return this.http
      .post('https://angular-2ce4e.firebaseio.com/posts.json', post).subscribe(
          (resData) => console.log(resData),
          error => this.error.next(error.message),
      );
    }

    fetchPosts(){
        let searchParams = new HttpParams();
        searchParams.append('status', '1');
        searchParams.append('type', 'admin');
        return this.http.get('https://angular-2ce4e.firebaseio.com/posts.json',
                    {
                        headers: new HttpHeaders({'Custom-Header': 'Hello'}),
                        // params: {'status': '1'},
                        params: new HttpParams().set('status1', "1"),
                    }
                )
            .pipe(
            map((data: { [key: string]: Post}) => {
                let tempArr: Post[] = [];
                for(let key in data){
                tempArr.push({id: key, ...data[key]});
                }
                return tempArr;
            }),
            catchError(err => {
                return throwError(err);
            })
            )
    }

    delelePost(){
        return this.http.delete('https://angular-2ce4e.firebaseio.com/posts.json',{
            observe: 'events', // observe: 'response', observe: 'body',
            responseType: 'json'
        })
            .pipe(
                tap(event => {
                    console.log(event)
                })
            );
    }
}