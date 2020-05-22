import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { Article } from 'src/app/models/article';
import { ArticleService } from 'src/app/services/article.service';
import { Global } from '../../services/global';

@Component({
  selector: 'app-article-new',
  templateUrl: './article-new.component.html',
  styleUrls: ['./article-new.component.css'],
  providers: [ ArticleService ]
})
export class ArticleNewComponent implements OnInit {

  public article: Article;
  public status: string;
  public pageTitle: string;
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
    this.pageTitle = 'Crear artículo';
  }

  ngOnInit() {
  }

  onSubmit() {
    this._articleService.create(this.article).subscribe(
      response => {
        if (response.result === 'success') {
          this.status = 'success';
          this.article = response.article;
          this._router.navigate(['/blog']);
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

}
