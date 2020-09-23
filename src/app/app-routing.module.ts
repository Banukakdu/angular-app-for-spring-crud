import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from './home/home.component';
import {LayoutComponent} from './layout/layout.component';


const routes: Routes = [
  {path : 'layout', component: LayoutComponent},
  {path : '', component: LayoutComponent,
  children: [
    {path: '', component: HomeComponent}
  ]},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
