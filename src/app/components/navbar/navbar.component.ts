import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import Glide from "@glidejs/glide";

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
  slider3 = "assets/img/brand/banner3.png";
  slider4 = "assets/img/brand/banner4.png";
  imgAvatar = "assets/img/faces/christian.jpg";

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
  ngOnInit() {
    // Carousel
    new Glide(".glide", {
      type: "carousel",
      startAt: 0,
      focusAt: 2,
      perTouch: 1,
      perView: 4,
    }).mount();

    // Testimonial Carousel
    new Glide(".testimonial-glide", {
      type: "carousel",
      startAt: 0,
      focusAt: 2,
      perTouch: 1,
      perView: 4,
    }).mount();
  }

  navigatePage(path: String) {
    // let qq = "db17a36a-1da6-4919-9746-dfed8802ec9d";
    if (path == "agency/programs") {
      return this.router.navigate([path]);
    }
  }
}
