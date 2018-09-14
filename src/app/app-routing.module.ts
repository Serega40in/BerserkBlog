import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ArticlesComponent }      from './articles/articles.component';
import { DashboardComponent }   from './dashboard/dashboard.component';
import { ArticleDetailComponent }  from './article-detail/article-detail.component';

const routes: Routes = [
  { path: 'articles', component: ArticlesComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'detail/:id', component: ArticleDetailComponent },
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' }
];

@NgModule({
  exports: [ RouterModule ],
  imports: [ RouterModule.forRoot(routes) ]
})
export class AppRoutingModule {}
