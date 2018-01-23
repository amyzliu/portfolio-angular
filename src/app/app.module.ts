import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';

import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { AngularFontAwesomeModule } from 'angular-font-awesome';

import { AppComponent } from './app.component';
import { HomeModule } from './home/home.module';
import { HomeComponent } from './home/home.component';
import { MyProjectsComponent } from './my-projects/my-projects.component';
import { FooterComponent } from './shared/layout/footer/footer.component';
import { HeaderComponent } from './shared/layout/header/header.component';
// import { TabsetComponent } from './tabset/tabset.component';
import { TabsetProjectsComponent } from './tabset-projects/tabset-projects.component';
import { BlogComponent } from './blog/blog.component';


const appRoutes: Routes = [
  { path: 'my-projects', component: MyProjectsComponent },
  { path: 'home', component: HomeComponent },
  { path: 'blog', component: BlogComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    MyProjectsComponent,
    FooterComponent,
    HeaderComponent,
    TabsetProjectsComponent,
    BlogComponent
  ],
  imports: [
    BrowserModule,
    AngularFontAwesomeModule,
    HomeModule,
    NgbModule.forRoot(),
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true } // <-- debugging purposes only
    )
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }


