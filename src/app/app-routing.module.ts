import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: 'comp', loadChildren: () => import('./components/components-module.module').then(m => m.ComponentsModuleModule)}, 
  { path: '**', redirectTo: 'comp' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
