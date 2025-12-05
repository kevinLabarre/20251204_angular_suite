import { Component, inject, OnDestroy, OnInit, signal } from '@angular/core';
import { ShareAccount } from '../../service/shareAccount/share-account';
import { IAccount } from '../../interfaces/IAccount';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-deposit-and-withdrawal',
  imports: [],
  templateUrl: './deposit-and-withdrawal.html',
  styleUrl: './deposit-and-withdrawal.css',
})
export class DepositAndWithdrawal implements OnInit, OnDestroy {
  private shareService = inject(ShareAccount)
  account = signal<IAccount>({} as IAccount)

  private subscription = new Subscription()

  ngOnInit(): void {
    this.subscription = this.shareService.accountShareByShareService$.subscribe(resp => this.account.set(resp))
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe()
    console.log("on destroy")
  }

}
