import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Member } from '../models/member';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
}


@Injectable({
  providedIn: 'root'
})
export class MembersService {

  membersUrl: string = '';
  membersLimit = '?_limit=5';

  constructor(private http: HttpClient) { }

  // Get Members
  getMembers(): Observable<Member[]> {
    return this.http.get<Member[]>(`${this.membersUrl}${this.membersLimit}`);
  }
}
