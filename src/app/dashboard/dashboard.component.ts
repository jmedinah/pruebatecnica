import { Component, OnInit } from "@angular/core";
import { CarsService } from "../services/cars.service";
import { Car } from "../services/models/car";

@Component({
  selector: "app-dashboard",
  templateUrl: "./dashboard.component.html",
  styleUrls: ["./dashboard.component.scss"]
})
export class DashboardComponent implements OnInit {
  carsDefault: Car[];

  constructor(private carService: CarsService) {}

  ngOnInit() {
    this.carService.getData("cars/?id=1").subscribe((response: Car) => {
      console.log(response);
    });
  }
}
