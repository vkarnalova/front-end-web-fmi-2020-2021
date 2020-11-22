class PaymentMethod {
    getAmount() {
        return 'Your amount in the account is: ';
    }
};

class CashMethod extends PaymentMethod {
    constructor(amount = 0) {
        super();
        let _amount = amount;

        this.addToAmount = (amount) => {
            _amount += amount;
            return this;
        }

        this.reduceFromAmount = (amount) => {
            _amount -= amount;
            if (_amount < 0) {
                _amount = 0;
            }
            return this;
        }

        this.getAmount = () => {
            return super.getAmount() + _amount;
        }
    }


};

class CreditMethod extends PaymentMethod {
    constructor(amount = 0) {
        super();
        let _amount = amount;

        this.addToAmount = (amount) => {
            _amount += parseInt(0.9 * amount);
            return this;
        }

        this.reduceFromAmount = (amount) => {
            _amount -= amount;
            if (_amount < 0) {
                _amount = 0;
            }
            return this;
        }

        this.getAmount = () => {
            return super.getAmount() + _amount;
        }
    }
};
