import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { IAccount } from '../../interfaces/IAccount';

@Injectable({
  providedIn: 'root',
})
export class ShareAccount {
  private account = new BehaviorSubject<IAccount>({} as IAccount)

  // Observable pour s'abonner aux données partagées
  accountShareByShareService$: Observable<IAccount> = this.account.asObservable();

  // Méthode pour partager une nouvelle valeur
  shareAccount(account: IAccount) {
    this.account.next(account)
  }
}
