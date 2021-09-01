import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';

import { HomeComponent } from './components/home/home.component';
import { ReposListComponent } from './components/repos-list/repos-list.component';
import { SearchComponent } from './components/search/search.component';
import { ReposEffects } from './store/repos.effects';
import { reducerRepo } from './store/repos.reducers';
import { environment } from 'src/environments/environment';
import { RepoComponent } from './components/repo/repo.component';
import { Router } from '@angular/router';




@NgModule({
  declarations: [
    HomeComponent,
    ReposListComponent,
    SearchComponent,
    RepoComponent
  ],
  exports : [
    HomeComponent,
    RepoComponent
  ],
  imports: [
    CommonModule,
    FormsModule, 
    HttpClientModule,
    EffectsModule.forFeature([ReposEffects]),
    StoreModule.forFeature('repos',reducerRepo), StoreDevtoolsModule.instrument({maxAge : 25 , logOnly : environment.production}),
  ], 
  providers : []
})
export class ReposModule { }
