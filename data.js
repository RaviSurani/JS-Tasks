let users = [{
    id: 0,
    name: 'zz',
    pin: '123',
    balance: 5000,
    movement: [{ date: '01/01/2020', amount: 200 }, { date: '01/01/2020', amount: -100 },
        { date: '01/01/2020', amount: 500 }, { date: '01/01/2020', amount: 200 },
        { date: '01/01/2020', amount: -100 }, { date: '01/01/2020', amount: -200 },
    ],
    loan: [
        { action: 'loan', date: '01/01/2020', loanAmount: 1000, payed: '200', pending: '800' },
        { action: 'loan', date: '01/01/2020', loanAmount: 5000, payed: '1000', pending: '4000' },
    ],
    transfer: [
        { action: 'send', date: '01/01/2020', amount: -100, to: '2' },
        { action: 'receive', date: '01/01/2020', amount: 200, to: '2' },
        { action: 'send', date: '01/01/2020', amount: -100, to: '2' },
    ],

}, {
    id: 1,
    name: 'aa',
    pin: '123',
    balance: 5000,
    movement: [{ date: '01/01/2020', amount: 200 }, { date: '01/01/2020', amount: -100 },
        { date: '01/01/2020', amount: 500 }, { date: '01/01/2020', amount: 200 },
        { date: '01/01/2020', amount: -100 }, { date: '01/01/2020', amount: -200 },
    ],
    loan: [
        { action: 'loan', date: '01/01/2020', loanAmount: 1000, payed: '200', pending: '800' },
        { action: 'loan', date: '01/01/2020', loanAmount: 2000, payed: '1000', pending: '1000' },
    ],
    transfer: [
        { action: 'send', date: '01/01/2020', amount: -100, to: '2' },
        { action: 'receive', date: '01/01/2020', amount: 200, to: '2' },
        { action: 'send', date: '01/01/2020', amount: -100, to: '2' },
    ],

}, {
    id: 2,
    name: 'bb',
    pin: '456',
    balance: 50000,
    movement: [{ date: '01/01/2020', amount: 500 }, { date: '01/01/2020', amount: -400 },
        { date: '01/01/2020', amount: 600 }, { date: '01/01/2020', amount: 200 },
        { date: '01/01/2020', amount: -200 }, { date: '01/01/2020', amount: -100 },
    ],
    loan: [
        { action: 'loan', date: '01/01/2020', loanAmount: 5000, payed: '2000', pending: '3000' },
    ],
    transfer: [
        { action: 'receive', date: '01/01/2020', amount: 100, to: '1' },
        { action: 'send', date: '01/01/2020', amount: -200, to: '1' },
        { action: 'receive', date: '01/01/2020', amount: 100, to: '1' },
    ],
}];
userid = '';