    document.getElementById('body').classList.remove("loos");
let list = [];
(function() {
    if (localStorage.getItem('todoList') != null && localStorage.getItem('todoList') != '') {
        list = JSON.parse(localStorage.todoList);
    } else {
        localStorage.setItem('todoList', JSON.stringify(list))
    }
    setUl(list);
})();

function getCurrentDate() {
    return new Date().toLocaleString();
}

function updateLocalList() {
    localStorage.setItem('todoList', JSON.stringify(list))
    setUl(list);
}

function setUl(showList) {
    let html = '';
    showList.forEach(function(item, index) {
        html += `<tr>
        <td class='tdCheckbox'><input type="checkbox" class="editRecord" value="${index}"></td>
        <td class='hide' id=${'div' + index}>  <input type="text" id="item${index}" value='${item.name}' class='editnput'> <button onclick='update(${index})'>Edit</button></td>
        <td class='itemName ${item.status != 'active' ? 'overLine' : ''}' id='td${index}'>${item.name}</td>
        <td class='itemName' >${item.time}<td>
        <td class='row'>
          <button class="button col-5" onclick='editItem(${index})'><span class="bi bi-pen"></span></button><button class="button col-5" onclick='removeItem(${index})'><i class="bi bi-x-square"></i></button></td>
        
        </tr> `;
    });
    document.getElementById('itemtable').innerHTML = html;
    document.getElementById('totalSpan').innerText = list.length;
}

function editItem(id) {
    document.getElementById('td' + id).classList.toggle('hide')
    document.getElementById('div' + id).classList.toggle('hide')
}

function update(id) {
    list[id] = document.getElementById('item' + id).value;
    localList();
    setUl(list);
}

function removeItem(id) {
    list.splice(id, 1);
    updateLocalList();
    setUl(list);
}

function search() {
    let inputval = document.getElementById('maininput').value;
    let newList = [];
    list.forEach(function(item, index) {
        if (item.name.indexOf(inputval) != -1) {
            newList.push({
                name: item.name
            })
        }
    });
    if (!newList.length) {
        newList.push({
            name: 'No Record Found.',
            time: '',
            status: 'active',
        });
        document.getElementById('addBtn').classList.remove('hide')
    }
    setUl(newList);
}

function addnew() {
    let item = document.getElementById('maininput').value;
    if (!list.includes(item)) {
        list.push({
            name: item,
            time: getCurrentDate(),
            status: 'active',
        });
    } else {
        alert('Allrady in List')
    }
    updateLocalList();
    setUl(list);
}

function sortList(id) {
    if (id == 1) {
        list.sort((a, b) => (a.name > b.name) ? 1 : -1);
    } else if (id == 2) {
        list.reverse((a, b) => (a.name > b.name) ? 1 : -1);
    } else if (id == 3) {
        list.sort((a, b) => (a.tiem > b.time) ? 1 : -1);
    } else if (id == 4) {
        list.reverse((a, b) => (a.tiem > b.time) ? 1 : -1);
    }
    setUl(list);
}

function checkAll() {
    check = document.querySelectorAll('input[type=checkbox]');
    check.forEach(function(checkbox) {
        checkbox.checked = true;
    })
}

function active() {
    check = document.querySelectorAll('input[type=checkbox]:checked');
    check.forEach(function(chk) {
        list[chk.value].status = 'active'
    })
    updateLocalList();
}

function inactive() {
    check = document.querySelectorAll('input[type=checkbox]:checked');
    check.forEach(function(chk) {
        list[chk.value].status = 'inactive'
    })
    updateLocalList();
}

function showInput() {
    document.getElementById('maininput').classList.toggle('hide')
}