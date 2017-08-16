import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Rx';
import { Subject } from 'rxjs/Rx'; //multicast observable

@Component({
  selector: 'app-subject',
  templateUrl: './subject.component.html',
  styleUrls: ['./subject.component.css']
})
export class SubjectComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
