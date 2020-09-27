import { Component, OnInit, TemplateRef } from "@angular/core";
import { Router } from "@angular/router";
import { BsModalRef, BsModalService } from "ngx-bootstrap";
import Glide from "@glidejs/glide";

@Component({
  selector: "app-navbar",
  templateUrl: "./navbar.component.html",
  styleUrls: ["./navbar.component.scss"],
})
export class NavbarComponent implements OnInit {
  // Modal
  modal: BsModalRef;
  modalConfig = {
    keyboard: true,
    // class: "modal-dialog-centered gray modal-lg",
  };

  isCollapsed = true;

  // slider
  slider1 = "assets/img/brand/banner.jpeg";
  slider2 = "assets/img/brand/banner2.png";
  slider3 = "assets/img/brand/banner3.jpg";
  slider4 = "assets/img/brand/banner4.png";
  imgAvatar = "assets/img/faces/christian.jpg";

  // color
  color1 = "assets/img/icons/color1.png"; // 1ebebb
  color2 = "assets/img/icons/color2.png"; // 982d58
  color3 = "assets/img/icons/color3.png"; // e06100

  // defaukt color
  colordiv = "#172b4d";

  constructor(private modalService: BsModalService, private router: Router) {
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
      startAt: 2,
      focusAt: 2,
      perTouch: 1,
      perView: 4,
    }).mount();

    // Testimonial Carousel
    new Glide(".testimonial-glide", {
      type: "carousel",
      startAt: 2,
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

  getColorCOde(color) {
    console.log(color);
    if (color == "1ebebb") {
      this.colordiv = "#1ebebb";
    } else if (color == "982d58") {
      this.colordiv = "#982d58";
    } else if (color == "e06100") {
      this.colordiv = "#e06100";
    }
  }

  openModal(modalRef: TemplateRef<any>) {
    this.modal = this.modalService.show(
      modalRef,
      Object.assign({}, { class: "gray modal-lg" })
    );
  }

  openModalsm(modalRef: TemplateRef<any>) {
    this.modal = this.modalService.show(
      modalRef,
      Object.assign({}, { class: "modal-dialog-centered gray modal-sm" })
    );
  }

  openModalxl(modalRef: TemplateRef<any>) {
    this.modal = this.modalService.show(
      modalRef,
      Object.assign({}, { class: "modal-dialog-centered gray modal-xl" })
    );
  }

  closeModal() {
    this.modal.hide();
    // this.editActionForm.reset();
  }
}
