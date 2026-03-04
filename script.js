let input = document.getElementById('input')
let buttons = document.querySelectorAll('button')

let str = ""

buttons.forEach((button) => {
    button.addEventListener("click",(element) =>{
    let value = element.target.innerHTML;

    if(value === 'B'){
        str = str.slice(0,-1);
        input.value = str
    }else if(value === 'C'){
        str = ""
        input.value = str
    }else if(value == '='){
        str = eval(str)
        input.value = str
    }else{
        str += value;
        input.value = str
    }

    });
});