import { Component, OnInit, Input, SimpleChanges } from "@angular/core";
import { CarsService } from "src/app/services/cars.service";
import { Car } from "src/app/services/models/car";
import { Observable } from "rxjs";
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: "app-car-detail",
  templateUrl: "./car-detail.component.html",
  styleUrls: ["./car-detail.component.scss"]
})
export class CarDetailComponent implements OnInit {
  car$: Observable<Car>;
  @Input() id: number;
  constructor(private route: ActivatedRoute, private carService: CarsService) {
    this.route.params.subscribe(params => {
      console.log(params);
      this.getCarDetails(params.carId);
    });
  }

  ngOnInit() {}

  ngOnChanges(changes: SimpleChanges): void {
    console.log(changes);
    this.getCarDetails(changes.id.currentValue);
    //Called before any other lifecycle hook. Use it to inject dependencies, but avoid any serious work here.
    //Add '${implements OnChanges}' to the class.
  }
  getCarDetails(id) {
    this.car$ = this.carService.getData<Car>("cars/?id=" + id);
  }
}
