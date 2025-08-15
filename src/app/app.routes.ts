import { Routes } from '@angular/router';
import { Login } from './login/login';
import { SignUp } from './sign-up/sign-up';
import { Product } from './product/product';
import { ProductDetails } from './product-details/product-details';

export const routes: Routes = [
    {path: "login" , component: Login},
    {path: 'sign-up' , component: SignUp},
    {path: 'product' , component: Product},
    {path: 'product/:id' , component: ProductDetails}
];
