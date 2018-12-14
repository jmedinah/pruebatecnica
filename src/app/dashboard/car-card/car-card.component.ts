import { Component, OnInit, Input } from "@angular/core";
import { Car } from "../../services/models/car";
import { CarsService } from "src/app/services/cars.service";
import { Router } from "@angular/router";

@Component({
  selector: "app-car-card",
  templateUrl: "./car-card.component.html",
  styleUrls: ["./car-card.component.scss"]
})
export class CarCardComponent implements OnInit {
  @Input() carInfo: Car;
  constructor() {}

  ngOnInit() {}
}
