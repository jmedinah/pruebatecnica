import { Component, OnInit, Input, SimpleChanges } from "@angular/core";
import { CarsService } from "src/app/services/cars.service";
import { Car } from "src/app/services/models/car";
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: "app-car-detail",
  templateUrl: "./car-detail.component.html",
  styleUrls: ["./car-detail.component.scss"]
})
export class CarDetailComponent implements OnInit {
  car: Car;
  classname: string;

  @Input() id: number;
  constructor(private route: ActivatedRoute, private carService: CarsService) {
    this.route.params.subscribe(params => {
      if (params.carId !== undefined) {
        this.classname = "content-size";
      } else {
        this.classname = "content-full";
      }
      this.getCarDetails(params.carId);
    });
  }

  ngOnInit() {}

  ngOnChanges(changes: SimpleChanges): void {
    this.getCarDetails(changes.id.currentValue);
  }
  getCarDetails(id) {
    this.carService
      .getData("cars/?id=" + id)
      .subscribe((data: Car) => (this.car = data[0]));
  }
}
