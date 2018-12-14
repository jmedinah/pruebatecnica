import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { DashboardComponent } from "./dashboard.component";
import { DashboardRoutingModule } from "./dashboard-routing.module";
import { MatToolbarModule } from "@angular/material/toolbar";
import { MatButtonModule } from "@angular/material/button";
import { MatMenuModule } from "@angular/material/menu";
import { FormsModule } from "@angular/forms";
import {
  MatCardModule,
  MatIconModule,
  MatFormFieldModule,
  MatInputModule
} from "@angular/material";
import { MatSelectModule } from "@angular/material/select";
import { CarsService } from "../services/cars.service";

import { CarsListComponent } from "./cars-list/cars-list.component";
import { CarDetailComponent } from "./car-detail/car-detail.component";
import { CarCardComponent } from "./car-card/car-card.component";
import { CarCompareComponent } from "./car-compare/car-compare.component";
import { FilterPipe } from "./pipes/filter-pipe";

@NgModule({
  declarations: [
    DashboardComponent,
    CarsListComponent,
    CarDetailComponent,
    CarCardComponent,
    CarCompareComponent,
    FilterPipe
  ],
  imports: [
    DashboardRoutingModule,
    CommonModule,
    MatToolbarModule,
    MatButtonModule,
    MatMenuModule,
    FormsModule,
    MatCardModule,
    MatIconModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule
  ],
  providers: [CarsService]
})
export class DashboardModule {}
