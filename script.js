//TRANSFERINDO ID'S EM VARIAVEIS
var num = document.getElementById('txt1')
var resp = document.getElementById('res')

//CRIANDO FUNÇÃO QUANDO CLICAR NO BOTÃO
function calcular(){

    var n1 = Number(num.value) //VARIAVEL QUE RECEBE O NÚMERO INSERIDO NA CAIXA DE ENTRADA
    
    resp.innerHTML = '' //PARA LIMPAR DIV ANTIGA
   
    for(i=1; i<=10; i++){
        t = n1*i
        resp.innerHTML += `<p> ${n1} x ${i} = ${t} </p>`
    }

    
}
