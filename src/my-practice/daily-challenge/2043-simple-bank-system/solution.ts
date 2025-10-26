export class Bank {
  private balance: number[];
  private n: number;
  constructor(balance: number[]) {
    this.balance = balance;
    this.n = balance.length;
  }

  transfer(account1: number, account2: number, money: number): boolean {
    if (account1 > this.n || account2 > this.n) return false;
    if (account1 < 0 || account2 < 0) return false;
    account1--;
    account2--;
    if (this.balance[account1] < money) return false;
    this.balance[account1] -= money;
    this.balance[account2] += money;
    return true;
  }

  deposit(account: number, money: number): boolean {
    if (account > this.n || account < 0) return false;
    this.balance[account - 1] += money;
    return true;
  }

  withdraw(account: number, money: number): boolean {
    if (account > this.n || account < 0) return false;
    if (this.balance[account - 1] < money) return false;
    this.balance[account - 1] -= money;
    return true;
  }
}

/**
 * Your Bank object will be instantiated and called as such:
 * var obj = new Bank(balance)
 * var param_1 = obj.transfer(account1,account2,money)
 * var param_2 = obj.deposit(account,money)
 * var param_3 = obj.withdraw(account,money)
 */
