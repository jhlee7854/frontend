import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';

import { Member } from './member';

@Injectable({
  providedIn: 'root'
})
export class MemberService {

  private memberUrl = 'https://35.184.3.252/api/members';

  constructor(
    private http: HttpClient
  ) { }
  
  getMembers(): Observable<Member[]> {
    return this.http.get<Member[]>(this.memberUrl)
      .pipe(
        tap(_ => console.log(_))
      );
  }
}
