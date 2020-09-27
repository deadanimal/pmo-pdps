import { Component, OnInit, ViewChild, TemplateRef } from "@angular/core";
import { BsModalRef, BsModalService } from "ngx-bootstrap";
import { Router, ActivatedRoute } from "@angular/router";

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.scss"],
})
export class HomeComponent implements OnInit {
  // Modal
  modal: BsModalRef;
  modalConfig = {
    keyboard: true,
    class: "modal-dialog-centered gray modal-lg",
  };
  @ViewChild("addModal", { static: true }) modalTemplate: TemplateRef<any>;

  // slider
  slider1 = "assets/img/brand/banner.jpeg";
  slider2 = "assets/img/brand/banner2.png";

  genderShow: boolean = false;
  buttonShow: boolean = false;
  programShow: boolean = false;
  dashProgKanakShow: boolean = false;
  dashProgRemajaShow: boolean = false;
  dashProgWargaShow: boolean = false;
  dashProgKategoriOkuShow: boolean = false;
  dashProgKategoriKesShow: boolean = false;
  dashProgKategoriElseShow: boolean = false;

  constructor(
    private modalService: BsModalService,
    private router: Router,
    private _route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.openModal(this.modalTemplate, undefined);
  }

  openModal(modalRef: TemplateRef<any>, row) {
    // if (row) {
    //   console.log(row);
    //   this.editActionForm.patchValue(row);
    // }
    // this.modal = this.modalService.show(
    //   modalRef,
    //   Object.assign({}, { class: "gray modal-xl" })
    // );
    this.modal = this.modalService.show(modalRef, this.modalConfig);
  }

  closeModal() {
    this.modal.hide();
    // this.editActionForm.reset();
  }

  agediv() {
    this.genderShow = true;
  }

  genderdiv() {
    this.buttonShow = true;
  }

  programdiv() {
    this.programShow = true;
  }

  dashProgdiv(para) {
    if (para == "k") {
      this.dashProgKanakShow = true;
      this.dashProgWargaShow = false;
      this.dashProgRemajaShow = false;
      this.dashProgKategoriOkuShow = false;
      this.dashProgKategoriKesShow = false;
      this.dashProgKategoriElseShow = false;
    } else if (para == "r") {
      this.dashProgRemajaShow = true;
      this.dashProgKanakShow = false;
      this.dashProgWargaShow = false;
      this.dashProgKategoriOkuShow = false;
      this.dashProgKategoriKesShow = false;
      this.dashProgKategoriElseShow = false;
    } else if (para == "w") {
      this.dashProgWargaShow = true;
      this.dashProgRemajaShow = false;
      this.dashProgKanakShow = false;
      this.dashProgKategoriOkuShow = false;
      this.dashProgKategoriKesShow = false;
      this.dashProgKategoriElseShow = false;
    }
  }

  dashProgKategoridiv(value) {
    if (value == "oku") {
      this.dashProgKategoriOkuShow = true;
      this.dashProgKategoriKesShow = false;
      this.dashProgKategoriElseShow = false;
    } else if (value == "kesi") {
      this.dashProgKategoriKesShow = true;
      this.dashProgKategoriOkuShow = false;
      this.dashProgKategoriElseShow = false;
    } else {
      this.dashProgKategoriElseShow = true;
      this.dashProgKategoriOkuShow = false;
      this.dashProgKategoriKesShow = false;
    }
  }

  navigatePage(path: String) {
    // let qq = "db17a36a-1da6-4919-9746-dfed8802ec9d";
    if (path == "agency/programs") {
      this.closeModal();
      return this.router.navigate([path]);
    }
  }
}
