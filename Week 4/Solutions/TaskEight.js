class PaymentMethod {
    getAmount() {
        return 'Your amount in the account is: ';
    }
};

class CashMethod extends PaymentMethod {
    constructor(amountValue = 0) {
        super();
        let _amount = amountValue;

        this.addToAmount = (amountValue) => {
            _amount += amountValue;
            return this;
        }

        this.reduceFromAmount = (amountValue) => {
            _amount -= amountValue;
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
    constructor(amountValue = 0) {
        super();
        let _amount = amountValue;

        this.addToAmount = (amountValue) => {
            _amount += parseInt(0.9 * amountValue);
            return this;
        }

        this.reduceFromAmount = (amountValue) => {
            _amount -= amountValue;
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
