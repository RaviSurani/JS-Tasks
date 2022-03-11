let users = [{
    id: 1,
    name: 'aa',
    pin: '123',
    balance: '5000',
    actions: [{ action: 'deposit', date: '01/01/2020', amount: '200' },
        { action: 'window', date: '01/01/2020', amount: '100' },
        { action: 'transfer', date: '01/01/2020', amount: '100', to: '2' }
    ]
}, {
    id: 2,
    name: 'bb',
    pin: '456',
    balance: '50000',
    actions: [{ action: 'deposit', date: '01/01/2020', amount: '1000' },
        { action: 'window', date: '01/01/2020', amount: '5000' },
        { action: 'transfer', date: '01/01/2020', amount: '7000', to: '1' }
    ]
}];

function loadgame() {

}

function login() {
    let username = document.getElementById('userid').value;
    let pin = document.getElementById('pin').value;

    users.forEach(function(user) {
        if (user.name == username && user.pin == pin) {
            showDetails(user.id);
        } else {
            return false;
        }
    })
}

function showDetails(userid) {
    let statment = users[userid - 1];


}