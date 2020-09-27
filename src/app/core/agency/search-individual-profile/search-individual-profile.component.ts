import { Component, OnInit } from "@angular/core";
import { BsModalRef, BsModalService } from "ngx-bootstrap";
import Swal from "sweetalert2";

@Component({
  selector: "app-search-individual-profile",
  templateUrl: "./search-individual-profile.component.html",
  styleUrls: ["./search-individual-profile.component.scss"],
})
export class SearchIndividualProfileComponent implements OnInit {
  // Modal
  modal: BsModalRef;
  modalConfig = {
    keyboard: true,
    class: "modal-dialog-centered gray",
  };

  showCarian = false;
  constructor() {}

  ngOnInit(): void {}

  cariIndividu() {
    this.showCarian = true;
    this.successAlert("Berjaya cari individu!");
  }

  successAlert(task) {
    Swal.fire({
      title: "Success",
      text: task,
      icon: "success",
      // showCancelButton: true,
      confirmButtonText: "Okay",
      // cancelButtonText: "No, keep it",
    });
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
