import { Component, OnInit } from '@angular/core';
import { Candidate } from '../model/candidate.model';
import { CandidateService } from '../service/candidate.service';

@Component({
  selector: 'app-candidates',
  templateUrl: './candidates.component.html',
  styleUrls: ['./candidates.component.css']
})
export class CandidatesComponent implements OnInit {
  Allcandidate: Candidate[];
  shortListCandidate = null;

  constructor(private candidateService: CandidateService) { }

  ngOnInit() {
    this.getAllcandidates();
  }


  getAllcandidates() {
    this.candidateService.getAllCandidate().subscribe(
      (data:Candidate[]) => {
        this.Allcandidate = data
      }
    )
  }

  
  // onShortlis() {
  //   this.Allcandidate.push(this.shortListCandidate);
  //   console.log(this.shortListCandidate);
  // }





}
