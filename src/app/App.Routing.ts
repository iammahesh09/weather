import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WeatherLocationComponent } from './weather/weather-location/weather-location.component';


const appRouters: Routes = [
    { path: '', component: WeatherLocationComponent },
];


@NgModule({
    imports: [
        RouterModule.forRoot(appRouters)
    ],
    exports: [RouterModule]

})

export class AppRoutingModule {

}
