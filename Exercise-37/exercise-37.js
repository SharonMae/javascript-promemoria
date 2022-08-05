class BankAccount {
    constructor(money) {
        this.money = money
    }
    deposit(add) {
        this.money += add;
    }
    withdraw(take) {
        this.money -= take
    }
    view() {
        console.log(this.money)
    }
}

const bankAccount = new BankAccount(1000);
bankAccount.deposit(500);
bankAccount.deposit(200);
bankAccount.withdraw(800);
bankAccount.view();