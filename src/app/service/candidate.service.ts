import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Candidate } from '../model/candidate.model';

@Injectable({
  providedIn: 'root'
})
export class CandidateService {

  constructor(private http: HttpClient) { }

  getAllCandidate() {
     return this.http.get<Candidate[]>('http://jsonplaceholder.typicode.com/users');
  }
}
