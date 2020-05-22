import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

  public searchString: string;

  constructor(
     // tslint:disable-next-line: variable-name
     private _route: ActivatedRoute,
     // tslint:disable-next-line: variable-name
     private _router: Router
  ) { }

  ngOnInit() {
  }

  goSearch() {
    this._router.navigate(['/buscar', this.searchString]);
  }

}
