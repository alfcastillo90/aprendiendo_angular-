import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { Article } from 'src/app/models/article';
import { ArticleService } from 'src/app/services/article.service';
import { Global } from '../../services/global';

@Component({
  selector: 'app-article-edit',
  templateUrl: '../article-new/article-new.component.html',
  styleUrls: ['./article-edit.component.css'],
  providers: [ ArticleService ]
})
export class ArticleEditComponent implements OnInit {

  public article: Article;
  public status: string;
  public isEdit: boolean;
  public pageTitle: string;
  public url: string;
  afuConfig = {
    multiple: false,
    formatsAllowed: '.jpg,.png,.gif,.jpeg',
    maxSize: '50',
    uploadAPI:  {
      url: Global.url + 'upload-image',
    },
    theme: 'attachPin',
    hideProgressBar: true,
    hideResetBtn: true,
    hideSelectBtn: false,
    replaceTexts: {
      selectFileBtn: 'Select Files',
      resetBtn: 'Reset',
      uploadBtn: 'Upload',
      dragNDropBox: 'Drag N Drop',
      attachPinBtn: 'Sube tu imagen para el artículo...',
      afterUploadMsg_success: 'Successfully Uploaded !',
      afterUploadMsg_error: 'Upload Failed !'
    }
  };

  constructor(
    // tslint:disable-next-line: variable-name
    private _articleService: ArticleService,
     // tslint:disable-next-line: variable-name
    private _route: ActivatedRoute,
     // tslint:disable-next-line: variable-name
    private _router: Router
  ) {
    this.article = new Article('', '', null, '', null, '');
    this.isEdit = true;
    this.pageTitle = 'Editar artículo';
    this.url = Global.url;
  }
  ngOnInit() {
    this.getArticle();
  }

  onSubmit() {
    this._articleService.update(this.article._id, this.article).subscribe(
      response => {
        if (response.result === 'success') {
          this.status = 'success';
          this.article = response.article;
          this._router.navigate(['/blog/articulo', this.article._id]);
        } else {
          this.status = 'error';
        }
      },
      error => {
        console.log(error);
        this.status = 'error';
      }
    );
  }

  imageUpload(data) {
    const imageData = JSON.parse(data.response);
    this.article.image = imageData.image;
  }

  getArticle() {
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

}
