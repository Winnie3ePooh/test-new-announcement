import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import {Observable} from 'rxjs/Observable';
import {catchError, tap, map} from 'rxjs/operators';
import {of} from 'rxjs/observable/of';

import { News } from '../models/news';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable()
export class NewsService {

  private newsUrl = 'http://test.kamis.ru/api/news';

  constructor(
    private http: HttpClient
  ) { }

  getNews(): Observable<News[]> {
    return this.http.get<News[]>(this.newsUrl)
      .pipe(
        tap(news => console.log('success!')),
        catchError(this.handleError('getNews', []))
      );
  }

  private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(error); // log to console instead
      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }

}
