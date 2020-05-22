import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { ArticleService } from '../../services/article.service';
import { Article } from 'src/app/models/article';
import { Global } from 'src/app/services/global';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css'],
  providers: [ ArticleService ]
})
export class ArticleComponent implements OnInit {

  public article: Article;
  public url: string;

  constructor(
    // tslint:disable-next-line: variable-name
    private _articleService: ArticleService,
    // tslint:disable-next-line: variable-name
    private _route: ActivatedRoute,
    // tslint:disable-next-line: variable-name
    private _router: Router
  ) { 
    this.url = Global.url;
  }

  ngOnInit() {
    this._route.params.subscribe(params => {
      const id = params.id;

      this._articleService.getArticle(id).subscribe(
        response => {
          if (response.article) {
            this.article = response.article;
          } else {
            this._router.navigate(['/home']);
          }
        },
        error => {
          console.log(error);
        }
      );
    });
  }

  delete(id) {
    this._articleService.delete(id).subscribe(
      response => {
        this._router.navigate(['/blog']);
      },
      error => {
        console.log(error);
        this._router.navigate(['/blog']);
      }
    );
  }
}
