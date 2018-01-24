import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { AppModule } from './app.module';
import { HomeComponent } from './home/home.component';
import { MyProjectsComponent } from './my-projects/my-projects.component';
import { FooterComponent } from './shared/layout/footer/footer.component';
import { HeaderComponent } from './shared/layout/header/header.component';
import { TabsetProjectsComponent } from './tabset-projects/tabset-projects.component';
import { BlogComponent } from './blog/blog.component';
import { GalleryComponent } from './gallery/gallery.component';
import { ImagesComponent} from './images/images.component';

export const appRoutes: Routes = [
  { path: 'my-projects', component: MyProjectsComponent },
  { path: 'home', component: HomeComponent },
  { path: 'blog', component: BlogComponent },
  { path: 'gallery', component: GalleryComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full'},
  { path: 'image/:id', component: ImagesComponent}
];
export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
