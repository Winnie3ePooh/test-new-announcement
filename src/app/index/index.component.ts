import { Component, OnInit } from '@angular/core';

import { NewsService } from './news.service';
import {News} from '../models/news';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css'],
   providers: [NewsService]
})
export class IndexComponent implements OnInit {

  news: News[];

  constructor(
    private newsService: NewsService
  ) { }

  ngOnInit() {
    this.getNews();
  }

  getNews(): void {
    this.newsService.getNews().subscribe(
      news => this.news = news
    );
  }

}
