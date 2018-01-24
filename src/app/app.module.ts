import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AlertModule } from 'ngx-bootstrap/alert';
import { ModuleWithProviders } from '@angular/core';

import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { AngularFontAwesomeModule } from 'angular-font-awesome';
import { routing } from './app.routing';
import { AppComponent } from './app.component';
import { HomeModule } from './home/home.module';
// import { HomeComponent } from './home/home.component';
import { MyProjectsComponent } from './my-projects/my-projects.component';
import { FooterComponent } from './shared/layout/footer/footer.component';
import { HeaderComponent } from './shared/layout/header/header.component';
import { TabsetProjectsComponent } from './tabset-projects/tabset-projects.component';
import { BlogComponent } from './blog/blog.component';
import { GalleryComponent } from './gallery/gallery.component';
import { ImagesComponent } from './images/images.component';
import {ImageService} from './shared/image.service';
import { ImageFilterPipe } from './shared/filter.pipe';

@NgModule({
  declarations: [
    AppComponent,
    MyProjectsComponent,
    FooterComponent,
    HeaderComponent,
    TabsetProjectsComponent,
    BlogComponent,
    GalleryComponent,
    ImagesComponent,
    ImageFilterPipe
  ],
  imports: [
    BrowserModule,
    AngularFontAwesomeModule,
    HomeModule,
    AlertModule.forRoot(),
    NgbModule.forRoot(),
    routing
    // RouterModule.forRoot(
    //   appRoutes,
    //   { enableTracing: true } // <-- debugging purposes only
    // )
  ],
  providers: [ImageService, ImageFilterPipe],
  bootstrap: [AppComponent]
})
export class AppModule { }


