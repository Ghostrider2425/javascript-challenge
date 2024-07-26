class Account {
    
    balance = 0;

    deposit(amount){
        this.balance += amount;

        console.log(`Updated balance is ${this.balance}`);
    }

    withdraw(amount){
        if(this.balance >= amount){
            this.balance-= amount;

            console.log(`Reamining balance is ${this.balance}`);
        } else {
            console.log("Insufficent balance :" , this.balance);
        }
    }
}

const account = new Account()

account.deposit(100);

account.withdraw(300);