let userList = {};
userList['dirty1raccoon'] = { 'firstName' : 'Sergei', 'lastName' : 'Kukhta', 'nickname' : 'dirty1raccoon', 'password' : 'examplepass', 'email' : 'example@gmail.com', 'phone' : '+7-999-999-99-99' };

//#region 

const btnCreate = document.getElementById('btn-create');

const createForm = () => {
    document.getElementById('right-column-content').style.display = 'none';
    document.getElementById('right-column').insertAdjacentHTML('beforeend', '<input type="text" id="input-name" placeholder="Enter first name" title="May contains only upper and lower case english letters">');
    document.getElementById('right-column').insertAdjacentHTML('beforeend', '<input type="text" id="input-surname" placeholder="Enter last name" title="May contains only upper and lower case english letters">');
    document.getElementById('right-column').insertAdjacentHTML('beforeend', '<input type="text" id="input-nickname" placeholder="Enter your nickname" title="May contains upper and lower case english letters and numbers">');
    document.getElementById('right-column').insertAdjacentHTML('beforeend', '<input type="password" id="input-password" placeholder="Enter your password" title="May contains upper and lower case english letters and numbers">');
    document.getElementById('right-column').insertAdjacentHTML('beforeend', '<input type="text" id="input-email" placeholder="Enter your e-mail" title="example@mail.com">');
    document.getElementById('right-column').insertAdjacentHTML('beforeend', '<input type="text" id="input-number" placeholder="Enter your phone number" title="+x-xxx-xxx-xx-xx">');
    document.getElementById('right-column').insertAdjacentHTML('beforeend', '<button onclick="validateForm()" id="btn-send-form">Send data</button>');
}

function validateForm() {

    let regExpName = /^[a-zA-Z]+$/;

    let firstName = document.getElementById('input-name').value;
    if (regExpName.exec(firstName) === null) {
        alert('Incorrect input of  first name, please, try again!');
        return;
    }

    let lastName = document.getElementById('input-surname').value;
    if (regExpName.exec(lastName) === null) {
        alert('Incorrect input of last name, please, try again!');
        return;
    }

    let nickname = document.getElementById('input-nickname').value;
    let regExpNick = /^\w+$/;
    if (regExpNick.exec(nickname) === null) {
        alert('Incorrect input of nickname, please, try again!');
        return;
    }

    let password = document.getElementById('input-password').value;
    if (regExpNick.exec(password) === null) {
        alert('Incorrect input of password, please, try again!');
        return;
    }

    let email = document.getElementById('input-email').value;
    let regExpEmail = /^\w+@[a-zA-Z0-9]+\.[a-zA-Z]{2,3}$/;
    if (regExpEmail.exec(email) === null) {
        alert('Incorrect input of e-mail, please, try again!');
        return;
    }
    
    let number = document.getElementById('input-number').value;
    let regExpNumber = /^\+7\-\d{3}\-\d{3}\-\d{2}\-\d{2}$/;
    if (regExpNumber.exec(number) === null) {
        alert('Incorrect input of phone number, please, try again!');
        return;
    }

    userList[nickname] = {'firstName' : firstName, 'lastName' : lastName, 'nickname' : nickname, 'password' : password, 'email' : email, 'number' : number};
    alert(`Welcome ${firstName} ${lastName}!`);
}

btnCreate.addEventListener('click', createForm);
//#endregion

//region
const btnSignUp = document.getElementById('btn-sign-up');

const createFormSignUp = () => {
    document.getElementById('right-column-content').style.display = 'none';
    document.getElementById('right-column').insertAdjacentHTML('beforeend', '<input type="text" id="input-nickname" placeholder="Enter your nickname">');
    document.getElementById('right-column').insertAdjacentHTML('beforeend', '<input type="text" id="input-password" placeholder="Enter your password">');
    document.getElementById('right-column').insertAdjacentHTML('beforeend', '<button onclick="signUp()" id="btn-sign-up-form">Send data</button>');
}

function signUp() {
    let inputNickname = document.getElementById('input-nickname').value;
    let inputPassword = document.getElementById('input-password').value;
    console.log(userList[inputNickname]);
    if (userList[inputNickname] !== undefined) {
        let password = userList[inputNickname].password;
        if (password === inputPassword)
            alert(`Hello, ${userList[inputNickname].firstName} ${userList[inputNickname].lastName}`);
        else
            alert('Sorry, entered password is not correct');
        }
    else
        alert('Sorry, user with this nickname is not registered in our base');  
}

btnSignUp.addEventListener('click', createFormSignUp);
//#endregion