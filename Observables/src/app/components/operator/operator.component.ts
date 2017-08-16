import { Component, OnInit } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable, Subject } from 'rxjs/Rx';

@Component({
  selector: 'app-operator',
  templateUrl: './operator.component.html',
  styleUrls: ['./operator.component.css']
})
export class OperatorComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  	const source$ = Observable.interval(1500).take(5);
  	source$.subscribe(
  			e => console.log(e)
  		);
  }

}
