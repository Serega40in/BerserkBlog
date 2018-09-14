import { Injectable } from '@angular/core';
import { Article } from './article';
import { Articles } from './mock-articles';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ArticleService {

  getArticles(): Observable<Article[]> {
    return of(Articles);
  }

  getArticle(id: number): Observable<Article> {        
    return of(Articles.find(article => article.id === id));
  }

  constructor() { }

}
