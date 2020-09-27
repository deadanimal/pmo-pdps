import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-soalan-lazim",
  templateUrl: "./soalan-lazim.component.html",
  styleUrls: ["./soalan-lazim.component.scss"],
})
export class SoalanLazimComponent implements OnInit {
  isCollapsed = false;
  isCollapsed1 = true;
  isCollapsed2 = true;
  isCollapsed3 = true;
  isCollapsed4 = true;

  constructor() {}

  ngOnInit(): void {}
}
