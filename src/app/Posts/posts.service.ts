import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';

import {Subject} from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class PostsService {
  subcomment=new Subject<boolean>();
  constructor(private _http:HttpClient) { }
  getPosts(){
    return this._http.get('http://localhost:3000/getposts');
  }
  getComments(id){
    
    console.log(id);
    var d={};
    d['id']=id;
    
    return this._http.post('http://localhost:3000/getcomments',d);
 
  }
  edit_post(post){
    this._http.post('http://localhost:3000/edit',post).subscribe((data)=>{
      console.log(data);
    });
  }
  click_like(like){
    this._http.post('http://localhost:3000/like',like).subscribe((data)=>{
      console.log(data);
    });
  }
  postComment(comment){
    return this._http.post('http://localhost:3000/comment',comment);
  }
  delete(id){
    var idbody={};
    idbody["id"]=id;
    console.log("delete");
    console.log(idbody);
    this._http.post('http://localhost:3000/delete',idbody).subscribe((data)=>{
      console.log(data);
    });
  }
}
