import { Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { SearchpageComponent } from './searchpage/searchpage.component';
import { WishlistpageComponent } from './wishlistpage/wishlistpage.component';

export const routes: Routes = [
    {
        path: '',
        title: 'Movie App',
        component: AppComponent,
    },
    {
        path: '/search',
        title: 'Search | Movie App',
        component: SearchpageComponent,
    },
    {
        path: '/wishlist',
        title: 'Wishlist | Movie App',
        component: WishlistpageComponent,
    }
];
