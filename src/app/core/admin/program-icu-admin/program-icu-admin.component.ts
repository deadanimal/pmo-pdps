import { Component, OnInit, TemplateRef } from "@angular/core";
import { BsModalRef, BsModalService } from "ngx-bootstrap";
import Swal from "sweetalert2";

@Component({
  selector: "app-program-icu-admin",
  templateUrl: "./program-icu-admin.component.html",
  styleUrls: ["./program-icu-admin.component.scss"],
})
export class ProgramIcuAdminComponent implements OnInit {
  // Modal
  modal: BsModalRef;
  modalConfig = {
    keyboard: true,
    class: "modal-dialog-centered gray",
  };

  showSubKategori = false;

  constructor(private modalService: BsModalService) {}

  ngOnInit(): void {}

  openModal(modalRef: TemplateRef<any>) {
    // if (row) {
    //   console.log(row);
    //   this.editActionForm.patchValue(row);
    // }
    this.modal = this.modalService.show(
      modalRef,
      Object.assign({}, { class: "gray modal-xl" })
    );
    // this.modal = this.modalService.show(modalRef, this.modalConfig);
  }

  closeModal() {
    this.modal.hide();
    // this.editActionForm.reset();
  }
  tambahSubKategori() {
    this.showSubKategori = true;
  }

  successAlert(task) {
    // Swal.fire({
    //   title: "Success",
    //   text: "Successfully " + task,
    //   type: "success",
    //   buttonsStyling: 'confirm',
    //   confirmButtonClass: "btn btn-success",
    //   confirmButtonText: "Close",
    // });
  }

  confirm() {
    Swal.fire({
      title: "Are you sure?",
      text: "You will not be able to recover this imaginary file!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonText: "Yes, delete it!",
      cancelButtonText: "No, keep it",
    }).then((result) => {
      if (result.value) {
        Swal.fire(
          "Deleted!",
          "Your imaginary file has been deleted.",
          "success"
        );
        // For more information about handling dismissals please visit
        // https://sweetalert2.github.io/#handling-dismissals
      } else if (result.dismiss === Swal.DismissReason.cancel) {
        Swal.fire("Cancelled", "Your imaginary file is safe :)", "error");
      }
    });
  }
}
