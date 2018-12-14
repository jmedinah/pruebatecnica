import { Component, OnInit } from '@angular/core';
import { CarsService } from '../services/cars.service';
import { Car } from '../services/models/car';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  carsDefault: Car[];
  carsList: Car[] = [];
  constructor(private carService: CarsService) { }

  ngOnInit() {

    this.carService.getData('app/cars').subscribe((response: Car[]) => {
      console.log(response);

      // this.sortProperties(response);
      // this.carsDefault = response;
      // this.carsList = response;
      // this.carsEmpty = 'No Cars to display';
    });

    this.carService.getData('app/cars/?carId=1').subscribe((response: Car[]) => {
      console.log(response);

      // this.sortProperties(response);
      // this.carsDefault = response;
      // this.carsList = response;
      // this.carsEmpty = 'No Cars to display';
    });
    // this.http.get(this.url).subscribe((data: Project[]) => {
    //   this.dataSource = new MatTableDataSource(data);
    //   this.dataSource.paginator = this.paginator;
    //   this.dataSource.sort = this.sort;
    // });
    // this.carService.<Car>getData('app/cars').subscribe(data => console.log(data));
  }

}
