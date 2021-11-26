let breadimg = document.getElementById('bread-img');

let valor1;
let valor2;
let valor3;
let result;

let nump = 0;

function calcValue(){
    if(bread.value == "value1"){
        valor1 = 3.00;
        let = breadn = 'Pão Francês'
    }
    else if(bread.value == "value2"){
        valor1 = 8.00;
        let = breadn = 'Pão Australiano'
    }
    else if(bread.value == "value3"){
        valor1 = 6.00;
        let = breadn = 'Pão de Brioche'
    }else{
        alert('Pão não selecionado')
        return;
    }

    if(burguer.value == "value1"){
        valor2 = 13.00;
        let = burguern = 'Hambúrguer de picanha'
    }
    else if(burguer.value == "value2"){
        valor2 = 10.00;
        let = burguern = 'Hamburguer de costela'
    }
    else if(burguer.value == "value3"){
        valor2 = 12.00;
        let = burguern = 'Hamburguer Vegano'
    }else{
        alert('Hamburguer não selecionado')
        return;
    }

    if(salad.value == "value1"){
        valor3 = 1.50;
        let = saladn = 'Alface'
    }
    else if(salad.value == "value2"){
        valor3 = 1.50;
        let = saladn = 'Tomate'
    }
    else if(salad.value == "value3"){
        valor3 = 0;
        let = saladn = 'Sem Salada'
    }else{
        alert('Salada não selecionado')
        return;
    }

    if(cheese.value == "value1"){
        valor4 = 3.00;
        let = cheesen = 'Mussarela'
    }
    else if(cheese.value == "value2"){
        valor4 = 3.00;
        let = cheesen = 'Prato'
    }
    else if(cheese.value == "value3"){
        valor4 = 5.00;
        let = cheesen = 'Cheddar'
    }else{
        alert('Queijo não selecionado')
        return;
    }

    nump++;

    result = valor1 + valor2 + valor3 + valor4;
    
    document.getElementById('set-info').style.display = 'flex'

    
    document.getElementById('item').innerHTML = 'Pedido ' + nump;
    document.getElementById('item1').innerHTML = breadn;
    document.getElementById('item2').innerHTML = burguern;
    document.getElementById('item3').innerHTML = saladn;
    document.getElementById('item4').innerHTML = cheesen;
    document.getElementById('result').innerHTML = "Valor: R$" + result.toFixed(2);;



}
