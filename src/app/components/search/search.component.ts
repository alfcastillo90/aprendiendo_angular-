import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { ArticleService } from 'src/app/services/article.service';
import { Article } from 'src/app/models/article';


@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css'],
  providers: [ArticleService]
})
export class SearchComponent implements OnInit {

  public articles: Article[];
  public search: string;

  constructor(
    // tslint:disable-next-line: variable-name
    private _articleService: ArticleService,
    // tslint:disable-next-line: variable-name
    private _route: ActivatedRoute,
    // tslint:disable-next-line: variable-name
    private _router: Router
  ) { }

  ngOnInit() {
    this._route.params.subscribe(params => {
      const search = params.search;
      this.search = search;

      this._articleService.search(search).subscribe(
        response =>  {
          if (response.articles) {
            this.articles = response.articles;
          } else {
            this._router.navigate(['/home']);
          }
        },
        error => {
          console.log(error);
          this.articles = [];
        }
      );
    });
  }

}
