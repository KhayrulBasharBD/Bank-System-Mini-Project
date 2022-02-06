let submit = document.querySelector('#submit');
let secondPage = document.querySelector('.secondPage');
secondPage.style.display = 'none';

let goLogin = document.querySelector('.goLogin');
goLogin.style.display = 'none';

submit.addEventListener('click', () =>
{
    
    let loginPage = document.querySelector('.login');
    let accountInput = document.querySelector("#account").value;
    let passwordInput = document.querySelector("#password").value;
    
    if ((accountInput == '' ))
    {
        alert('Your Name Is Required!');
    } else if((passwordInput == ''))
    {
        alert('Password Is Required!');
    } else
    {
        loginPage.style.display = 'none';
        alert('আপনাকে স্বাগতম! সফল ভাবে লগইন করেছেন!!');
        secondPage.style.display = 'block';
        goLogin.style.display = 'block';
        
    }
})

//add balance

let addBalance = document.querySelector('#addBalance');
addBalance.addEventListener('click', () =>
{
    let addInput = document.querySelector('#addInput').value;
    let addFinal = parseFloat(addInput);
    
    let showBalance = document.querySelector('#showBalance').innerHTML;
    let showFinal = parseFloat(showBalance);
    
    let store = addFinal + showFinal;
    document.querySelector('#showBalance').innerHTML = store;
    
    //Total Balance
    
    
    // let addInput2 = document.querySelector('#addInput').value;
    // let addFinal2 = parseFloat(addInput2);
    
    let totalBalance = document.querySelector('#totalBalance').innerHTML;
    let finalBalance = parseFloat(totalBalance);
    
    let finalShow = finalBalance + store;
    document.querySelector('#totalBalance').innerHTML = finalShow.toFixed(2);
    console.log(finalShow)
    
    
})


//widthdrow balance

let widthdrowButton = document.querySelector('#withdrowBalance');

widthdrowButton.addEventListener('click', () =>
{
    let withdrowInput = document.querySelector('#withdrowInput').value;
    let finalWithdrow = parseFloat(withdrowInput);
    
    let finalTotalBalance = document.querySelector('#totalBalance').innerHTML;
    
    let output = finalTotalBalance - finalWithdrow;
    document.querySelector('#totalBalance').innerHTML = output;
})


//loging page

let goLoginBtn = document.querySelector('#goLogin');
goLoginBtn.addEventListener('click', () =>
{
    let loginShow = document.querySelector('.login');
    loginShow.style.display = 'block';

    let secondPageHide = document.querySelector('.secondPage');
    secondPageHide.style.display = 'none';
    alert('আবারও আপনাকে লগইন পেইজে স্বাগতম!!');


})

