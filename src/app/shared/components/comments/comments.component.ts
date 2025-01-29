import { animate, group, query, state, style, transition, trigger } from '@angular/animations';
import { NgFor, NgIf } from '@angular/common';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { Comment } from '../../../core/models/comment.model';
import { SharedModule } from '../../shared.module';

@Component({
  selector: 'app-comments',
  imports: [
    SharedModule,
    NgIf,
    NgFor
  ],
  templateUrl: './comments.component.html',
  styleUrl: './comments.component.scss',
  animations: [
    trigger('listItem', [
      state('default', style({
        transform: 'scale(1)',
        'background-color': 'white',
        'z-index': 1
      })),
      state('active', style({
        transform: 'scale(1.05)',
        'background-color': 'rgb(201, 157, 242)',
        'z-index': 2
      })),
      transition('default => active', [
        animate('100ms ease-in-out')
      ]),
      transition('active => default', [
        animate('500ms ease-in-out')
      ]),
      // transition('void => *', [
      transition(':enter', [
        query('.comment-text, .comment-date', [
          style({
            opacity: 0
          }),
        ]),
        style({
          transform: 'translateX(-100%)',
          opacity: 0,
          'background-color': 'rgb(201, 157, 242)',
        }),
        animate('250ms ease-out', style({
          transform: 'translateX(0)',
          opacity: 1,
          'background-color': 'white',
        })),
        group([
          /*  sequence([
             animate('250ms', style({
               'background-color': 'rgb(255,7,147)'
             })),
             animate('250ms', style({
               'background-color': 'white'
             }))
           ]), */
          query('.comment-text', [
            animate('250ms', style({
              opacity: 1
            }))
          ]),
          query('.comment-date', [
            animate('500ms', style({
              opacity: 1
            }))
          ])
        ])
      ])
    ])
  ]
})
export class CommentsComponent implements OnInit {

  @Input() comments!: Comment[];
  @Output() newComment = new EventEmitter<string>();

  commentCtrl!: FormControl;
  listItemAnimationState: 'default' | 'active' = 'default';
  animationStates: { [key: number]: 'default' | 'active' } = {};

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.commentCtrl = this.formBuilder.control('', [Validators.required, Validators.minLength(10)]);
    for (let index in this.comments) {
      this.animationStates[index] = 'default';
    }
  }

  /*   onLeaveComment() {
      if (this.commentCtrl.invalid) {
        return;
      }
      this.newComment.emit(this.commentCtrl.value);
      this.commentCtrl.reset();
    } */
  onLeaveComment() {
    if (this.commentCtrl.invalid) {
      return;
    }
    const maxId = Math.max(...this.comments.map(comment => comment.id));
    this.comments.unshift({
      id: maxId + 1,
      comment: this.commentCtrl.value,
      createdDate: new Date().toISOString(),
      userId: 1
    });
    this.newComment.emit(this.commentCtrl.value);
    this.commentCtrl.reset();
  }

  onListItemMouseEnter(index: number) {
    // this.listItemAnimationState = 'active'
    this.animationStates[index] = 'active';
  }

  onListItemMouseLeave(index: number) {
    // this.listItemAnimationState = 'default';
    this.animationStates[index] = 'default';
  }

}
