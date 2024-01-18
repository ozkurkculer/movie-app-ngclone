import { Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { SearchpageComponent } from './searchpage/searchpage.component';
import { WishlistpageComponent } from './wishlistpage/wishlistpage.component';
import { MovieDetailComponent } from './movie-detail/movie-detail.component';
import { HomeComponent } from './home/home.component';

export const routes: Routes = [
    {
        path: '',
        title: 'Movie App',
        component: HomeComponent,
    },
    {
        path: 'search',
        title: 'Search | Movie App',
        component: SearchpageComponent,
    },
    {
        path: 'wishlist',
        title: 'Wishlist | Movie App',
        component: WishlistpageComponent,
    },
    {
        path: 'movie/:id',
        component: MovieDetailComponent,
    }
];
