export interface IAccount {
  id?: string;
  userId?: number;
  accountNumber: string;
  accountType: 'EPARGNE' | 'COURANT';
  solde: number;
  lastTransactionDate: Date
}
