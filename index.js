//window.alert('Por Favor Preencha os dados apenas com a verdade!')
function Confirmar(){
    let txtn = document.getElementById('txtn')
    let txti = document.getElementById('txti')
    let txtc = document.getElementById('txtc')
    let txts = document.getElementById('txts')
    let nome = String(txtn.value)
    let idade = Number(txti.value)
    let cargo = String(txtc.value)
    let salario = Number(txts.value)
    document.write(`Seu nome é ${nome.toUpperCase()}, tem ${idade} anos, atualmente trabalha como ${cargo}, recebendo um salário de ${salario.toLocaleString('pt-br', {style: 'currency', currency: 'BRL'})}`)
}
        
  