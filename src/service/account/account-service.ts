import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IAccount } from '../../interfaces/IAccount';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class AccountService {
  constructor(private http: HttpClient) { }

  private baseUrl = environment.accountUrl // Récupérer depuis nos variables d'environnement

  getAccounts(): Observable<IAccount[]> {
    return this.http.get<IAccount[]>(this.baseUrl)
  }

}
