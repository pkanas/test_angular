import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CandidatesComponent } from './candidates/candidates.component';
import { ShortlistCandiadteComponent } from './shortlist-candiadte/shortlist-candiadte.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './shared/material/material.module';
import { HttpClientModule } from '@angular/common/http';
import { CandidateService } from './service/candidate.service';

@NgModule({
  declarations: [
    AppComponent,
    CandidatesComponent,
    ShortlistCandiadteComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    HttpClientModule

  ],
  providers: [CandidateService],
  bootstrap: [AppComponent]
})
export class AppModule { }
