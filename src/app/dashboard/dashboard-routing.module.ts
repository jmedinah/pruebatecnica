import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { DashboardComponent } from "./dashboard.component";
import { CarsListComponent } from "./cars-list/cars-list.component";
import { CarCompareComponent } from "./car-compare/car-compare.component";
import { CarDetailComponent } from './car-detail/car-detail.component';

const routes: Routes = [
  {
    path: "",
    component: DashboardComponent,
    children: [
      { path: "", component: CarsListComponent },
      { path: "car-list", component: CarsListComponent },
      { path: "compare", component: CarCompareComponent },
      { path: "details/:carId", component: CarDetailComponent },
      { path: "compare", component: CarCompareComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
exports: [RouterModule],
  declarations: []
})
export class DashboardRoutingModule {}
