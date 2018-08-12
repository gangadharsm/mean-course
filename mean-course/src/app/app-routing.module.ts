import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PostListComponent } from './components/posts/post-list/post-list.component';
import { PostCreateComponent } from './components/posts/post-create/post-create.component';
import { AuthGuard } from './services/auth.guard';

const routes: Routes = [
    { path: '', component: PostListComponent },
    { path: 'create', component: PostCreateComponent, canActivate: [AuthGuard] },
    { path: 'edit/:postId', component: PostCreateComponent, canActivate: [AuthGuard] },
    { path: 'auth', loadChildren: './components/auth/auth.module#AuthModule' }
];
@NgModule({
    imports: [RouterModule.forRoot(routes, { scrollPositionRestoration: 'enabled' })],
    exports: [RouterModule],
    providers: [AuthGuard]
})
export class AppRoutingModule {}
