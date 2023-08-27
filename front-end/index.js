var result=document.querySelector('#result');
var submit=document.querySelector('#submit');
var ans=document.querySelector('#ans');

submit.addEventListener('click',(e)=>{
    var x=document.querySelector('#x');
    x=parseInt(x.value);
    var y=document.querySelector('#y');
    y=parseInt(y.value);
    result.value=x+y;
    ans.innerHTML="Ans is: "+result.value;

    var x=2+3;
})