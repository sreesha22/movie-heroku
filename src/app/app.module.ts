import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule } from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";
import { AppRoutingModule } from "./app-routing.module";

import { AppComponent } from "./app.component";
import { MovieService } from "./movie.service";
import { MovieCardComponent } from "./movie-card/movie-card.component";
import { MovieDetailComponent } from "./movie-detail/movie-detail.component";
import { MovieSearchComponent } from "./movie-search/movie-search.component";
import { UtilsModule } from "./utils/utils.module";

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule,
    UtilsModule
  ],
  declarations: [
    AppComponent,
    MovieCardComponent,
    MovieDetailComponent,
    MovieSearchComponent
  ],
  bootstrap: [AppComponent],
  providers: [MovieService]
})
export class AppModule {}
