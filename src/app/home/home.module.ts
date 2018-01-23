import { ModuleWithProviders, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { HomeComponent } from './home.component';
import { MyProjectsComponent } from './../my-projects/my-projects.component';
import { BlogComponent } from './../blog/blog.component';
import { FooterComponent } from './../shared/layout/footer/footer.component';
import { HeaderComponent } from './../shared/layout/header/header.component';
// import { TabsetComponent } from './../tabset/tabset.component';


const homeRouting: ModuleWithProviders = RouterModule.forChild([
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'my-projects',
    component: MyProjectsComponent
  },
  {
    path: 'blog',
    component: BlogComponent
  }
]);

@NgModule({
  imports: [
    CommonModule,
    homeRouting
  ],
  declarations: [
    HomeComponent
  ]
})


export class HomeModule { }
