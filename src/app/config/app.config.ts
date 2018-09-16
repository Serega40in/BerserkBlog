import {InjectionToken} from '@angular/core';

import {IAppConfig} from './iapp.config';

export let APP_CONFIG = new InjectionToken('app.config');

export const AppConfig: IAppConfig = {
  routes: {
    articles: 'articles',
    error404: '404'
  },
  endpoints: {
    articles: 'https://berserk-db.herokuapp.com/articles'
  },
  votesLimit: 3,
  topHeroesLimit: 4,
  snackBarDuration: 3000,
  repositoryURL: 'https://github.com/Serega40in/BerserkBlog'
};
