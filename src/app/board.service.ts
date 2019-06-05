import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';

import { Article } from './article';

@Injectable({
  providedIn: 'root'
})
export class BoardService {

  private articleUrl = 'https://35.184.3.252/api/articles';

  constructor(
    private http: HttpClient
  ) { }
  
  getArticles(): Observable<Article[]> {
    return this.http.get<Article[]>(this.articleUrl)
      .pipe(
        tap(_ => console.log(_))
      );
  }
}
