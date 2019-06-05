import { Component, OnInit } from '@angular/core';

import { Article } from '../article';
import { BoardService } from '../board.service';

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.css']
})
export class BoardComponent implements OnInit {

  articles: Article[];

  constructor(private boardService: BoardService) { }

  ngOnInit() {
    this.getArticles();
  }

  getArticles(): void {
    this.boardService.getArticles().subscribe(articles => this.articles = articles);
  }
}
