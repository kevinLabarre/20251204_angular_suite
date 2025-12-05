import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IAccount } from '../../interfaces/IAccount';

@Injectable({
  providedIn: 'root',
})
export class AccountService {
  constructor(private http: HttpClient) { }

  private baseUrl = "http://localhost:3000/accounts"

  getAccounts(): Observable<IAccount[]> {
    return this.http.get<IAccount[]>(this.baseUrl)
  }

}
