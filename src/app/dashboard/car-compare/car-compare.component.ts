import { Component, OnInit } from "@angular/core";
import { Car } from "src/app/services/models/car";
import { CarsService } from "src/app/services/cars.service";

@Component({
  selector: "app-car-compare",
  templateUrl: "./car-compare.component.html",
  styleUrls: ["./car-compare.component.scss"]
})
export class CarCompareComponent implements OnInit {
  carsList: Car[];
  carIdOne: number;
  carIdTwo: number;
  carIdThree: number;

  constructor(private carService: CarsService) {
    this.carService.getData("cars").subscribe((response: Car[]) => {
      this.carsList = response;
    });
  }

  ngOnInit() {}

  showCarDetails(car, option) {
    switch (option) {
      case "one":
        this.carIdOne = car;
        break;
      case "two":
        this.carIdTwo = car;

        break;
      case "three":
        this.carIdThree = car;
        break;
      default:
        break;
    }
  }
}
