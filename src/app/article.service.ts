import { Injectable } from '@angular/core';
import { Article } from './article';
import { Articles } from './mock-articles';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';

@Injectable()
export class ArticleService {

  getArticles(): Observable<Article[]> {
    return of(Articles);
  }

  constructor() { }

}
