localStorage.setItem('currentCalculation','');
localStorage.setItem('previousCalculation',''); 

// First tried using stack data structure to store the 
// history of calculation but later understood that even
// a single variable can make my job done. 
localStorage.setItem('history','');
localStorage.setItem('historyCount',0);

//Appending each number to input screen and also storing it in localStorage.
function appendDigit1()
{
    let num = document.getElementById('btn-1').innerHTML;
    localStorage.setItem('currentCalculation',localStorage.getItem('currentCalculation')+ num);
    document.getElementById('currentInput').innerHTML = localStorage.getItem('currentCalculation');
}

function appendDigit2()
{
    let num = document.getElementById('btn-2').innerHTML;
    localStorage.setItem('currentCalculation',localStorage.getItem('currentCalculation') + num);
    document.getElementById('currentInput').innerHTML = localStorage.getItem('currentCalculation');
}

function appendDigit3()
{
    let num = document.getElementById('btn-3').innerHTML;
    localStorage.setItem('currentCalculation',localStorage.getItem('currentCalculation') + num);
    document.getElementById('currentInput').innerHTML = localStorage.getItem('currentCalculation');
}

function appendDigit4()
{
    let num = document.getElementById('btn-4').innerHTML;
    localStorage.setItem('currentCalculation',localStorage.getItem('currentCalculation') + num);
    document.getElementById('currentInput').innerHTML = localStorage.getItem('currentCalculation');
}

function appendDigit5()
{
    let num = document.getElementById('btn-5').innerHTML;
    localStorage.setItem('currentCalculation',localStorage.getItem('currentCalculation') + num);
    document.getElementById('currentInput').innerHTML = localStorage.getItem('currentCalculation');
}


function appendDigit6()
{
    let num = document.getElementById('btn-6').innerHTML;
    localStorage.setItem('currentCalculation',localStorage.getItem('currentCalculation') + num);
    document.getElementById('currentInput').innerHTML = localStorage.getItem('currentCalculation');
}

function appendDigit7()
{
    let num = document.getElementById('btn-7').innerHTML;
    localStorage.setItem('currentCalculation',localStorage.getItem('currentCalculation') + num);
    document.getElementById('currentInput').innerHTML = localStorage.getItem('currentCalculation');
}

function appendDigit8()
{
    let num = document.getElementById('btn-8').innerHTML;
    localStorage.setItem('currentCalculation',localStorage.getItem('currentCalculation') + num);
    document.getElementById('currentInput').innerHTML = localStorage.getItem('currentCalculation');
}

function appendDigit9()
{
    let num = document.getElementById('btn-9').innerHTML;
    localStorage.setItem('currentCalculation',localStorage.getItem('currentCalculation') + num);
    document.getElementById('currentInput').innerHTML = localStorage.getItem('currentCalculation');
}

function appendDigit0()
{
    let num = document.getElementById('btn-0').innerHTML;
    localStorage.setItem('currentCalculation',localStorage.getItem('currentCalculation') + num);
    document.getElementById('currentInput').innerHTML = localStorage.getItem('currentCalculation');
}


function add()
{
    if(localStorage.getItem('currentCalculation')!='' && localStorage.getItem('previousCalculation')==''){
        localStorage.setItem('previousCalculation',localStorage.getItem('previousCalculation') + localStorage.getItem('currentCalculation') + '+');
        document.getElementById('previousInput').innerHTML = localStorage.getItem('previousCalculation');
        document.getElementById('currentInput').innerHTML = '';
        localStorage.setItem('currentCalculation','');
    }else if(localStorage.getItem('currentCalculation')!='' && localStorage.getItem('previousCalculation')!=''){
        let sign = localStorage.getItem('previousCalculation').slice(localStorage.getItem('previousCalculation').length-1,localStorage.getItem('previousCalculation').length);
        if(sign=='+'){
            let num = parseFloat(localStorage.getItem('previousCalculation').slice(0,localStorage.getItem('previousCalculation').length-1));
            let sum = num + parseFloat(localStorage.getItem('currentCalculation'));
            let sumString = sum.toString();
            sumString += '+';
            document.getElementById('previousInput').innerHTML = sumString;
            document.getElementById('currentInput').innerHTML = '';
            localStorage.setItem('previousCalculation', sumString);
            localStorage.setItem('currentCalculation','');
        }else if(sign=='-'){
            subtract();
        }else if(sign=='*'){
            multiply();
        }else if(sign=='/'){
            divide();
        }else if(sign=='%'){
            modFun();
        }
    }
}

