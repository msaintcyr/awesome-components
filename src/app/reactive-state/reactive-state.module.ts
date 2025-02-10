import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { Routes } from '@angular/router';
import { SharedModule } from '../shared/shared.module';
import { CandidateListComponent } from './components/candidate-list/candidate-list.component';
import { SingleCandidateComponent } from './components/single-candidate/single-candidate.component';
import { ReactiveStateRoutingModule } from './reactive-state-routing.module';
import { CandidatesService } from './services/candidates.service';

const routes: Routes = [
  { path: 'candidates', component: CandidateListComponent },
  { path: 'candidates/:id', component: SingleCandidateComponent },
  { path: '', pathMatch: 'full', redirectTo: 'candidates' }
];

@NgModule({
  declarations: [
  ],
  imports: [
    CommonModule,
    ReactiveStateRoutingModule,
    SharedModule
  ],
  exports: [
    SharedModule
  ],
  providers: [
    CandidatesService
  ]
})
export class ReactiveStateModule { }
