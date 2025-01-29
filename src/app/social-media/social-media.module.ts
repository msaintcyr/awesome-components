import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { PostsResolver } from './resolvers/posts.resolver';
import { PostsService } from './services/posts.service';
import { SocialMediaRoutingModule } from './social-media-routing.module';
import { PostListComponent } from './components/post-list/post-list.component';

@NgModule({
  declarations: [

  ],
  imports: [
    CommonModule,
    SocialMediaRoutingModule,
    PostListComponent
  ],
  providers: [
    PostsService,
    PostsResolver
  ]
})
export class SocialMediaModule { }
