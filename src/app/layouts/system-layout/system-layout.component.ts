import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import Headroom from "headroom.js";

@Component({
  selector: 'app-system-layout',
  templateUrl: './system-layout.component.html',
  styleUrls: ['./system-layout.component.scss']
})
export class SystemLayoutComponent implements OnInit {

  constructor(
    public router: Router
  ) { }

  ngOnInit(): void {
    var headroom = new Headroom(document.querySelector('#navbar-main'), {
      offset: 300,
      tolerance: {
        up: 30,
        down: 30
      }
    })
    headroom.init()
  }

}
