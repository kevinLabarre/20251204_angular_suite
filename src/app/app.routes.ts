import { Routes } from '@angular/router';
import { HomePage } from '../pages/home-page/home-page';
import { AccountPage } from '../pages/account-page/account-page';
import { NewsPage } from '../pages/news-page/news-page';
import { NotFoundPage } from '../pages/not-found-page/not-found-page';
import { AddAccount } from '../components/add-account/add-account';
import { AccountResume } from '../components/account-resume/account-resume';
import { DepositAndWithdrawal } from '../components/deposit-and-withdrawal/deposit-and-withdrawal';

export const routes: Routes = [
  { path: "", component: HomePage, title: "Accueil" },
  {
    path: "compte-bancaire", component: AccountPage, title: "Comptes", children: [
      { path: "", redirectTo: "ajouter", pathMatch: "full" },
      { path: "ajouter", component: AddAccount },
      { path: "details", component: AccountResume },
      { path: "depot-et-retrait", component: DepositAndWithdrawal },
    ]
  },

  { path: "actualites", component: NewsPage, title: "Actualités" },

  // Avec prefix, la redirection fonctionnera même sur les routes qui n'ont pas exactement le chemin du path
  // Par exemple comptes-bancaires/ajouter redirigera vers compte-bancaire/ajouter
  { path: "comptes-bancaires", redirectTo: "compte-bancaire", pathMatch: "prefix" },

  { path: "**", component: NotFoundPage, title: "404" }

];
