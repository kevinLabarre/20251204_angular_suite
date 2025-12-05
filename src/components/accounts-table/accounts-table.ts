import { Component, inject, input, Input } from '@angular/core';
import { IAccount } from '../../interfaces/IAccount';
import { ShareAccount } from '../../service/shareAccount/share-account';
import { CurrencyPipe, DatePipe } from '@angular/common';

@Component({
  selector: 'app-accounts-table',
  imports: [CurrencyPipe, DatePipe],
  templateUrl: './accounts-table.html',
  styleUrl: './accounts-table.css',
})
export class AccountsTable {

  // @Input({ required: true }) accounts!: IAccount[]

  // accounts = input<IAccount[]>() // optional
  accounts = input.required<IAccount[]>() // required

  private shareService = inject(ShareAccount)

  handleClick(account: IAccount) {
    this.shareService.shareAccount(account)
  }
}