function subtract()
{
    if(localStorage.getItem('currentCalculation')!='' && localStorage.getItem('previousCalculation')==''){
        localStorage.setItem('previousCalculation',localStorage.getItem('previousCalculation') + localStorage.getItem('currentCalculation') + '-');
        document.getElementById('previousInput').innerHTML = localStorage.getItem('previousCalculation');
        document.getElementById('currentInput').innerHTML = '';
        localStorage.setItem('currentCalculation','');
    }else if(localStorage.getItem('currentCalculation')!='' && localStorage.getItem('previousCalculation')!=''){
        let sign = localStorage.getItem('previousCalculation').slice(localStorage.getItem('previousCalculation').length-1,localStorage.getItem('previousCalculation').length);
        console.log(sign);
        if(sign=='-'){
            let num = parseFloat(localStorage.getItem('previousCalculation').slice(0,localStorage.getItem('previousCalculation').length-1));
            console.log(num);
            let diff = num - parseFloat(localStorage.getItem('currentCalculation'));
            let diffString = diff.toString();
            diffString += '-';
            document.getElementById('previousInput').innerHTML = diffString;
            document.getElementById('currentInput').innerHTML = '';
            localStorage.setItem('previousCalculation', diffString);
            localStorage.setItem('currentCalculation','');
        }else if(sign=='+'){
            add();
        }else if(sign=='*'){
            multiply();
        }else if(sign=='/'){
            divide();
        }else if(sign=='%'){
            modFun();
        }
    }
}

function multiply()
{
    if(localStorage.getItem('currentCalculation')!='' && localStorage.getItem('previousCalculation')==''){
        localStorage.setItem('previousCalculation',localStorage.getItem('previousCalculation') + localStorage.getItem('currentCalculation') + '*');
        document.getElementById('previousInput').innerHTML = localStorage.getItem('previousCalculation');
        document.getElementById('currentInput').innerHTML = '';
        localStorage.setItem('currentCalculation','');
    }else if(localStorage.getItem('currentCalculation')!='' && localStorage.getItem('previousCalculation')!=''){
        let sign = localStorage.getItem('previousCalculation').slice(localStorage.getItem('previousCalculation').length-1,localStorage.getItem('previousCalculation').length);
        if(sign=='*'){
            let num = parseFloat(localStorage.getItem('previousCalculation').slice(0,localStorage.getItem('previousCalculation').length-1));
            let sum = num * parseFloat(localStorage.getItem('currentCalculation'));
            let sumString = sum.toString();
            sumString += '*';
            document.getElementById('previousInput').innerHTML = sumString;
            document.getElementById('currentInput').innerHTML = '';
            localStorage.setItem('previousCalculation', sumString);
            localStorage.setItem('currentCalculation','');
        }else if(sign=='-'){
            subtract();
        }else if(sign=='+'){
            add();
        }else if(sign=='/'){
            divide();
        }else if(sign=='%'){
            modFun();
        }
    }
}

function divide()
{
    if(localStorage.getItem('currentCalculation')!='' && localStorage.getItem('previousCalculation')==''){
        localStorage.setItem('previousCalculation',localStorage.getItem('previousCalculation') + localStorage.getItem('currentCalculation') + '/');
        document.getElementById('previousInput').innerHTML = localStorage.getItem('previousCalculation');
        document.getElementById('currentInput').innerHTML = '';
        localStorage.setItem('currentCalculation','');
    }else if(localStorage.getItem('currentCalculation')!='' && localStorage.getItem('previousCalculation')!=''){
        let sign = localStorage.getItem('previousCalculation').slice(localStorage.getItem('previousCalculation').length-1,localStorage.getItem('previousCalculation').length);
        if(sign=='/'){
            let num = parseFloat(localStorage.getItem('previousCalculation').slice(0,localStorage.getItem('previousCalculation').length-1));
            let sum = (num / parseFloat(localStorage.getItem('currentCalculation'))).toFixed(5);
            let sumString = sum.toString();
            sumString += '/';
            document.getElementById('previousInput').innerHTML = sumString;
            document.getElementById('currentInput').innerHTML = '';
            localStorage.setItem('previousCalculation', sumString);
            localStorage.setItem('currentCalculation','');
        }else if(sign=='*'){
            multiply();
        }else if(sign=='+'){
            add();
        }else if(sign=='-'){
            subtract();
        }else if(sign=='%'){
            modFun();
        }
    }
}

