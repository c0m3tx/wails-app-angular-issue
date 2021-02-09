import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TestComponent } from './test.component';

const routes: Routes = [
  { path: 'test', component: TestComponent },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes,{enableTracing: true, useHash:true})
  ],
  exports: [RouterModule]
})

export class AppRoutingModule { }
