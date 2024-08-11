import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { loadRemoteModule } from '@angular-architects/module-federation';

const routes: Routes = [
  {
    path: '',
    component: AboutComponent
  },
  {
    path: 'profile',
    loadChildren: () => loadRemoteModule({
      remoteEntry: 'http://localhost:4200/remoteEntry.js',
      remoteName: 'appMfeHome',
      exposedModule: './ProfileModule'
    }).then((m) => m.ProfileModule).catch((err) => console.log(err))
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
