import { Component, OnInit } from "@angular/core";
import { Car } from "src/app/services/models/car";
import { CarsService } from "src/app/services/cars.service";

@Component({
  selector: "app-cars-list",
  templateUrl: "./cars-list.component.html",
  styleUrls: ["./cars-list.component.scss"]
})
export class CarsListComponent implements OnInit {
  carsList: Car[] = [];
  search = "";
  constructor(private carService: CarsService) {
    this.carService.getData("cars").subscribe((response: Car[]) => {
      this.carsList = response;
    });
  }

  ngOnInit() {}
}
