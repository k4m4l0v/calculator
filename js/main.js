//Калькулятор

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

costOutput.onchange = function () {
    if (costOutput.value < 5000000) {
        costOutput.value = 5000000;
    }
    if (costOutput.value > 80000000) {
        costOutput.value = 80000000;
    }

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
    if (percentOutput.value < 10) {
        percentOutput.value = 10;
    }
    if (percentOutput.value > 99) {
        percentOutput.value = 99;
    }

    percentCost.value = Math.floor(cost.value * percentOutput.value/100);
    sum.value = costOutput.value - percentCost.value;

    
};

periodOutput.onchange = function () {
    if (periodOutput.value < 1) {
        periodOutput.value = 1;
    }
    if (periodOutput.value > 35) {
        periodOutput.value = 35;
    }

    
};

//Предложения от банков

let payments = document.querySelectorAll('.payment');
let percentRates = document.querySelectorAll('.percent-rate');
let i;
let n;
let d;
let bankOffers = document.querySelectorAll('.bank-offer');
let program = document.querySelector('.program');

for (let percentRate of percentRates) {
    for (let payment of payments) {
        function func() {
            i = percentRate.value / 1200;
            n = period.value * 12;
            d = Math.pow(1+i, n);
            payment.value = Math.floor(sum.value * ((i * d) / (d - 1)));
        };
        function events() {
            period.addEventListener('change', function () {
                func ();
            });
            periodOutput.addEventListener('change', function () {
                func ();
            });
            cost.addEventListener('change', function () {
                func ();
            });
            costOutput.addEventListener('change', function () {
                func ();
            });
            percent.addEventListener('change', function () {
                func ();
            });
            percentOutput.addEventListener('change', function () {
                func ();
            });
            percentCost.addEventListener('change', function () {
                func ();
            });
        };
        if (payment.closest('.vtb')) {
            if (percentRate.closest('.vtb')) {
                percentRate.value = 12;
                events();
            };
        };
        if (payment.closest('.alfa')) {
            if (percentRate.closest('.alfa')) {
                percentRate.value = 13;
                events();
            };
        };
        if (payment.closest('.sber')) {
            if (percentRate.closest('.sber')) {
                percentRate.value = 14;
                events();
            };
        };
    };
};

program.addEventListener('change', function (program) {
    if (program.target.value === 'standart') {
        for (let percentRate of percentRates) {
            for (let payment of payments) {
                function func() {
                    i = percentRate.value / 1200;
                    n = period.value * 12;
                    d = Math.pow(1+i, n);
                    payment.value = Math.floor(sum.value * ((i * d) / (d - 1)));
                };
                if (payment.closest('.vtb')) {
                    if (percentRate.closest('.vtb')) {
                        percentRate.value = 3;
                        events();
                        func();
                    };
                };
                if (payment.closest('.alfa')) {
                    if (percentRate.closest('.alfa')) {
                        percentRate.value = 4;
                        events();
                        func();
                    };
                };
                if (payment.closest('.sber')) {
                    if (percentRate.closest('.sber')) {
                        percentRate.value = 5;
                        events();
                        func();
                    };
                };
            };
        };
    } else if (program.target.value === 'family') {
        for (let percentRate of percentRates) {
            for (let payment of payments) {
                function func() {
                    i = percentRate.value / 1200;
                    n = period.value * 12;
                    d = Math.pow(1+i, n);
                    payment.value = Math.floor(sum.value * ((i * d) / (d - 1)));
                };
                if (payment.closest('.vtb')) {
                    if (percentRate.closest('.vtb')) {
                        percentRate.value = 6;
                        events();
                        func();
                    };
                };
                if (payment.closest('.alfa')) {
                    if (percentRate.closest('.alfa')) {
                        percentRate.value = 7;
                        events();
                        func();
                    };
                };
                if (payment.closest('.sber')) {
                    if (percentRate.closest('.sber')) {
                        percentRate.value = 8;
                        events();
                        func();
                    };
                };
            };
        };
    } else if (program.target.value === 'IT') {
        for (let percentRate of percentRates) {
            for (let payment of payments) {
                function func() {
                    i = percentRate.value / 1200;
                    n = period.value * 12;
                    d = Math.pow(1+i, n);
                    payment.value = Math.floor(sum.value * ((i * d) / (d - 1)));
                };
                if (payment.closest('.vtb')) {
                    if (percentRate.closest('.vtb')) {
                        percentRate.value = 9;
                        events();
                        func();
                    };
                };
                if (payment.closest('.alfa')) {
                    if (percentRate.closest('.alfa')) {
                        percentRate.value = 10;
                        events();
                        func();
                    };
                };
                if (payment.closest('.sber')) {
                    if (percentRate.closest('.sber')) {
                        percentRate.value = 11;
                        events();
                        func();
                    };
                };
            };
        };
    } else { 
        for (let percentRate of percentRates) {
            for (let payment of payments) {
                function func() {
                    i = percentRate.value / 1200;
                    n = period.value * 12;
                    d = Math.pow(1+i, n);
                    payment.value = Math.floor(sum.value * ((i * d) / (d - 1)));
                };
                if (payment.closest('.vtb')) {
                    if (percentRate.closest('.vtb')) {
                        percentRate.value = 12;
                        events();
                        func();
                    };
                };
                if (payment.closest('.alfa')) {
                    if (percentRate.closest('.alfa')) {
                        percentRate.value = 13;
                        events();
                        func();
                    };
                };
                if (payment.closest('.sber')) {
                    if (percentRate.closest('.sber')) {
                        percentRate.value = 14;
                        events();
                        func();
                    };
                };
            };
        };
    };
});

let banks = document.querySelector('.banks');

for (let bankOffer of bankOffers) {
    bankOffer.classList.remove('hidden');
    banks.addEventListener('change', function (banks) {
        if (banks.target.value === "vtb") {
            if (bankOffer.matches('.vtb')) {
                bankOffer.classList.remove('hidden');
            } else {
                bankOffer.classList.add('hidden');
            };
        } else if (banks.target.value === "sber") {
            if (bankOffer.matches('.sber')) {
                bankOffer.classList.remove('hidden');
            } else {
                bankOffer.classList.add('hidden');
            };
        } else if (banks.target.value === "alfa") {
            if (bankOffer.matches('.alfa')) {
                bankOffer.classList.remove('hidden');
            } else {
                bankOffer.classList.add('hidden');
            };
        } else {
            bankOffer.classList.remove('hidden');
        };
    });
};
