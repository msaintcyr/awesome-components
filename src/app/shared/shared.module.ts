import { CommonModule, NgFor, NgIf } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from './material.module';
import { ShortenPipe } from './pipes/shorten.pipe';
import { UsernamePipe } from './pipes/username.pipe';
import { TimeAgoPipe } from './pipes/time-ago';
import { HighlightDirective } from './directives/highlight.directive';
import { RouterLink } from '@angular/router';

@NgModule({
  declarations: [

  ],
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
    NgFor
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
    NgFor
  ]
})
export class SharedModule { }
