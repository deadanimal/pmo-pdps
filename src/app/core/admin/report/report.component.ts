import {
  Component,
  OnInit,
  ViewChild,
  TemplateRef,
  ElementRef,
} from "@angular/core";
import { BsModalRef, BsModalService } from "ngx-bootstrap";
import jsPDF from "jspdf";
import Swal from "sweetalert2";

@Component({
  selector: "app-report",
  templateUrl: "./report.component.html",
  styleUrls: ["./report.component.scss"],
})
export class ReportComponent implements OnInit {
  // Modal
  modal: BsModalRef;
  modalConfig = {
    keyboard: true,
    class: "modal-dialog-centered gray modal-xl",
  };

  @ViewChild("htmlData") htmlData: ElementRef;
  laporanSenaraiProg = [
    {
      id: 1,
      name: "Bantuan Sara Hidup",
      agensi: "MOF",
      teras: "",
      kumpsasaran: "Warga Emas",
      kategori: "Kebajikan Sosial",
      subkategori: "",
      jenismanfaat: "RM600",
      kekerapan: "Sekali",
      jumlahditerima: "RM600",
      jumlahbilanganpenerima: "1",
    },
  ];

  constructor(private modalService: BsModalService) {}

  ngOnInit(): void {}

  public openPdf() {
    let DATA = this.htmlData.nativeElement;
    let doc = new jsPDF("p", "pt", "a4");
    doc.fromHTML(DATA.innerHTML, 15, 15);
    doc.output("dataurlnewwindow");
  }

  public downloadPDF() {
    console.log("asdasda");
    let DATA = this.htmlData.nativeElement;
    let doc = new jsPDF("p", "pt", "a4");

    let handleElement = {
      "#editor": function (element, renderer) {
        return true;
      },
    };
    doc.fromHTML(DATA.innerHTML, 15, 15, {
      width: 200,
      elementHandlers: handleElement,
    });

    doc.save("angular-demo.pdf");
  }

  openModal(modalRef: TemplateRef<any>) {
    this.modal = this.modalService.show(modalRef, this.modalConfig);
  }

  closeModal() {
    this.modal.hide();
    // this.editActionForm.reset();
  }

  successAlert(task) {
    this.closeModal();
    Swal.fire({
      title: "Success",
      text: task,
      icon: "success",
      // showCancelButton: true,
      confirmButtonText: "Okay",
      // cancelButtonText: "No, keep it",
    });
  }
}
