import { AsyncPipe, CommonModule, NgFor, NgIf } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { HighlightDirective } from './directives/highlight.directive';
import { MaterialModule } from './material.module';
import { ShortenPipe } from './pipes/shorten.pipe';
import { TimeAgoPipe } from './pipes/time-ago';
import { UsernamePipe } from './pipes/username.pipe';
import { MatError } from '@angular/material/form-field';

@NgModule({
  imports: [
    CommonModule,
    RouterLink,
    MaterialModule,
    ReactiveFormsModule,
    ShortenPipe,
    UsernamePipe,
    TimeAgoPipe,
    HighlightDirective,
    NgIf,
    NgFor,
    AsyncPipe
  ],
  exports: [
    RouterLink,
    MaterialModule,
    ReactiveFormsModule,
    ShortenPipe,
    UsernamePipe,
    TimeAgoPipe,
    HighlightDirective,
    NgIf,
    NgFor,
    AsyncPipe
  ]
})
export class SharedModule { }
