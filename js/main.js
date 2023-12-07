let costOutput = document.querySelector('.cost-output');
let cost = document.querySelector('.cost');
let percent = document.querySelector('.percent');
let percentOutput = document.querySelector('.percent-output');
let percentCost = document.querySelector('.percent-cost');
let sum = document.querySelector('.sum');
let period = document.querySelector('.period');
let periodOutput = document.querySelector('.period-output');

cost.addEventListener('input', function (cost) {
    costOutput.value = cost.target.value;
    percentCost.value = Math.floor(cost.target.value * percentOutput.value/100);
    sum.value = costOutput.value - percentCost.value;
});

costOutput.addEventListener('input', function (costOutput) {
    cost.value = costOutput.target.value;
});

percent.addEventListener('input', function (percent) {
    percentOutput.value = percent.target.value;
    percentCost.value = Math.floor(cost.value * percentOutput.value/100);
    sum.value = costOutput.value - percentCost.value;
});

percentOutput.addEventListener('input', function (percentOutput) {
    percent.value = percentOutput.target.value;
});

period.addEventListener('input', function (period) {
    periodOutput.value = period.target.value;
});

periodOutput.addEventListener('input', function (periodOutput) {
    period.value = periodOutput.target.value;
});

function ifCost(output, numLess, numMore) {
    if (output.value < numLess) {
        output.value = numLess;
    }
    if (output.value > numMore) {
        output.value = numMore;
    }
}

costOutput.onchange = function () {
    ifCost(costOutput, 5000000, 80000000);

    percentCost.value = Math.floor(costOutput.value * percent.value/100);
    sum.value = costOutput.value - percentCost.value;
};

percentCost.onchange = function () {
    if (percentCost.value < Math.floor(costOutput.value * 0.1)) {
        percentCost.value = Math.floor(costOutput.value * 0.1);
    }
    if (percentCost.value > Math.floor(costOutput.value * 0.99)) {
        percentCost.value = Math.floor(costOutput.value * 0.99);
    }

    percentOutput.value = Math.floor(percentCost.value / cost.value*100);
    percent.value = Math.floor(percentCost.value / cost.value*100);
    sum.value = costOutput.value - percentCost.value;
};

percentOutput.onchange = function () {
    ifCost(percentOutput, 10, 99);

    percentCost.value = Math.floor(cost.value * percentOutput.value/100);
    sum.value = costOutput.value - percentCost.value;
};

periodOutput.onchange = function () {
    ifCost(percentOutput, 1, 35);
};

let payments = document.querySelectorAll('.payment');
let percentRates = document.querySelectorAll('.percent-rate');
let bankOffers = document.querySelectorAll('.bank-offer');
let program = document.querySelector('.program');

function calculations(percentRate, period, payment) {
    let i = percentRate.value / 1200;
    let n = period.value * 12;
    let d = Math.pow(1 + i, n);
    payment.value = Math.floor(sum.value * ((i * d) / (d - 1)));
}

function events(period, periodOutput, cost, costOutput, percent, percentOutput, percentCost, percentRate, payment) {
    period.addEventListener('change', function () {
        calculations (percentRate, period, payment);
    });
    periodOutput.addEventListener('change', function () {
        calculations (percentRate, period, payment);
    });
    cost.addEventListener('change', function () {
        calculations (percentRate, period, payment);
    });
    costOutput.addEventListener('change', function () {
        calculations (percentRate, period, payment);
    });
    percent.addEventListener('change', function () {
        calculations (percentRate, period, payment);
    });
    percentOutput.addEventListener('change', function () {
        calculations (percentRate, period, payment);
    });
    percentCost.addEventListener('change', function () {
        calculations (percentRate, period, payment);
    });
};

function iffer(bank, period, periodOutput, cost, costOutput, percent, percentOutput, percentCost, percentRate, payment) {
    if (payment.closest(bank)) {
        if (percentRate.closest(bank)) {
            events(period, periodOutput, cost, costOutput, percent, percentOutput, percentCost, percentRate, payment);
        };
    };
}

function wrapper(period, periodOutput, cost, costOutput, percent, percentOutput, percentCost, percentRate, payment, programStatus) {
    switch (programStatus) {
        case 'standart':
            iffer('.vtb', period, periodOutput, cost, costOutput, percent, percentOutput, percentCost, 3, payment);
            iffer('.alfa', period, periodOutput, cost, costOutput, percent, percentOutput, percentCost, 4, payment);
            iffer('.sber', period, periodOutput, cost, costOutput, percent, percentOutput, percentCost, 5, payment);
            break;
        case 'all':
            iffer('.vtb', period, periodOutput, cost, costOutput, percent, percentOutput, percentCost, 12, payment);
            iffer('.alfa', period, periodOutput, cost, costOutput, percent, percentOutput, percentCost, 13, payment);
            iffer('.sber', period, periodOutput, cost, costOutput, percent, percentOutput, percentCost, 14, payment);
            break;
        case 'family':
            iffer('.vtb', period, periodOutput, cost, costOutput, percent, percentOutput, percentCost, 6, payment);
            iffer('.alfa', period, periodOutput, cost, costOutput, percent, percentOutput, percentCost, 7, payment);
            iffer('.sber', period, periodOutput, cost, costOutput, percent, percentOutput, percentCost, 8, payment);
            break;
        case 'IT':
            iffer('.vtb', period, periodOutput, cost, costOutput, percent, percentOutput, percentCost, 9, payment);
            iffer('.alfa', period, periodOutput, cost, costOutput, percent, percentOutput, percentCost, 10, payment);
            iffer('.sber', period, periodOutput, cost, costOutput, percent, percentOutput, percentCost, 11, payment);
            break;
        default:
            break;
        }   
    }

function forWrapper(programStatus) {
    for (let percentRate of percentRates) {
        for (let payment of payments) {
            wrapper(period, periodOutput, cost, costOutput, percent, percentOutput, percentCost, percentRate, payment, programStatus);
        };
    };
}

function ifForWrapper(programStatus, program) {
    if (program.target.value === programStatus) {
        forWrapper(programStatus);
    }
}

forWrapper();

program.addEventListener('change', function (program) {
    ifForWrapper('all', program);
    ifForWrapper('standart', program);
    ifForWrapper('family', program);
    ifForWrapper('IT', program);
});

let banks = document.querySelector('.banks');

function ifBank(bankName, bankOffer) {
    if (bankOffer.matches(bankName)) {
        bankOffer.classList.remove('hidden');
    } else {
        bankOffer.classList.add('hidden');
    }
}

for (let bankOffer of bankOffers) {
    bankOffer.classList.remove('hidden');
    banks.addEventListener('change', function (banks) {
        if (banks.target.value === "vtb") {
            ifBank('.vtb');
        } else if (banks.target.value === "sber") {
            ifBank('.sber');
        } else if (banks.target.value === "alfa") {
            ifBank('.alfa');
        } else {
            bankOffer.classList.remove('hidden');
        };
    });
};
