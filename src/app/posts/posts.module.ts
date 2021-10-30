import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PostComponent } from './post/post.component';
import { ButtonComponent } from './button/button.component';
import { PostsComponent } from './posts.component';

@NgModule({
  declarations: [PostComponent, ButtonComponent, PostsComponent],
  imports: [CommonModule],
})
export class PostsModule {}
