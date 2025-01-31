import { AsyncPipe, CommonModule, NgFor, NgIf } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { HighlightDirective } from './directives/highlight.directive';
import { MaterialModule } from './material.module';
import { ShortenPipe } from './pipes/shorten.pipe';
import { TimeAgoPipe } from './pipes/time-ago';
import { UsernamePipe } from './pipes/username.pipe';
import { TimeAgoPipe } from './pipes/time-ago';
import { HighlightDirective } from './directives/highlight.directive';
import { RouterLink } from '@angular/router';

@NgModule({
  imports: [
    CommonModule,
    RouterLink,
    MaterialModule,
    ReactiveFormsModule,
    ShortenPipe,
    UsernamePipe,
    TimeAgoPipe,
    HighlightDirective
  ],
  exports: [
    RouterLink,
    MaterialModule,
    ReactiveFormsModule,
    ShortenPipe,
    UsernamePipe,
    TimeAgoPipe,
    HighlightDirective
  ]
})
export class SharedModule { }
