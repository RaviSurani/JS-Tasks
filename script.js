function onload() {
    if (sessionStorage.getItem("loginUser") == null || sessionStorage.getItem("loginUser") == '') {
        document.getElementById('userDetails').classList.add("is-hidden")
        document.getElementById('userNotLogin').classList.remove("is-hidden")
    } else {
        userid = sessionStorage.getItem("loginUser")
        document.getElementById('login').classList.add('is-hidden')
        document.getElementById('logout').classList.remove('is-hidden')
        document.getElementById('loginName').innerText = users[userid].name
        document.getElementById('loginbalance').innerText = users[userid].balance
        showDetails();
        setDropdoen();
    }
}

function login() {
    let username = document.getElementById('userid').value;
    let pin = document.getElementById('pin').value;
    if ((username == '' || pin == '')) {
        document.getElementById('userDetails').classList.add("is-hidden")
        document.getElementById('userNotLogin').classList.remove("is-hidden")
    } else {
        users.forEach(function(user) {
            if (user.name == username && user.pin == pin) {
                userid = user.id;
                document.getElementById('userNotLogin').classList.add("is-hidden")
                document.getElementById('userDetails').classList.remove("is-hidden")

                sessionStorage.setItem("loginUser", user.id);
                onload()
            } else {
                return false;
            }
        })
    }
}

function LogOut() {
    sessionStorage.clear('loginUser');
    document.getElementById('logout').classList.add('is-hidden')
    document.getElementById('login').classList.remove('is-hidden')
    onload();
}

function showDetails() {
    let statment = users[userid];
    let divBody = '';
    let action = '';
    let cls = '';
    divBody += '<div class="media-content">';
    divBody += '<div class="content columns">';
    divBody += '<strong class="column is-one-third"> Activity</strong>';
    divBody += '<strong class="column is-one-third">Date</strong>';
    divBody += '<strong class="column is-one-third">Amount</strong>';
    divBody += '</div>';
    divBody += '</div>';
    statment.movement.forEach(function(move) {
        divBody += '<div class="media-content">';
        divBody += '<div class = "content columns" >';
        if (move.amount > 0) {
            action = 'deposit'
            cls = 'is-primary';
        } else {
            action = 'withdraw'
            cls = 'is-danger';
        }
        divBody += '<strong class = "column is-one-third" > <span class = "tag is-small ' + cls + ' is-light" >' + action + ' </span></strong >';
        divBody += '<strong class = "column is-one-third" > ' + move.date + ' </strong> ';
        divBody += '<strong class = "column is-one-third" > ' + move.amount + ' </strong>';
        divBody += '</div>';
        divBody += '</div>';
    });
    document.getElementById('actionsDiv').innerHTML = divBody;
}

function setDropdoen() {
    let selectBody = '';
    selectBody += '<option value ="0" selected disabled> Select Persone</option>';
    users.forEach(function(user) {
        if (user.id != userid) {
            selectBody += '<option value="' + user.id + '">' + user.name + '</option>';
        }
    });
    document.getElementById('transferSelsect').innerHTML = selectBody;
}

function transferDetails(sort = '') {
    let statment = users[userid];
    let divBody = '';
    let action = '';
    let cls = '';
    divBody += '<div class="media-content">';
    divBody += '<div class="content columns">';
    divBody += `<strong class="column is-one-forth"  onclick="transferDetails('Activity')"> Activity</strong>`;
    divBody += `<strong class="column is-one-forth" onclick="transferDetails('Date')">Date</strong>`;
    divBody += `<strong class="column is-one-forth" onclick="transferDetails('Date')">Amount</strong>`;
    divBody += '<strong class="column is-one-forth">To</strong>';
    divBody += '</div>';
    divBody += '</div>';

    statment.transfer.forEach(function(move) {
        divBody += '<div class="media-content">';
        divBody += '<div class = "content columns" >';
        if (move.amount < 0) {
            action = 'send'
            cls = 'is-primary';
        } else {
            action = 'receive'
            cls = 'is-info';
        }
        divBody += '<strong class = "column is-one-forth" > <span class = "tag ' + cls + ' is-light" >' + action + ' </span></strong >';
        divBody += '<strong class = "column is-one-forth" > ' + move.date + ' </strong> ';
        divBody += '<strong class = "column is-one-forth" > ' + move.amount + ' </strong>';
        divBody += '<strong class = "column is-one-forth" > ' + users[move.to].name + ' </strong>';
        divBody += '</div>';
        divBody += '</div>';
    });
    document.getElementById('actionsDiv').innerHTML = divBody;
}

