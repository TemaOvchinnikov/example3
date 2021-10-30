import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Post } from '../interface/post';

@Injectable({
  providedIn: 'root',
})
export class PostService {
  private SERVER_URL = 'http://localhost:8000/api';

  constructor(private http: HttpClient) {}

  //findAll(): Observable<Post[]> {
  findAll(): Observable<any> {
    return this.http.get<Post>(`${this.SERVER_URL}/posts`);
  }
}
