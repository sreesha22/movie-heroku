import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

import { MovieSearchComponent } from "./movie-search/movie-search.component";
import { MovieDetailComponent } from "./movie-detail/movie-detail.component";

const routes: Routes = [
  { path: "", component: MovieSearchComponent },
  { path: "movie-detail", component: MovieDetailComponent },
  { path: "**", redirectTo: "/", pathMatch: "full" }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