function loanDetails() {
    let statment = users[userid];
    let divBody = '';
    divBody += '<div class="media-content">';
    divBody += '<div class = "content columns" >';
    divBody += '<strong class = "column is-one-fourth" style="font-size:.90rem;">Date</strong >';
    divBody += '<strong class = "column is-one-fourth" style="font-size:.90rem;" > Total Amount </strong> ';
    divBody += '<strong class = "column is-one-fourth" style="font-size:.90rem;">  Payed </strong>';
    divBody += '<strong class = "column is-one-fourth" style="font-size:.90rem;">  Pending </strong>';
    divBody += '</div>';
    divBody += '</div>';
    statment.loan.forEach(function(move) {
        divBody += '<div class="media-content">';
        divBody += '<div class = "content columns" >';
        divBody += '<strong class = "column is-one-fourth" >' + move.date + '</strong >';
        divBody += '<strong class = "column is-one-fourth" > ' + move.loanAmount + ' </strong> ';
        divBody += '<strong class = "column is-one-fourth" > ' + move.payed + ' </strong>';
        divBody += '<strong class = "column is-one-fourth" > ' + move.pending + ' </strong>';
        divBody += '</div>';
        divBody += '</div>';
    });
    document.getElementById('actionsDiv').innerHTML = divBody;

}

function transferAmount() {
    let amount = document.getElementById('transferAmount').value;
    let toid = document.getElementById('transferSelsect').value;
    let date = new Date().toLocaleDateString();
    user = users[userid];
    if (amount == '' || toid == '' || user.balance < amount) {
        errorShow()
        return false;
    } else {
        user.balance -= amount;
        users[toid].balance += Number(amount);
        user.transfer.push({ action: 'send', date: date, amount: -Math.abs(amount), to: toid })
        users[toid].transfer.push({ action: 'receive', date: date, amount: amount, to: user.id })
        document.getElementById('loginbalance').innerText = users[userid].balance
        sucessShow();
    }
}

function requestLoan() {
    if (loanamount == '') {
        errorShow
    } else {
        let loanamount = document.getElementById('loanAmount').value
        let date = new Date().toLocaleDateString()
        users[userid].loan.push({ action: 'loan', date: date, loanAmount: loanamount, payed: 0, pending: loanamount }, )
        sucessShow();
    }
}

function cloaseAccount() {
    id = document.getElementById('closeAccountId').value;
    pin = document.getElementById('closeAccountPin').value;
    if (users[userid].name == id && users[userid].pin == pin) {
        users.splice(userid, 1);
    }
    LogOut();
}

function errorShow() {
    document.getElementById('errorP').innerText = 'Not All Detals Properly filled';
    document.getElementById('errorDiv').classList.remove('is-hidden');
}

function sucessShow() {
    document.getElementById('errorDiv').classList.remove('is-hidden');
    document.getElementById('successP').innerText = 'Success';
    document.getElementById('successDiv').classList.toggle('is-hidden');
}

document.addEventListener('DOMContentLoaded', function() {
    let cardToggles = document.getElementsByClassName('card-toggle');
    for (let i = 0; i < cardToggles.length; i++) {
        cardToggles[i].addEventListener('click', e => {
            e.currentTarget.parentElement.parentElement.childNodes[3].classList.toggle('is-hidden');
        });
    }
});

document.addEventListener('DOMContentLoaded', () => {
    (document.querySelectorAll('.notification .delete') || []).forEach(($delete) => {
        const $notification = $delete.parentNode;
        $delete.addEventListener('click', () => {
            $notification.parentNode.removeChild($notification);
        });
    });
});
