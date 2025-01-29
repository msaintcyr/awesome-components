import { DatePipe, NgIf, TitleCasePipe } from '@angular/common';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { CommentsComponent } from "../../../shared/components/comments/comments.component";
import { SharedModule } from '../../../shared/shared.module';
import { Post } from '../../models/post.model';

@Component({
  selector: 'app-post-list-item',
  imports: [
    TitleCasePipe,
    SharedModule,
    NgIf,
    CommentsComponent
  ],
  templateUrl: './post-list-item.component.html',
  styleUrl: './post-list-item.component.scss'
})
export class PostListItemComponent implements OnInit {

  @Input() post!: Post;
  @Output() postCommented = new EventEmitter<{ comment: string, postId: number }>();

  tempUser = { firstName: 'James', lastName: 'Bond' };

  constructor() { }

  ngOnInit(): void {

  }

  onNewComment(comment: string) {
    this.postCommented.emit({ comment, postId: this.post.id });
  }
}
