import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sales',
  templateUrl: './sales.component.html',
  styleUrls: ['./sales.component.css']
})
export class SalesComponent implements OnInit {

  headline: string = '';

  constructor(private _router: Router) { }

  ngOnInit() {
    this.headline = this._router.url;
  }

}
