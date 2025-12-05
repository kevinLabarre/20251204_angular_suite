import { Component, inject, OnInit, signal } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { AccountService } from '../../service/account/account-service';
import { IAccount } from '../../interfaces/IAccount';
import { AccountsTable } from "../../components/accounts-table/accounts-table";

@Component({
  selector: 'app-account-page',
  imports: [RouterOutlet, RouterLink, RouterLinkActive, AccountsTable],
  templateUrl: './account-page.html',
  styleUrl: './account-page.css',
})
export class AccountPage implements OnInit {

  constructor() {
    // Dans le constructeur, on peut faire des injections de dépendances
    // Et assigner des valeurs (ne pas utiliser d'asynchrone) à nos variables de class
  }

  // Prévu pour du chargement de données asynchrone
  // NgOnInit nous assure d'avoir accès aux données passées par les composants parents via les @Input / @Output
  ngOnInit(): void {
    this.loadAccounts()
  }

  // Equivalent de l'injection de dépendance via le contructeur
  private accountService = inject(AccountService)

  accounts = signal<IAccount[]>([] as IAccount[])

  loadAccounts() {
    this.accountService.getAccounts().subscribe({
      next: (resp) => {
        this.accounts.set(resp)
        console.log(this.accounts())
      },
      error: () => { }
    })
  }

}
