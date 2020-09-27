import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";

@Component({
  selector: "app-footer",
  templateUrl: "./footer.component.html",
  styleUrls: ["./footer.component.scss"],
})
export class FooterComponent implements OnInit {
  date: Date = new Date();
  constructor(private router: Router) {}

  ngOnInit() {}

  navigatePage(path: String) {
    // let qq = "db17a36a-1da6-4919-9746-dfed8802ec9d";
    // if (path == "agency/programs") {
    return this.router.navigate([path]);
    // }
  }
}
