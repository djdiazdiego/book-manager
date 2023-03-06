import {NgModule} from "@angular/core";
import {RouterModule, Routes} from "@angular/router";

import {ProjectRoutes} from "@project/project-routing";

const routes: Routes = [
  { path: "",   redirectTo: "/book", pathMatch: "full" },
  ...ProjectRoutes
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
