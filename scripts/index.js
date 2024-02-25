// применение первого способа
function foo() {
    colnsole.log('Первый вывод;');
    colnsole.log('Второй вывод;');
}


var flag = false;



//применение второго способа
block.onclick = function(){
    // if(flag)
    // block.style.backgroundColor = 'aquamarine';
    // else
    // block.style.backgroundColor = 'yellow';
    // flag =!flag;

    block.style.backgroundColor = flag ? 'aquamarine' : 'yellow';
    flag = ! flag;
}; 


// применяется, когда id вида blue-block - правильный способ обращения
const blueBlock = document.getElementById('blue-block');

blueBlock.onclick = function(){
    blueBlock.style.backgroundColor = flag ? 'aquamarine' : 'yellow';
    flag = ! flag;
}



// третий способ
//обращение идет к селектору
const redBlock = document.querySelector('#red-block');

let counter = 0;

// в круглых скобках параметры в фигурных тело функции
redBlock.addEventListener('click', () => {
    redBlock.innerText = ++counter; 
});

// click - событие, е - events,к нему применяются разные методы
const cout = document.querySelector('#console-out');
document.body.addEventListener('click', e  => {
    cout.innerText += `\nClick detected over ${e.target.nodeName}`;
});