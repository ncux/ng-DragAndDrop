
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AccommodationComponent } from './accommodation/accommodation.component';
import { CelebrationsComponent } from './celebrations/celebrations.component';
import { FoodAndDrinkComponent } from './food-and-drink/food-and-drink.component';
import { LifestyleComponent } from './lifestyle/lifestyle.component';
import { WeddingsAndCeremoniesComponent } from './weddings-and-ceremonies/weddings-and-ceremonies.component';
import { OffersComponent } from './offers/offers.component';
import { SigninComponent } from './authorization/signin/signin.component';
import { SignupComponent } from './authorization/signup/signup.component';
import { HomeComponent } from './home/home.component';


const routes: Routes = [
    { path: '', redirectTo: '/home', pathMatch: 'full'},
    { path: 'accommodation', component: AccommodationComponent },
    { path: 'celebrations', component: CelebrationsComponent },
    { path: 'lifestyle', component: LifestyleComponent },
    { path: 'food-and-drink', component: FoodAndDrinkComponent },
    { path: 'weddings', component: WeddingsAndCeremoniesComponent },
    { path: 'offers', component: OffersComponent },
    { path: 'signin', component: SigninComponent },
    { path: 'signup', component: SignupComponent },
    { path: 'home', component: HomeComponent },

];


@NgModule({
    imports: [
        RouterModule.forRoot(routes),
    ],
    exports: [
        RouterModule,
    ],
})

export class RoutingModule {

}
