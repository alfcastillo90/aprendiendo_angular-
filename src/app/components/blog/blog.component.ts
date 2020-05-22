import { Component, OnInit } from '@angular/core';
import { ArticleService } from '../../services/article.service';
import { Article } from 'src/app/models/article';
import { Global } from 'src/app/services/global';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css'],
  providers: [ArticleService]
})
export class BlogComponent implements OnInit {

  public articles: Article[];
  public url: string;

  constructor(
    // tslint:disable-next-line: variable-name
    private _articleService: ArticleService
  ) {
    this.url = Global.url;
   }

  ngOnInit() {
    console.log(this._articleService.pruebas());

    this._articleService.getArticles().subscribe(
      response => {
        if (response.articles) {
          this.articles = response.articles;
        }
      },
      error => {
        console.log(error);
      }
    );
  }

}
