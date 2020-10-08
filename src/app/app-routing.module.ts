import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CandidatesComponent } from './candidates/candidates.component';
import { ShortlistCandiadteComponent } from './shortlist-candiadte/shortlist-candiadte.component';


const routes: Routes = [
  {path: 'allcandidate', component: CandidatesComponent},
  {path: 'shortlist-candidate', component: ShortlistCandiadteComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
