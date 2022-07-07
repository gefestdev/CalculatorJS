let input = document.getElementById('input_number');
input.disabled = true;
let btns = document.querySelectorAll('.calculator__btn');
document.getElementById('btn_equals').classList.toggle('btnEquals');
document.getElementById('btn_delete').classList.toggle('btnDelete');

btns.forEach(function(btn){
    console.log(btn);
    btn.addEventListener('click', function(e){
        if(input.value == '0'){
            input.value = '';
            input.value += e.target.value;
        }
        else{
            input.value += e.target.value;
        }
    });
});

document.getElementById('btn_delete').onclick = function(){
    input.value = "0";
}

document.getElementById('btn_equals').onclick = function(){
    let equals = input.value;
    equals = eval(equals);
    console.log(equals);
    input.value = equals;
}