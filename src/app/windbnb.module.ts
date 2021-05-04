import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';

import { WindbnbComponent } from './windbnb.component';
import { StayComponent } from './windbnb/containers/stay-list/stay/stay.component';
import { StayListComponent } from './windbnb/containers/stay-list/stay-list.component';
import { FooterComponent } from './windbnb/containers/footer/footer.component';
import { HeaderComponent } from './windbnb/containers/header/header.component';
import { ToolbarComponent } from './windbnb/containers/header/toolbar/toolbar.component';
import { SearchComponent } from './windbnb/containers/search/search.component';

import { WindbnbRoutingModule } from './windbnb/routing/windbnb-routing.module';

import { LazyImgDirective } from './windbnb/shared/directives/lazy-img.directive';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'windbnb',
    pathMatch: 'full'
  },
  {
    path: 'windbnb',
    loadChildren: () =>
      import('./windbnb/routing/windbnb-routing.module').then(m => m.WindbnbRoutingModule)
  }
];

@NgModule({
  declarations: [
    WindbnbComponent,
    StayComponent,
    StayListComponent,
    FooterComponent,
    HeaderComponent,
    ToolbarComponent,
    SearchComponent,
    LazyImgDirective
  ],
  imports: [
    BrowserModule,
    FormsModule,
    WindbnbRoutingModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [WindbnbComponent]
})
export class WindbnbModule { }
