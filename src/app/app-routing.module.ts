import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CseComponent } from './cse/cse.component';


import { EeeComponent } from './eee/eee.component';
import { StudentDetailComponent } from './student-detail/student-detail.component';
import { EceComponent } from './ece/ece.component';

const routes: Routes = [
  { path: 'cse', component: CseComponent },
  { path: 'ece', component: EceComponent },
  { path: 'eee', component: EeeComponent },
  { path: 'student/:branch/:id', component: StudentDetailComponent },
  { path: '', redirectTo: '/cse', pathMatch: 'full' },
  { path: '**', redirectTo: '/cse' },
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
