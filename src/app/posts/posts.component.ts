import { Component, OnInit } from '@angular/core';
import { PostService } from './post/service/post.service';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css'],
})
export class PostsComponent implements OnInit {
  public posts: any;

  constructor(private postService: PostService) {}

  ngOnInit(): void {
    this.postService.findAll().subscribe((res) => {
      console.log(res);
      this.posts = res;
    });
  }
}
