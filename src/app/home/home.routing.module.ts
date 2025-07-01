import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SignInComponent } from './siginin/signin.component';
import { SignupComponent } from './siginup/signup.component';
import {HomeComponent} from "./siginup/home.component";
import {AuthGuard} from "../core/auth/auth.guard";

const routes: Routes = [
  {
    // O path aqui é vazio, pois ele será relativo ao path 'home' definido no AppRoutingModule
    path: '',
    component: HomeComponent,
    // Este guard impede que um usuário JÁ LOGADO acesse a página de login novamente
    canActivate: [AuthGuard],
    children: [
      {
        // Quando a rota for 'home', este será o componente padrão (login)
        path: '',
        component: SignInComponent,
      },
      {
        // Quando a rota for 'home/signup'
        path: 'signup',
        component: SignupComponent
      }
    ]
  }
];

@NgModule({
  // Usamos forChild aqui, pois este é um módulo de uma funcionalidade
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
