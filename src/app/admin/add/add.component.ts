import { Component, OnInit, Input } from '@angular/core';
import { Article } from '../../article';
import { ActivatedRoute, Router } from '@angular/router';
import { Location } from '@angular/common';
import { ArticleService }  from '../../article.service';
import { AppConfig } from '../../config/app.config';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {

  articles: Article[];

  constructor(private articleService: ArticleService,
              private router: Router,
                private location: Location) { }

  ngOnInit() {
    this.getArticles();
  }

  getArticles(): void {
    this.articleService.getArticles()
      .subscribe(articles => this.articles = articles);
  }

  add(title: string, img: string, content: string): void {
    title = title.trim();
    if (!title) { return; }
    this.articleService.addArticle({ title, img, content } as Article)
      .subscribe(article => {
        this.articles.push(article);
      });
  }

  delete(article: Article): void {
    this.articles = this.articles.filter(a => a !== article);
    this.articleService.deleteArticle(article).subscribe();
  }
    goBack(): void {
      this.location.back();
    }

}
