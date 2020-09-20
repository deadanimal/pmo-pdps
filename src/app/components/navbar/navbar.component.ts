import { Component, OnInit } from "@angular/core";
import { Router, NavigationEnd } from "@angular/router";

@Component({
  selector: "app-navbar",
  templateUrl: "./navbar.component.html",
  styleUrls: ["./navbar.component.scss"],
})
export class NavbarComponent implements OnInit {
  isCollapsed = true;

  // slider
  slider1 = "assets/img/brand/banner.jpeg";
  slider2 = "assets/img/brand/banner2.png";

  constructor(private router: Router) {
    router.events.subscribe((val) => {
      this.isCollapsed = true;
    });
  }
  mobileView() {
    if (window.innerWidth < 992) {
      return true;
    }
    return false;
  }
  ngOnInit() {}
}
