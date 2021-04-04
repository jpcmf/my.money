import db from '../db';

const database = db.ref('/transactions');

interface Transaction {
  id?: number;
  title: string;
  amount: number;
  type: string;
  category: string;
  createdAt?: string;
}

class TransactionsDataService {
  getAll() {
    return database;
  }

  create(transaction: Transaction) {
    return database.push(transaction);
  }

  update(key: string, value: Object) {
    return database.child(key).update(value);
  }

  delete(key: string) {
    return database.child(key).remove();
  }

  deleteAll() {
    return database.remove();
  }
}

export default new TransactionsDataService();