function modFun()
{
    if(localStorage.getItem('currentCalculation')!='' && localStorage.getItem('previousCalculation')==''){
        localStorage.setItem('previousCalculation',localStorage.getItem('previousCalculation') + localStorage.getItem('currentCalculation') + '%');
        document.getElementById('previousInput').innerHTML = localStorage.getItem('previousCalculation');
        document.getElementById('currentInput').innerHTML = '';
        localStorage.setItem('currentCalculation','');
    }else if(localStorage.getItem('currentCalculation')!='' && localStorage.getItem('previousCalculation')!=''){
        let sign = localStorage.getItem('previousCalculation').slice(localStorage.getItem('previousCalculation').length-1,localStorage.getItem('previousCalculation').length);
        if(sign=='%'){
            let num = parseInt(localStorage.getItem('previousCalculation').slice(0,localStorage.getItem('previousCalculation').length-1));
            let sum = num % parseInt(localStorage.getItem('currentCalculation'));
            let sumString = sum.toString();
            sumString += '%';
            document.getElementById('previousInput').innerHTML = sumString;
            document.getElementById('currentInput').innerHTML = '';
            localStorage.setItem('previousCalculation', sumString);
            localStorage.setItem('currentCalculation','');
        }else if(sign=='*'){
            multiply();
        }else if(sign=='+'){
            add();
        }else if(sign=='-'){
            subtract();
        }else if(sign=='/'){
            divide();
        }
    }
}

function del()
{
    if(localStorage.getItem('currentCalculation')!='')
    {
        let sub_string = localStorage.getItem('currentCalculation').slice(0,localStorage.getItem('currentCalculation').length-1);
        localStorage.setItem('currentCalculation',sub_string);
        document.getElementById('currentInput').innerHTML = sub_string;
    }
}

function clr()
{
    localStorage.setItem('previousCalculation','');
    localStorage.setItem('currentCalculation','');
    document.getElementById('previousInput').innerHTML = '';
    document.getElementById('currentInput').innerHTML = '';
}

function negate()
{
    let currentInp = document.getElementById('currentInput').innerHTML;

    if(currentInp[0] == '-'){
        let newNum = currentInp.slice(1,currentInp.length);
        localStorage.setItem('currentCalculation',newNum);
        document.getElementById('currentInput').innerHTML = newNum;
    }else if(currentInp[0]!='+' || currentInp[0]!='-'){
        let crntInp = '-' + currentInp;
        localStorage.setItem('currentCalculation',crntInp);
        document.getElementById('currentInput').innerHTML = crntInp;
    }
}

function dec()
{
    let currentInp = document.getElementById('currentInput').innerHTML;
    let finalInp = currentInp + '.';
    localStorage.setItem('currentCalculation',finalInp);
    document.getElementById('currentInput').innerHTML = finalInp;
}

function equal()
{
    if(localStorage.getItem('currentCalculation')!='' && localStorage.getItem('previousCalculation')!=''){
        let num1String = localStorage.getItem('previousCalculation');
        let sign = localStorage.getItem('previousCalculation').slice(localStorage.getItem('previousCalculation').length-1,localStorage.getItem('previousCalculation').length);
        let num2String = localStorage.getItem('currentCalculation');

        let num1 = parseFloat(num1String);
        let num2 = parseFloat(num2String);

        localStorage.setItem('previousCalculation', '');
        localStorage.setItem('currentCalculation', '');

        let ans = 0;

        document.getElementById('previousInput').innerHTML = '';

        if(sign=='+')
        {
            ans = num1 + num2;
            document.getElementById('currentInput').innerHTML = ans.toString();
        }else if(sign=='-'){
            ans = num1 - num2;
            document.getElementById('currentInput').innerHTML = ans.toString();
        }else if(sign=='*'){
            ans = num1 * num2;
            document.getElementById('currentInput').innerHTML = ans.toString();
        }else if(sign=='/'){
            ans = (num1 / num2).toFixed(5);
            document.getElementById('currentInput').innerHTML = ans.toString();
        }else if(sign=='%'){
            ans = num1 % num2;
            document.getElementById('currentInput').innerHTML = ans.toString();
        }

        let latestCalculation = num1String + num2String + '=' + ans.toString();

        // For the History purpose
        if(parseInt(localStorage.getItem('historyCount'))==0 || parseInt(localStorage.getItem('historyCount'))>5){
            localStorage.setItem('history',latestCalculation);
            localStorage.setItem('historyCount',parseInt(localStorage.getItem('historyCount'))+1);
            document.getElementById('historyData').innerHTML = latestCalculation;
        }else if(parseInt(localStorage.getItem('historyCount'))<5){
            let newCal = latestCalculation + "\n" + localStorage.getItem('history');
            localStorage.setItem('history',newCal);
            localStorage.setItem('historyCount',parseInt(localStorage.getItem('historyCount'))+1);
            console.log(localStorage.getItem('historyCount'));
            document.getElementById('historyData').innerHTML = localStorage.getItem('history');
        }else{
            localStorage.setItem('historyCount',0);
            document.getElementById('historyData').innerHTML = latestCalculation;
        }
    }
}