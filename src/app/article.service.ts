import { Injectable } from '@angular/core';
import { Article } from './article';
import { Articles } from './mock-articles';
import { Observable, of } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root',
})
export class ArticleService {

  private articlesUrl = 'api/articles';

  getArticles(): Observable<Article[]> {
    return this.http.get<Article[]>(this.articlesUrl);
  }

  getArticle(id: number): Observable<Article> {
    const url = `${this.articlesUrl}/${id}`;
    return this.http.get<Article>(url);
  }

  /** PUT: update the article on the server */
  updateArticle (article: Article): Observable<any> {
    return this.http.put(this.articlesUrl, article, httpOptions);
  }

  /** POST: add a new article to the server */
  addArticle (article: Article): Observable<Article> {
    return this.http.post<Article>(this.articlesUrl, article, httpOptions);
  }

  /** DELETE: delete the article from the server */
  deleteArticle (article: Article | number): Observable<Article> {
    const id = typeof article === 'number' ? article : article.id;
    const url = `${this.articlesUrl}/${id}`;

    return this.http.delete<Article>(url, httpOptions);
  }

  constructor(
    private http: HttpClient) { }

}
