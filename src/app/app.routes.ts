import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { AdminLoginComponent } from './admin/admin-login/admin-login.component';
import { UserCrudComponent } from './admin/user-crud/user-crud.component';
import { AdminDashboardComponent } from './admin/admin-dashboard/admin-dashboard.component';
import { ProductComponent } from './product/product.component';
import { SigninSignupComponent } from './customer/signin-signup/signin-signup.component';
import { CheckoutComponent } from './customer/buyer/checkout/checkout.component';
import { BuyerDashboardComponent } from './customer/buyer/buyer-dashboard/buyer-dashboard.component';
import { SellerDashboardComponent } from './customer/seller/seller-dashboard/seller-dashboard.component';
import { PageNotFoundComponent } from './shared/layouts/page-not-found/page-not-found.component';

export const routes: Routes = [
    { path: "", component: HomeComponent },  // Carga HomeComponent en la ruta raíz
    { path: "my-profile", component: UserProfileComponent },
    { path: "contact-us", component: ContactUsComponent },
    
    // ADMIN
    { path: "admin-login", component: AdminLoginComponent },
    { path: "admin-dashboard", component: AdminDashboardComponent },
    { path: "admin/user", component: UserCrudComponent },
    { path: "admin/product", component: ProductComponent },
    
    // CUSTOMER
    { path: "sign-in", component: SigninSignupComponent },
    { path: "sign-up", component: SigninSignupComponent },
    { path: "seller/dashboard", component: SellerDashboardComponent },
    { path: "seller/product", component: ProductComponent },
    { path: "buyer-dashboard", component: BuyerDashboardComponent },
    { path: "checkout", component: CheckoutComponent },

    // Ruta para manejar 404
    { path: "**", component: PageNotFoundComponent }
];
